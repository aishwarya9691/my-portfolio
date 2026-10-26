import logging

logger = logging.getLogger(__name__)
from django.conf import settings
from django.core.mail import send_mail

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny

from .serializers import ContactSerializer


class ContactView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = ContactSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        name = serializer.validated_data["name"].strip()
        email = serializer.validated_data["email"]
        message = serializer.validated_data["message"].strip()

        if not name or not message:
            return Response(
                {"error": "Name and message cannot be empty."},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            send_mail(
                subject=f"Portfolio Contact Message from {name}",
                message=(
                    f"Name: {name}\n"
                    f"Email: {email}\n\n"
                    f"Message:\n{message}"
                ),
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_RECEIVER_EMAIL],
                fail_silently=False,
            )

            return Response(
                {
                    "success": True,
                    "message": "Message sent successfully!"
                },
                status=status.HTTP_200_OK
            )

        except Exception:
            logger.exception("CONTACT EMAIL FAILED")
            return Response(
                {"error": "Failed to send email"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
    