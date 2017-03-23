$( document ).ready(function() {
        var InitialMenuPosition = 150;

        $(window).scroll(function(){
                if( $(window).scrollTop() > InitialMenuPosition ) {
                        $('#menu-slider').removeClass('opened')
                } else {
                        $('#menu-slider').addClass('opened')
                };
        });
  });


$("a.sitenav").click(function() {

    var scrollTo = $(this).attr('data-scroll-to');

    $('html,body').animate({
        scrollTop: $("#" + scrollTo).offset().top},
        'slow');
});