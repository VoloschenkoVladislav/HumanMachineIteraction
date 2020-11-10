function transformToEdit() {
    $('#edit-record input[name="surname"]').attr('value', $('#surname-label').html());
    $('#edit-record input[name="name"]').attr('value', $('#name-label').html());
    $('#edit-record input[name="middlename"]').attr('value', $('#middlename-label').html());
    $('#edit-record input[name="age"]').attr('value', $('#age-label').html());
    $('#edit-record input[name="city"]').attr('value', $('#city-label').html());
    $('#edit-record input[name="street"]').attr('value', $('#street-label').html());
    $('#edit-record input[name="house"]').attr('value', $('#house-label').html());
    $('#edit-record input[name="flat"]').attr('value', $('#flat-label').html());
    $('#edit-record input[name="phone"]').attr('value', $('#phone-label').html());
    $('#edit-record input[name="cathegory"]').attr('value', $('#cathegory-label').html());
    $('#edit-record input[name="email"]').attr('value', $('#email-label').html());
    
}

function saveChanges(id) {
    let request = new XMLHttpRequest();

    let surname = $('#edit-record input[name="surname"]').val();
    let name = $('#edit-record input[name="name"]').val();
    let middlename = $('#edit-record input[name="middlename"]').val();
    let age = $('#edit-record input[name="age"]').val();
    let city = $('#edit-record input[name="city"]').val();
    let street = $('#edit-record input[name="street"]').val();
    let house = $('#edit-record input[name="house"]').val();
    let flat = $('#edit-record input[name="flat"]').val();
    let phone = $('#edit-record input[name="phone"]').val();
    let cathegory = $('#edit-record input[name="cathegory"]').val();
    let email = $('#edit-record input[name="email"]').val();
    
    let nameRegExp = /^[А-Яа-я]+$/;
    let numberRegExp = /^[0-9]+$/;
    let dateRegExp = /^[1-3]?[0-9].1?[0-9].[0-9]{4}$/;
    let houseRegExp = /^[0-9]+((к[0-9]+)|([а-я])|\/([0-9]+))?$/;
    let phoneRegExp = /^\+?[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let emailRegExp = /^\S+@[a-z]+.[a-z]+$/;
    let cathegoryRegExp = /^[А-Яа-я]+$/
    let ready = true;

    if (!nameRegExp.test(surname)) {
        ready = false;
        $('#create-record input[name="surname"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(name)) {
        ready = false;
        $('#create-record input[name="name"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(middlename)) {
        ready = false;
        $('#create-record input[name="middlename"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!numberRegExp.test(age)) {
        ready = false;
        $('#create-record input[name="age"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(city)) {
        ready = false;
        $('#create-record input[name="city"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(street)) {
        ready = false;
        $('#create-record input[name="street"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!houseRegExp.test(house)) {
        ready = false;
        $('#create-record input[name="house"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!numberRegExp.test(flat)) {
        ready = false;
        $('#create-record input[name="flat"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!phoneRegExp.test(phone)) {
        ready = false;
        $('#create-record input[name="phone"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!emailRegExp.test(email)) {
        ready = false;
        $('#create-record input[name="email"]').css('background-color', 'rgb(255, 138, 138)');
    }

    setTimeout(function() { $('#create-record input').css('background-color', 'white') }, 1500);
   
    if (ready) {
        let requestBody = '?surname=' + surname
                        + '&name=' + name
                        + '&middlename=' + middlename
                        + '&age=' + age
                        + '&city=' + city
                        + '&street=' + street
                        + '&house=' + house
                        + '&flat=' + flat
                        + '&phone=' + phone
                        + '&cathegory=' + cathegory
                        + '&email=' + email
                        + '&id=' + id;


        function requestReadyStateChange() {
            if (request.readyState == 4) {
                let status = request.status;
                if (status == 200) {
                    $('.done__info').html(request.responseText);
                    $('.window-name').html('<p>Редактирование записи</p>')
                    $('.modal-window').animate({opacity: 0, top: '100%'}, function () {
                        $('#create-record').css('top', '0%');
                        $('#create-record').css('display', 'none');
                        $('.error-label').html('');
                        $('#modal-done').css('display', 'block');
                        $('#modal-done').animate({opacity: 1, top: '30%'}, 200);
                    });
                }
            }
        }
                    
        request.open('GET', 'saveeditrecord' + requestBody);
        request.onreadystatechange = requestReadyStateChange;
        request.send();
    }
}






function newRecord() {
    let request = new XMLHttpRequest();

    let surname = $('#create-record input[name="surname"]').val();
    let name = $('#create-record input[name="name"]').val();
    let middlename = $('#create-record input[name="middlename"]').val();
    let age = $('#create-record input[name="age"]').val();
    let city = $('#create-record input[name="city"]').val();
    let street = $('#create-record input[name="street"]').val();
    let house = $('#create-record input[name="house"]').val();
    let flat = $('#create-record input[name="flat"]').val();
    let phone = $('#create-record input[name="phone"]').val();
    let cathegory = $('#create-record input[name="cathegory"]').val();
    let email = $('#create-record input[name="email"]').val();
    
    let nameRegExp = /^[А-Яа-я]+$/;
    let numberRegExp = /^[0-9]+$/;
    let dateRegExp = /^[1-3]?[0-9].1?[0-9].[0-9]{4}$/;
    let houseRegExp = /^[0-9]+((к[0-9]+)|([а-я])|\/([0-9]+))?$/;
    let phoneRegExp = /^\+?[0-9]-[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let emailRegExp = /^\S+@[a-z]+.[a-z]+$/;
    let cathegoryRegExp = /^[А-Яа-я]+$/
    let ready = true;

    if (!nameRegExp.test(surname)) {
        ready = false;
        $('#create-record input[name="surname"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(name)) {
        ready = false;
        $('#create-record input[name="name"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(middlename)) {
        ready = false;
        $('#create-record input[name="middlename"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!numberRegExp.test(age)) {
        ready = false;
        $('#create-record input[name="age"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(city)) {
        ready = false;
        $('#create-record input[name="city"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!nameRegExp.test(street)) {
        ready = false;
        $('#create-record input[name="street"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!houseRegExp.test(house)) {
        ready = false;
        $('#create-record input[name="house"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!numberRegExp.test(flat)) {
        ready = false;
        $('#create-record input[name="flat"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!phoneRegExp.test(phone)) {
        ready = false;
        $('#create-record input[name="phone"]').css('background-color', 'rgb(255, 138, 138)');
    }
    if (!emailRegExp.test(email)) {
        ready = false;
        $('#create-record input[name="email"]').css('background-color', 'rgb(255, 138, 138)');
    }

    setTimeout(function() { $('#create-record input').css('background-color', 'white') }, 1500);
   
    if (ready) {
        let requestBody = '?surname=' + surname
                        + '&name=' + name
                        + '&middlename=' + middlename
                        + '&age=' + age
                        + '&city=' + city
                        + '&street=' + street
                        + '&house=' + house
                        + '&flat=' + flat
                        + '&phone=' + phone
                        + '&cathegory=' + cathegory
                        + '&email=' + email;


        function requestReadyStateChange() {
            if (request.readyState == 4) {
                let status = request.status;
                if (status == 200) {
                    $('.done__info').html(request.responseText);
                    $('.window-name').html('<p>Создание записи</p>')
                    $('.modal-window').animate({opacity: 0, top: '100%'}, function () {
                        $('#create-record').css('top', '0%');
                        $('#create-record').css('display', 'none');
                        $('.error-label').html('');
                        $('#modal-done').css('display', 'block');
                        $('#modal-done').animate({opacity: 1, top: '30%'}, 200);
                    });
                }
            }
        }
                    
        request.open('GET', 'newrecord' + requestBody);
        request.onreadystatechange = requestReadyStateChange;
        request.send();
    }
}










function deleteRecord(id) {
    let request = new XMLHttpRequest();

    let requestBody = '?id=' + id;

    function requestReadyStateChange() {
        if (request.readyState == 4) {
            let status = request.status;
            if (status == 200) {
                $('.done__info').html(request.responseText);
                $('.window-name').html('<p>Удаление записи</p>')
                $('.modal-window').animate({opacity: 0, top: '100%'}, function () {
                    $('#create-record').css('top', '0%');
                    $('#create-record').css('display', 'none');
                    $('.error-label').html('');
                    $('#modal-done').css('display', 'block');
                    $('#modal-done').animate({opacity: 1, top: '30%'}, 200);
                });
            }
        }
    }
                
    request.open('GET', 'deleterecord' + requestBody);
    request.onreadystatechange = requestReadyStateChange;
    request.send();
}