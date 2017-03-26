$("a.sitenav").click(function() {

    var scrollTo = $(this).attr('data-scroll-to');

    $('html,body').animate({
        scrollTop: $("#" + scrollTo).offset().top},
        'slow');
});


// Handle Contact Form Modal window
$("a.sitemodal").click(function() {
    contactSwitch();
})

$('#contact').click(function(e) {
    if(e.target.id  === 'contact') {
        contactSwitch();
    }
})

$('#contact-close').click(function() {
    contactSwitch();
})

function contactSwitch() {
    $('#modal').toggleClass('off on');
    $('#contact').toggleClass('hide show');
    // if($('#contact').hasClass('show')) {
    //     $('body').css('overflow', 'hidden');
    // } else {
    //     $('body').css('overflow', 'auto');
    // };
}

$('#menu-button').click(function() {
    if($('body').hasClass('open')) {
        $('body').removeClass('open');
        $('#slideout-menu').removeClass('open');
    } else {
        $('body').addClass('open');
        $('#slideout-menu').addClass('open');
    }
    $('#modal').toggleClass('off on');
})

$('#slideout-menu a').click(function() {
    $('#modal').toggleClass('off on');
    $('body').removeClass('open');
    $('#slideout-menu').removeClass('open');
})

$('#modal').click(function() {
    $('#modal').toggleClass('off on');
    $('#contact').removeClass('show').addClass('hide');
    $('body').removeClass('open');
    $('#slideout-menu').removeClass('open');
})

