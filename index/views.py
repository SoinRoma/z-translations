from django.views.generic import TemplateView
from index.models import Contacts

class IndexView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['contact_information'] = Contacts.objects.first()
        return context
