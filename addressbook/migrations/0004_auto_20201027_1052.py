# Generated by Django 3.1.2 on 2020-10-27 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('addressbook', '0003_record_cathegory'),
    ]

    operations = [
        migrations.AlterField(
            model_name='record',
            name='flatNumber',
            field=models.CharField(max_length=50),
        ),
    ]
