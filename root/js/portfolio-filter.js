$(function () {
    $(':checkbox').change(function () {                
        
         // we need to do this in steps, so first we need to get a string of classes for each filter
        var platform = $('.platform input:checked').map(function(){ return "." + this.value; }).get().join();
        var status = $('.status input:checked').map(function(){ return "." + this.value; }).get().join();
        
        var showItem =  $('.show');
        
        if(platform) {
            showItem = showItem.filter(platform);
        }
        
        if(status) {
          showItem = showItem.filter(status);
        }
        
        // hide everything      
        $('.show').hide();
        // show the ones we want. Pun intended
        showItem.show();
        console.log(showItem.length);
        
    });
    
    $('#checkAll, #checkAllMobile').click(function(){  
      $('input:checkbox').prop('checked','checked');
    
      if ($('input:checkbox').is(':checked')) {
             $('input:checkbox').prop('checked',false);
      }

      $('.show').show();
    });

    $(document).ready(function(){
      $(".show-hide-filter").click(function(){
        $(".filter-items-container").toggleClass("expand-filter-container");
        $(this).toggleClass("flip-arrow");
      });
    });

    

  });