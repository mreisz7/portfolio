$( document ).ready(function() {
        // Check the initial Poistion of the Navigation Menu
        var InitialMenuPosition = 0;

        $(window).scroll(function(){
                if( $(window).scrollTop() > InitialMenuPosition ) {
                        // alert("greater than");
                        $('img.logo').css({'display': 'none'});
                } else {
                        // alert("default");
                        $('img.logo').css({'display': 'inline-block'});
                };
        });
  });
