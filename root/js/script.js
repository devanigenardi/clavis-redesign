
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
        console.log(id)
        // $('.js-modal[data-id="modal' + id + '"]').show();
        $('.js-modal[data-id="modal' + id + '"]').animate({
            right: '0vw'
        });
        $('body').css({
            overflow: 'hidden'
        });
        $('.js-close-btn').on('click', function(){
            console.log(id);
          $('.js-modal[data-id="modal' + id + '"]').animate({
              right: '-100vw'
          });
          $('body').css({
              overflow: 'scroll'
          });
        });
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