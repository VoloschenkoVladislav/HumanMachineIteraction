$(document).ready(function() {
    let button = $('.filter-button');

    button.click(function(event) { 
        event.preventDefault();
        let id = '#' + $(this).attr('id');
        $('.active').toggleClass('active');
        $(id).toggleClass('active');
    });
});