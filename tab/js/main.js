$(function(){
  var $box = $('.box');
  var $nav = $('.nav', $box);
  var $nav_list = $('a', $nav);
  var $content = $('.content', $box);

  $nav.on('click', 'a', function(){
    var tab_val = $(this).data('tab');
    var _this = $(this);
    $nav_list.removeClass('active');
    _this.addClass('active');
    $content.map(function(index){
      if($(this).data('tab') == tab_val){
        $(this).show();
      }else{
        $(this).hide();
      }
    })
  });

})