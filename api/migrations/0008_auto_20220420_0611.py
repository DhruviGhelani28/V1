# Generated by Django 3.2.12 on 2022-04-20 06:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_rename_roll_task_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderstatus',
            name='name',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Available', 'Available'), ('Purchased', 'Purchased')], max_length=50, null=True),
        ),
        migrations.CreateModel(
            name='PhotoPoster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('category', models.CharField(max_length=20, null=True)),
                ('name', models.CharField(blank=True, max_length=50, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('timeDuration', models.DurationField()),
                ('orderStatus', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.orderstatus')),
            ],
        ),
    ]
