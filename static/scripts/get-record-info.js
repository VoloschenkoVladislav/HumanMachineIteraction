function getRecordInfo(id) {
    let request = new XMLHttpRequest();

    let requestBody = '?id=' + id;

    function requestReadyStateChange() {
        if (request.readyState == 4) {
            let status = request.status;
            if (status == 200) {
                $('.record__info').html(request.responseText);
                $('.record-delete').attr('onclick', `deleteRecord(${id});return false;`)
                $('#edit-record form').attr('onsubmit', `saveChanges(${id});return false;`)
            }
        }
    }

    request.open('GET', 'http://127.0.0.1:8000/record' + requestBody);
    request.onreadystatechange = requestReadyStateChange;
    request.send();
    // window.history.pushState(null, null, requestBody); 
}