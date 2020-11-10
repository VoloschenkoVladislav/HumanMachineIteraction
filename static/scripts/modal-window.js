$(document).ready(function () {
    let overlay = $('#overlay');
    let close = $('.modal-close,#overlay');
    let modal = $('.modal-window');
    let open = $('.modal-open');
    let swap = $('.modal-swap');
    
    $(document).on('click', '.modal-open', function (event) { 
        event.preventDefault();
        let div = $(this).attr('href');
        $('body').css('overflow', 'hidden');
        overlay.fadeIn(400, 
            function () {
                $(div).css('display', 'block');
                $(div).animate({opacity: 1, top: '30%'}, 200);
            });
    });

    close.click(function (event) { 
        event.preventDefault();
        $('body').css('overflow', 'auto');
        modal.animate({opacity: 0, top: '0%'}, function () {
            $(this).css('display', 'none');
            $('.error-label').html('');
            overlay.fadeOut(400);
        });
        $('.error-place').html('');
    });

    swap.click(function (event) {
        event.preventDefault();
        let div = $(this).attr('href');
        modal.animate({opacity: 0, top: '100%'}, function () {
            $(this).css('top', '0%');
            $(this).css('display', 'none');
            $('.error-label').html('');
            $(div).css('display', 'block');
            $(div).animate({opacity: 1, top: '30%'}, 200);
        });
        $('.error-place').html('');
    });
});