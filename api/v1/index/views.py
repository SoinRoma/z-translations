from rest_framework.generics import CreateAPIView, ListAPIView
from api.v1.index.serializers import ContactInformationSerializers, ResumeSerializers, TranslationSerializers
from index.models import ContactInformation, Resume, Translation

class ResumeCreateAPIView(CreateAPIView):
    serializer_class = ResumeSerializers
    queryset = Resume.objects.all()


class TranslationCreateAPIView(CreateAPIView):
    serializer_class = TranslationSerializers
    queryset = Translation.objects.all()
    
class ContactInformationListAPIView(ListAPIView):
    serializer_class = ContactInformationSerializers
    queryset = ContactInformation.objects.all()
