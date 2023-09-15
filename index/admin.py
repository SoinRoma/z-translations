from django.contrib import admin
from index.models import ContactInformation, Resume, Translation
# Register your models here.

class TranslationAdmin(admin.ModelAdmin):
    list_display = ['from_lang', 'to_lang', 'transfer_type']

admin.site.register(Translation, TranslationAdmin)
admin.site.register(ContactInformation)
admin.site.register(Resume)