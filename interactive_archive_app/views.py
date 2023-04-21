from django.shortcuts import render

from django.views.generic import ListView, TemplateView
from django.views.generic.edit import CreateView
from django.urls import reverse_lazy
#from .models import Upload, Location, Link # User
#from .forms import UploadForm


def home(request):
#    context = {"posts": Upload.objects.all()}
    return render(request, "interactive_archive_app/home.html")


def about(request):
    return render(request, "interactive_archive_app/about.html", {"title": "About"})

def interactive(request):
    return render(request, "interactive_archive_app/interactive.html", {"title": "Interactive"})

def intro(request):
    return render(request, "interactive_archive_app/intro.html", {"title": "Intro"})


# class UploadListView(ListView):
#     model = Upload
#     context_object_name = "list_of_uploads"
#     template_name = "upload_list.html"

class Intro(TemplateView):
    template_name = 'interactive_archive_app/intro.html'

class Credits(TemplateView):
    template_name = 'interactive_archive_app/credits.html'


# class UploadDataView(CreateView):
#     model = Upload
#     template_name = "interactive_archive_app/upload_data.html"
#     form_class= UploadForm
#     success_url = reverse_lazy('the_archive-list')

#     def form_valid(self, form):
#         # self.request.FILES is a dict
#         # each entry is an UploadedFiles object
#         # https://docs.djangoproject.com/en/2.1/ref/files/uploads/#uploaded-files
#         file_upload = self.request.FILES

#         for file_single in file_upload.values():
#             print("____________")
#             # check for file type
#             print(file_single.content_type)
#             print("____________")

#         form.save()
#         return super().form_valid(form)
    