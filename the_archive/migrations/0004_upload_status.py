# Generated by Django 4.1.7 on 2023-04-08 22:04

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("the_archive", "0003_alter_upload_location_alter_upload_media_type_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="upload",
            name="status",
            field=models.CharField(
                choices=[("draft", "Draft"), ("published", "Published")],
                default="draft",
                max_length=16,
            ),
        ),
    ]
