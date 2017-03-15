$( document ).ready(function() {
        // Check the initial Poistion of the Navigation Menu
        var InitialMenuPosition = 150;

        $(window).scroll(function(){
                if( $(window).scrollTop() > InitialMenuPosition ) {
                        // alert("greater than");
                        $('img.logo').fadeOut(1000);
                        // $('img.signature').fadeIn(1000);
                } else {
                        // alert("default");
                        $('img.logo').fadeIn(1000);
                        // $('img.signature').fadeOut(1000);
                };
        });
  });
