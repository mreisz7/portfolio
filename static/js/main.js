$("a.sitenav").click(function() {

    var scrollTo = $(this).attr('data-scroll-to');

    $('html,body').animate({
        scrollTop: $("#" + scrollTo).offset().top},
        'slow');
});


// Handle Contact Form Modal window
$("a.sitemodal").click(function() {
    modalSwitch();
})

$('#contact').click(function(e) {
    if(e.target.id  === 'contact') {
        modalSwitch();
    }
})

$('#contact-close').click(function() {
    modalSwitch();
})

function modalSwitch() {
    $('#contact').toggleClass('hide show');
    if($('#contact').hasClass('show')) {
        $('body').css('overflow', 'hidden');
    } else {
        $('body').css('overflow', 'auto');
    };
}

$('#menu-button').click(function() {
    if($('body').hasClass('open')) {
        $('body').removeClass('open');
        $('#slideout-menu').removeClass('open');
    } else {
        $('body').addClass('open');
        $('#slideout-menu').addClass('open');
    }
})

$('#slideout-menu a').click(function() {
    $('body').removeClass('open');
    $('#slideout-menu').removeClass('open');
})
