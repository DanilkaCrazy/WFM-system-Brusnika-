# Generated by Django 4.2.7 on 2023-12-29 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculator', '0005_lpproblemsolution_problem'),
    ]

    operations = [
        migrations.AddField(
            model_name='lpproblemsolution',
            name='workers_amount',
            field=models.IntegerField(default=5),
            preserve_default=False,
        ),
    ]
