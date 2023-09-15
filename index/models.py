from django.db import models

# Create your models here.
class Translation(models.Model):
    def upload_path(self, filename):
        return f'files/translation/{self.send_to}/{filename}'

    client_name = models.CharField(max_length=255, null=True, blank=True)
    client_phone = models.CharField(max_length=255, null=True, blank=True)
    client_email = models.EmailField(max_length=255, null=True, blank=True)
    
    from_lang = models.CharField(max_length=255, null=True, blank=True)
    to_lang = models.CharField(max_length=255, null=True, blank=True)
    transfer_type = models.CharField(max_length=255, null=True, blank=True)
    file = models.FileField(null=True, blank=True, max_length=500, upload_to=upload_path)
    send_to = models.CharField(max_length=255, null=True, blank=True)

class Resume(models.Model):
    file = models.FileField(max_length=255, null=True, blank=True, upload_to='files/resume/')

class ContactInformation(models.Model):
    phone_numbers = models.CharField(max_length=255, null=True, blank=True)
    address = models.TextField(null=True, blank=True)