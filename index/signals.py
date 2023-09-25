from django.db.models.signals import post_save
from django.dispatch import receiver
from index.models import Translation, Resume
from index.telegram_utils import send_telegram_message

@receiver(post_save, sender=Translation)
def send_message(sender, instance, created, **kwargs):
    send_telegram_message(instance, is_ruseme=False)

@receiver(post_save, sender=Resume)
def send_resume(sender, instance, created, **kwargs):
    send_telegram_message(instance, is_ruseme=True)