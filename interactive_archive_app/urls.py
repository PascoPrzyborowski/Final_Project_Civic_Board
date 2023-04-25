from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

from interactive_archive_app.views import Intro, Credits # UploadListView, UploadDataView



urlpatterns = [
    path("", views.home, name="the_archive-home"),
    path("about/", views.about, name="the_archive-about"),
    path('intro/',Intro.as_view(),name="the_archive-intro"),
    path('credits/',Credits.as_view(),name="the_archive-credits"),
    path("interactive/", views.interactive, name="the_archive-interactive"),
  #  path("archive/", UploadListView.as_view(), name="the_archive-list"),
   # path("archive/upload/", UploadDataView.as_view(), name="the_archive-upload")
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
