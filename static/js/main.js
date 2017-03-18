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
