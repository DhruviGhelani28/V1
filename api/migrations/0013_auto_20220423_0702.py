# Generated by Django 3.2.12 on 2022-04-23 07:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_auto_20220422_0909'),
    ]

    operations = [
        migrations.RenameField(
            model_name='garment',
            old_name='GarmentName',
            new_name='garmentName',
        ),
        migrations.RenameField(
            model_name='premise',
            old_name='ItemName',
            new_name='itemName',
        ),
        migrations.RemoveField(
            model_name='garment',
            name='TimeDurationFrom',
        ),
        migrations.RemoveField(
            model_name='garment',
            name='TimeDurationTo',
        ),
        migrations.RemoveField(
            model_name='premise',
            name='TimeDurationFrom',
        ),
        migrations.RemoveField(
            model_name='premise',
            name='TimeDurationTo',
        ),
        migrations.AddField(
            model_name='garment',
            name='timeDuration',
            field=models.DurationField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='premise',
            name='timeDuration',
            field=models.DurationField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='photoposter',
            name='timeDuration',
            field=models.DurationField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='premise',
            name='orderstatus',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.orderstatus'),
        ),
    ]
