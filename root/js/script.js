
$(document).ready(function(){

    var marginHeroStandard = $('.mt-st-h').outerHeight();
    marginHeroStandard = marginHeroStandard + 150;
    console.log(marginHeroStandard)
    $('.main-alt').css({"margin-top" : marginHeroStandard+"px"});

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

    //nav background
    function navBackground() {
        var window_top = $(window).scrollTop();
        var top = $('#stick-here').offset().top - 130;
        if (window_top > top) {
            $('.nav').addClass('nav-background');
        } else {
            $('.nav').removeClass('nav-background');
        }
    }
    $(function() {
        $(window).scroll(navBackground);
        navBackground();
    });

    //quotes navigation
    $('.tab').on('click', function(evt) {
        evt.preventDefault();
        $('.tab').removeClass('fade-thum');
        $(this).addClass('fade-thum');
        $(this).toggleClass('active');
        var sel = this.getAttribute('data-toggle-target');
        $('.tab-content').removeClass('active').filter(sel).addClass('active');
      });

      //modal
      var id;
      $('.js-btn-modal').on('click', function(){
        id = $(this).data('id');
        $('.js-modal[data-id="modal' + id + '"]').animate({
            right: '0vw'
        });
        $('.main').animate({
            left: '-100vw'
        });
        $('body').css({
            overflow: 'hidden'
        });
        $('.js-close-btn').on('click', function(){
          $('.js-modal[data-id="modal' + id + '"]').animate({
              right: '-100vw'
          });
        $('.main').animate({
            left: '-0vw'
        });
          $('body').css({
              overflow: 'scroll'
          });
        });
      });
      

      // paralax

        var initScrollTop = $(window).scrollTop();

        // Set the image's vertical background position based on the scroll top when the page is loaded.
        $(parallax1).css({'background-position-y' : (initScrollTop/5)+'%'});

        // When the user scrolls...
        $(window).scroll(function() {

        // Find the new scroll top.
        var scrollTop = $(window).scrollTop();

        // Set the new background position.
        $(parallax1).css({'background-position-y' : (scrollTop/5)+'%'});

        });
      

});

// $(window).scroll(function(){
//     // creates the footer
//     if ($(this).scrollTop() > 1000) {
//         $('.footer').removeClass('hide-element');
//     } else {
//         $('.footer').addClass('hide-element');
//     }
// });