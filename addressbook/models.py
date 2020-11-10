from django.db import models

# Create your models here.

class Record(models.Model):

    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    middleName = models.CharField(max_length=50)
    age = models.IntegerField()

    phoneNumber = models.CharField(max_length=20)
    email = models.EmailField()

    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)
    houseNumber = models.CharField(max_length=50)
    flatNumber = models.CharField(max_length=50)

    cathegory = models.CharField(max_length=50)


class Administrator(models.Model):

    email = models.EmailField()
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)


class Applicant(models.Model):
    
    email = models.EmailField()
    login = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
