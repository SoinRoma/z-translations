from django.db import models

# Create your models here.
class Translation(models.Model):
    def upload_path(self):
        return f'files/translation/{self.send_to}/'


    from_lang = models.CharField(max_length=255, null=True, blank=True)
    to_lang = models.CharField(max_length=255, null=True, blank=True)
    transfer_type = models.CharField(max_length=255, null=True, blank=True)
    file = models.FileField(null=True, blank=True, max_length=500, upload_to=upload_path)
    send_to = models.CharField(max_length=255, null=True, blank=True)

class Resume(models.Model):
    def upload_path(self):
        return f'files/resume/'
    file = models.FileField(max_length=255, null=True, blank=True, upload_to=upload_path)

class ContactInformation(models.Model):
    phone_numbers = models.CharField(max_length=255, null=True, blank=True)
    address = models.TextField(null=True, blank=True)