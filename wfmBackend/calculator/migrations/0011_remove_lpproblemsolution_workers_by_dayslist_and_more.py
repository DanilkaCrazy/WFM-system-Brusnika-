# Generated by Django 4.1.3 on 2023-12-29 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculator', '0010_lpproblem_workers1_profession_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lpproblemsolution',
            name='workers_by_daysList',
        ),
        migrations.AddField(
            model_name='lpproblemsolution',
            name='workers1_final',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='lpproblemsolution',
            name='workers2_final',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]