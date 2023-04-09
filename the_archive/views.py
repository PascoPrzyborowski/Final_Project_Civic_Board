# import django models/libraries
from django.shortcuts import render
from django.views.generic import ListView
from django.views.generic.edit import CreateView 
from django.urls import reverse_lazy

# import DRF models/libraries
from rest_framework.generics import ListAPIView, GenericAPIView
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

# import app models
from .models import User, Upload, Location, Link
from .serializers import UploadSerializer
from .forms import UploadForm


def home(request):
    context = {"posts": Upload.objects.all()}
    return render(request, "the_archive/home.html", context)


def about(request):
    return render(request, "the_archive/about.html", {"title": "About"})


# set limits for number of response elements
class PaginatedProducts(LimitOffsetPagination):
    default_limit = 10
    max_limit = 100 # maximum size of the page that can be set by the API client


class UploadListAPI(ListAPIView):
    # in models.py we defined an alternative model manager: 
    # uploadobjects -> UploadObjects()
    queryset = Upload.uploadobjects.all()
    serializer_class = UploadSerializer
    
class UploadApi(GenericAPIView):
    queryset = Upload.objects.all()
    serializer_class = UploadSerializer

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        print("æææææææææææææææææææææaaa")
        print("æææææææææææææææææææææaaa")
        return self.create(request, *args, **kwargs)

class UploadDataView(CreateView):
    model = Upload
    template_name = "the_archive/upload_data.html"
    form_class= UploadForm
    success_url = reverse_lazy('the_archive-list')

    def form_valid(self, form):
        # self.request.FILES is a dict
        # each entry is an UploadedFiles object
        # https://docs.djangoproject.com/en/2.1/ref/files/uploads/#uploaded-files
        file_upload = self.request.FILES

        for file_single in file_upload.values():
            print("____________")
            # check for file type
            print(file_single.content_type)
            print("____________")

        form.save()
        return super().form_valid(form)