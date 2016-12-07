$(document).ready(function($){

  $('.layoutOptions').change(function(){
     var s = $(this);
     var name = s.attr('name');
      // $('.'+name).removeClass().addClass(name+' '+s.find(':selected').text().toLowerCase());
       $('.'+name).removeClass().addClass(name+' '+s.find(':selected').val());

  });

  $('.toggleClass').change(function(){
     var s = $(this);
     var name = s.attr('name');
        $('.'+name).toggleClass(s.find(':selected').val());
  });
});


//slideshow

$(document).ready(function(){
  var $prev = $('.previous');
  var $next = $('.next');
  var mode = "auto";
  $prev.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showPreviousImage();
    }
  });
  $next.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showNextImage();

    }
  });

  setInterval(function(){
    if(mode==="auto"){
      showNextImage();
    }
  },5000);

  function showNextImage(){
      var $actEl = $('.active');
      var $nextEl = $actEl.next('.slide');
      if($nextEl.length){
        $actEl.removeClass('active');
        $nextEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide:first-child').addClass('active');
      }
  }

  function showPreviousImage(){
      var $actEl = $('.active');
      var $prevEl = $actEl.prev('.slide');
      if($prevEl.length){
        $actEl.removeClass('active');
        $prevEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide.last').addClass('active');
      }
  }
});



// hover link

 // $('.at-links-faux-block-link ').hover(
 //        function(){ $(this).addClass('at-links-faux-block-link--hover') },
 //        function(){ $(this).removeClass('at-links-faux-block-link--hover') }
 // )



  $(document).ready(function(){

    $(".button a.btn-close").click(function(){
        $(".overlay").fadeToggle(200);

    });
    $(".button a.btn-open").click(function(){
        $(".overlay").fadeToggle(200);
    });
});


//Limit Number of characters summary



// $(".promo__summary").text(function(index, currentText) {
//   return currentText
//            .split(' ', 17) //create array of the first four words
//            .join(' ')+'.';    //join the array with spaces
// });
