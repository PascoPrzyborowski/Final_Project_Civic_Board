# Generated by Django 4.1.7 on 2023-05-05 18:55

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("the_archive", "0005_rename_file_upload_upload_file"),
    ]

    operations = [
        migrations.AlterField(
            model_name="upload",
            name="upload_file",
            field=models.CharField(max_length=255),
        ),
    ]
