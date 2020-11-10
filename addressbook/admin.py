from django.contrib import admin
from .models import Record
from .models import Administrator
from .models import Applicant

# Register your models here.

admin.site.register(Record)
admin.site.register(Administrator)
admin.site.register(Applicant)