// main.js
//

window.onload = function() {
  Gifffer();
}

$('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});

$( ".card__body" ).click(function() {
  $( this ).parent().toggleClass( "card__body--expanded" );
});



// hover link

// $('.at-links-faux-block-link').hover(
//        function(){ $(this).addClass('at-links-faux-block-link--hover') },
//        function(){ $(this).removeClass('at-links-faux-block-link--hover') }
// )


 $('.display-tool-tip').click(function () {
         $(this).hide();
       })

//tabs


  $('.tabs .tab__item').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('.tabs .tab__item').removeClass('current');
    $('.tab__item--content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })



$(document).ready(function () {
    // Load the first 3 list items from another HTML file
    //$('#moreList').load('externalList.html li:lt(3)');
    $('#moreList .astatine__item:lt(4)').show();
    $('#showLess').hide();
    var items =  25;
    var shown =  3;
    $('#loadMore').click(function () {
        $('#showLess').show();
         $('#loadMore').hide();
        shown = $('#moreList .astatine__item:visible').size()+5;
        if(shown< items) {$('#moreList .astatine__item:lt('+shown+')').show();}
        else {$('#moreList .astatine__item:lt('+items+')').show();
             $('#loadMore').hide();
             }
    });
    $('#showLess').click(function () {
     $('#loadMore').show();
      $('#showLess').hide();
        $('#moreList .astatine__item').not(':lt(3)').hide();
    });
});
