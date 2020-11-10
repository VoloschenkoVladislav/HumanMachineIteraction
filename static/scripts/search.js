function sendSearchRequest() {
    
    let requestBody = '?value=' + $('#request').val() + '&filter=' + $('.filter-button.active').attr('id'); 

    let request = new XMLHttpRequest();

    function requestReadyStateChange() {
        if (request.readyState == 4) {
            let status = request.status;
            if (status == 200) {
                $('#search-result').html(request.responseText);
            }
        }
    }

    request.open('GET', 'http://127.0.0.1:8000/search' + requestBody);
    request.onreadystatechange = requestReadyStateChange;
    request.send();
    // window.history.pushState(null, null, requestBody); 
}