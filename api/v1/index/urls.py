from django.urls import path
from .views import *
urlpatterns = [
    path('resume/', ResumeCreateAPIView.as_view()),
    path('translation/', TranslationCreateAPIView.as_view()),
    path('contacts/', ContactInformationListAPIView.as_view())
]
