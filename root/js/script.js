
$(document).ready(function(){
    // gives bottom same height as footer
    var footerHeight = $('.footer').outerHeight();
    $('.bottom__spacer').css({"height" : footerHeight+"px"});

    // hamburger menu
    $(".hamburger").click(function(){
        $(".hamburger").toggleClass("active");
        $(".nav-menu").toggleClass("active");
    });

    //current location
    var currentLocation = location.href;
    var menuItems = $(".nav-link");
    menuItems.each(function( index ) {
        if(menuItems[index].href === currentLocation) {
            menuItems[index].className = "nav-active"
        }
    });

});

$(window).scroll(function(){
    // creates the footer
    if ($(this).scrollTop() > 1000) {
        $('.footer').removeClass('hide-element');
    } else {
        $('.footer').addClass('hide-element');
    }
});