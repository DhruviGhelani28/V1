# Generated by Django 3.2.12 on 2022-04-29 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_alter_garment_timeduration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='garment',
            name='timeDuration',
            field=models.DurationField(blank=True, default='00 00:00:00', null=True),
        ),
    ]