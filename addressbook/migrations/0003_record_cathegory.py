# Generated by Django 3.1.2 on 2020-10-21 05:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('addressbook', '0002_auto_20201011_1236'),
    ]

    operations = [
        migrations.AddField(
            model_name='record',
            name='cathegory',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]
