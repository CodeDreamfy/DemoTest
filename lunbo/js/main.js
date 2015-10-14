$(function(){
  var timer,
  inow = 0;
  var flag = false;
  var $box = $('.box'),
  $big_list = $('.pics', $box),
  $big_li = $('li', $big_list),
  $prev = $('.prev', $box),
  $next = $('.next', $box),
  $small_list = $('.small_list', $box),
  $small_a ='<a href="javascript:;"></a>';

  for(var i = 0; i<$big_li.length; i++){
    $small_list.append($small_a);
  }

  $small_list.on('click','a', function(){
    inow = $(this).index();
    Goto(inow);
  });

  $small_a = $('a', $small_list);
  
  Goto(0);
  

  function startTimer(){
    timer = setInterval(function(){
      if(inow < $small_a.length-1){
        inow++;
      }else {
        inow = 0;
      }
      Goto(inow);
    },3000);
  }

  $box.on('mouseover', function(){
    $prev.show();
    $next.show();
    $small_list.show();
    clearInterval(timer);
  }).on('mouseout', function(){
    $prev.hide();
    $next.hide();
    $small_list.hide();
    startTimer();
  });

  $box.on('click', '.prev', function(){
    if(!flag){
      inow--;
      if(inow < 0 ){
        inow = $small_a.length - 1;
      }
      Goto(inow);
      flag = true;
    }
    
  }).on('click', '.next', function(){
    if(!flag){
      inow++;
      if(inow > $small_a.length - 1){
        inow = 0;
      }
      Goto(inow);
      flag = true;
    }
  });

  function Goto(inow){
    var l = $big_li.eq(inow).position().left;
    //console.log(inow, l);

    $big_list.stop(true,true).animate({left: -l}, 1000, 'easeInOutBack',function(){
      flag = false;
    });
    $small_a.removeClass('active').eq(inow).addClass('active');
  }
  startTimer();
});

