from django.shortcuts import render
from django.http import HttpResponse
from django.template.response import TemplateResponse
from django.db.models import Q
from .models import Record, Administrator, Applicant

# Create your views here.


def index(request):
    records = Record.objects.all()
    

    if 'IsLogged' in request.COOKIES:
        if request.COOKIES['IsLogged'] == '1':
            applicants = Applicant.objects.all()
            data = {'records': records, 'applicants': applicants}
            return TemplateResponse(request, "index_admin.html", data)
        else:
            data = {'records': records}
            return TemplateResponse(request, "index.html", data)
    else:
        data = {'records': records}
        return TemplateResponse(request, "index.html", data)

def search(request):
    value = request.GET.get('value', '')
    filt = request.GET.get('filter', '')

    records = False

    if filt == 'filter-name':
        query = Q(name=value)
        query.add(Q(surname=value), Q.OR)
        query.add(Q(middleName=value), Q.OR)
        records = Record.objects.filter(query)
    elif filt == 'filter-address':
        query = Q(name=value)
        query.add(Q(city=value), Q.OR)
        query.add(Q(street=value), Q.OR)
        query.add(Q(houseNumber=value), Q.OR)
        query.add(Q(flatNumber=value), Q.OR)
        records = Record.objects.filter(query)
    elif filt == 'filter-phone':
        records = Record.objects.filter(phoneNumber=value)
    elif filt == 'filter-email':
        records = Record.objects.filter(email=value)
    elif filt == 'filter-cathegory':
        records = Record.objects.filter(cathegory=value)

    if (not records):
        return HttpResponse('<label id="not-match-founded">Совпадений не найдено</label>')

    data = {'records': records}
    return TemplateResponse(request, "search-result.html", data)


def record(request):
    recordId = request.GET.get('id', '')

    record = Record.objects.get(id=recordId)

    data = {'record': record}
    return TemplateResponse(request, "records-in.html", data)


def auth(request):
    login = request.GET.get('login', '')
    password = request.GET.get('password', '')

    try:
        account = Administrator.objects.get(login=login, password=password)
    except:
        return HttpResponse('Не удаётся войти.<br>Проверьте правильность ввода.')

    response = HttpResponse()
    response.set_cookie('IsLogged', '1', max_age=None)
    return response


def logout(request):
    response = HttpResponse()
    response.set_cookie('IsLogged', '0', max_age=None)
    return response


def newrecord(request):
    surname = request.GET.get('surname', '')
    name = request.GET.get('name', '')
    middlename = request.GET.get('middlename', '')
    age = request.GET.get('age', '')
    city = request.GET.get('city', '')
    street = request.GET.get('street', '')
    house = request.GET.get('house', '')
    flat = request.GET.get('flat', '')
    phone = request.GET.get('phone', '')
    cathegory = request.GET.get('cathegory', '')
    email = request.GET.get('email', '')

    try:
        Record.objects.get(surname=surname, name=name,  middleName=middlename, age=age, city=city, street=street,  houseNumber=house, flatNumber=flat, phoneNumber=phone, cathegory=cathegory, email=email)
        return HttpResponse('<p>Запись уже существует</p>')
    except:
        Record.objects.create(surname=surname, name=name,  middleName=middlename, age=age, city=city, street=street,  houseNumber=house, flatNumber=flat, phoneNumber=phone, cathegory=cathegory, email=email)
        return HttpResponse('<p>Запись была успешно записана</p>')




def deleterecord(request):
    id = request.GET.get('id', '')

    try:
        Record.objects.filter(id=id).delete()
        return HttpResponse('<p>Запись успешно удалена</p>')
    except:
        return HttpResponse('<p>Произошла непредвиденная ошибка при удалении</p>')



def saveeditrecord(request):
    id = request.GET.get('id', '')
    try:
        change = Record.objects.get(id=id)
        change.surname = request.GET.get('surname', '')
        change.name = request.GET.get('name', '')
        change.middleName = request.GET.get('middlename', '')
        change.age = request.GET.get('age', '')
        change.city = request.GET.get('city', '')
        change.street = request.GET.get('street', '')
        change.houseNumber = request.GET.get('house', '')
        change.flatNumber = request.GET.get('flat', '')
        change.phoneNumber = request.GET.get('phone', '')
        change.cathegory = request.GET.get('cathegory', '')
        change.email = request.GET.get('email', '')
        change.save()
        return HttpResponse('<p>Запись успешно изменена</p>')
    except:
        return HttpResponse('<p>Запись не была найдена</p>')


def newaccount(request):
    login = request.GET.get('login', '')
    password = request.GET.get('password', '')
    email = request.GET.get('email', '')

    try:
        Administrator.objects.get(login=login, password=password, email=email)
        return HttpResponse('<p>Такой администратор уже существует</p>')
    except:
        try:
            Applicant.objects.get(login=login, password=password, email=email)
            return HttpResponse('<p>Такая заявка уже была отправлена</p>')
        except:
            Applicant.objects.create(login=login, password=password, email=email)
            return HttpResponse('<p>Заявка успешно отправлена</p>')


def acceptapplicant(request):
    id = request.GET.get('id', '')

    applicant = Applicant.objects.get(id=id)
    new_administrator = Administrator(login=applicant.login, password=applicant.password, email=applicant.email)
    new_administrator.save()
    applicant.delete()

    applicants = Applicant.objects.all()

    data = {'applicants': applicants}
    return TemplateResponse(request, "applicant_list.html", data)


def cancelapplicant(request):
    id = request.GET.get('id', '')

    applicant = Applicant.objects.get(id=id)
    applicant.delete()

    applicants = Applicant.objects.all()

    data = {'applicants': applicants}
    return TemplateResponse(request, "applicant_list.html", data)