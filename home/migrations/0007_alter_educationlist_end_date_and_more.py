# Generated by Django 5.0.6 on 2024-07-09 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_educationlist_experiencelist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='educationlist',
            name='end_date',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='educationlist',
            name='start_date',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='experiencelist',
            name='end_date',
            field=models.CharField(max_length=120),
        ),
        migrations.AlterField(
            model_name='experiencelist',
            name='start_date',
            field=models.CharField(max_length=120),
        ),
    ]
