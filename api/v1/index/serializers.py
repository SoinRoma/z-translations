from index.models import Resume, ContactInformation, Translation
from rest_framework.serializers import ModelSerializer

class TranslationSerializers(ModelSerializer):
    class Meta:
        model = Translation
        fields = '__all__'

class ResumeSerializers(ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'

class ContactInformationSerializers(ModelSerializer):
    class Meta:
        model = ContactInformation
        fields = '__all__'