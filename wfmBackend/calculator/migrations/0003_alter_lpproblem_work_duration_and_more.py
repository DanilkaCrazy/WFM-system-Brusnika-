# Generated by Django 4.1.3 on 2023-12-28 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculator', '0002_alter_lpproblem_workers1_pay'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lpproblem',
            name='work_duration',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='lpproblem',
            name='work_volume',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='lpproblem',
            name='workers1_amount',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='lpproblem',
            name='workers2_amount',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='lpproblem',
            name='workers2_pay',
            field=models.IntegerField(null=True),
        ),
    ]
