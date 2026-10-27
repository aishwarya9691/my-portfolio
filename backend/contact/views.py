
import logging
import os
import json
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .serializers import ContactSerializer

logger = logging.getLogger(__name__)


class ContactView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST,
            )

        name = serializer.validated_data["name"].strip()
        email = serializer.validated_data["email"]
        message = serializer.validated_data["message"].strip()

        if not name or not message:
            return Response(
                {"error": "Name and message cannot be empty."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        api_key = os.getenv("RESEND_API_KEY")
        receiver = os.getenv("CONTACT_RECEIVER_EMAIL")

        if not api_key or not receiver:
            logger.error("Resend API key or receiver email is missing")
            return Response(
                {"error": "Email service is not configured."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        payload = {
            "from": "Portfolio Contact <onboarding@resend.dev>",
            "to": [receiver],
            "reply_to": email,
            "subject": f"Portfolio Contact Message from {name}",
            "text": (
                f"Name: {name}\n"
                f"Email: {email}\n\n"
                f"Message:\n{message}"
            ),
        }

        req = Request(
            "https://api.resend.com/emails",
            data=json.dumps(payload).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            method="POST",
        )

        try:
            with urlopen(req, timeout=20) as response:
                result = json.loads(response.read().decode("utf-8"))

            logger.info("Resend accepted email: %s", result.get("id"))

            return Response(
                {
                    "success": True,
                    "message": "Message sent successfully!",
                },
                status=status.HTTP_200_OK,
            )

        except HTTPError as exc:
            error_body = exc.read().decode("utf-8", errors="replace")
            logger.error(
                "Resend API returned HTTP %s: %s",
                exc.code,
                error_body,
            )
            return Response(
                {"error": "Email provider rejected the message."},
                status=status.HTTP_502_BAD_GATEWAY,
            )

        except (URLError, TimeoutError, OSError):
            logger.exception("Could not connect to Resend API")
            return Response(
                {"error": "Could not connect to email service."},
                status=status.HTTP_502_BAD_GATEWAY,
            )
