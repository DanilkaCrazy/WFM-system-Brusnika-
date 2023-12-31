# Generated by Django 4.1.3 on 2023-12-29 09:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_api', '0002_remove_appuser_email_appuser_first_name_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appuser',
            name='patronymic',
            field=models.CharField(default='Отчество', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='appuser',
            name='roles',
            field=models.CharField(choices=[('СОТРУДНИК', 'Сотрудник'), ('МЕНЕДЖЕР', 'Менеджер'), ('РУКОВОДИТЕЛЬ', 'Руководитель')], default='СОТРУДНИК', max_length=50),
        ),
    ]
