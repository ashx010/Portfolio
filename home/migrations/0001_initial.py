# Generated by Django 5.0.6 on 2024-07-09 12:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectList',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=120)),
                ('sub_title', models.CharField(max_length=300)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='static/images/projects')),
                ('category', models.CharField(choices=[('Web Development', 'Web Development'), ('Data Science', 'Data Science')], max_length=50)),
                ('github_link', models.URLField()),
                ('project_link', models.URLField()),
            ],
        ),
    ]