# Generated by Django 3.2.12 on 2022-05-28 10:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0019_alter_supplier_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supplier',
            name='mobileNo',
            field=models.CharField(max_length=10, null=True, unique=True),
        ),
    ]