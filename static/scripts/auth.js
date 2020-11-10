function sendAuthRequest() {
    let request = new XMLHttpRequest();

    let login = $('input[name="admin-login"]').val();
    let password = $('input[name="admin-password"]').val();

    if (!(login && password)) {
        $('.error-label').html('Поле пусто');
    }
    else {
        let body = '?login=' + login + '&password=' + password;
        request.open('GET', 'auth' + body);
        function requestReadyStateChange() {
            if (request.readyState == 4) {
                let status = request.status;
                if (status == 200) {
                    if (request.responseText) {
                        $('.error-label').html(request.responseText);
                    }
                    else {
                        window.location.reload();
                    }
                }
            }
        }
    
        request.onreadystatechange = requestReadyStateChange;
        request.send();
    }
}

function logOut() {
    let request = new XMLHttpRequest();

    function requestReadyStateChange() {
        if (request.readyState == 4) {
            let status = request.status;
            if (status == 200) {
                    window.location.reload();
            }
        }
    }
    request.open('GET', 'logout');
    request.onreadystatechange = requestReadyStateChange;
    request.send();
}

function sendAdminRequest() {
    let request = new XMLHttpRequest();
    let login = $('#be-admin-window input[name="user-login"]').val();
    let email = $('#be-admin-window input[name="user-email"]').val();
    let password = $('#be-admin-window input[name="user-password"]').val();
    let passwordAgain = $('#be-admin-window input[name="user-password-again"]').val();
    let emailRegExp = /^\S+@[a-z]+.[a-z]+$/;
    let ready = true;

    let error = '';

    if (!emailRegExp.test(email)) {
        ready = false;
        $('#be-admin-window input[name="user-email"]').css('background-color', 'rgb(255, 138, 138)');
        error = error + 'Неверно указана электронная почта.<br>';
    }
    if (password != passwordAgain) {
        ready = false;
        $('#be-admin-window input[name="user-passoword"]').css('background-color', 'rgb(255, 138, 138)');
        $('#be-admin-window input[name="user-passoword-again"]').css('background-color', 'rgb(255, 138, 138)');
        error = error + 'Пароли не совпадают.';
    }
    $('.error-label').html(error);
    setTimeout(function() { $('#be-admin-window input').css('background-color', 'white') }, 1500);

    if (ready) {
        let requestBody = '?login=' + login + '&email=' + email + '&password=' + password; 

        function requestReadyStateChange() {
            if (request.readyState == 4) {
                let status = request.status;
                if (status == 200) {
                    $('.done__info').html(request.responseText);
                    $('.window-name').html('<p>Регистрация</p>')
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
                    
        request.open('GET', 'newaccount' + requestBody);
        request.onreadystatechange = requestReadyStateChange;
        request.send();
    }
}


function acceptApplicant(id) {
    let request = new XMLHttpRequest();

    let requestBody = '?id=' + id;

    function requestReadyStateChange() {
        if (request.readyState == 4) {
            let status = request.status;
            if (status == 200) {
                $('#applicant-window .record__info').html(request.responseText);
            }
        }
    }

    request.open('GET', 'acceptapplicant' + requestBody);
    request.onreadystatechange = requestReadyStateChange;
    request.send();
}

function cancelApplicant(id) {
    let request = new XMLHttpRequest();

    let requestBody = '?id=' + id;

    function requestReadyStateChange() {
        if (request.readyState == 4) {
            let status = request.status;
            if (status == 200) {
                $('#applicants-window .record__info').html(request.responseText);
            }
        }
    }

    request.open('GET', 'cancelapplicant' + requestBody);
    request.onreadystatechange = requestReadyStateChange;
    request.send();
}