# Generated by Django 5.0.6 on 2024-07-09 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0007_alter_educationlist_end_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='educationlist',
            name='description',
            field=models.CharField(blank=True, max_length=120),
        ),
    ]
