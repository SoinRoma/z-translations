from django.urls import path, include

urlpatterns = [
    path('index/', include('api.v1.index.urls')),
]
