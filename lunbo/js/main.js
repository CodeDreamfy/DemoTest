$(function(){
  var timer,
  inow = 0;

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
    inow--;

    if(inow < 0 ){
      inow = $small_a.length - 1;
    }

    Goto(inow);
  }).on('click', '.next', function(){
    
    inow++;

    if(inow > $small_a.length - 1){
      inow = 0;
    }

    Goto(inow);
  });

  function Goto(inow){
    var l = $big_li.eq(inow).position().left;
    //console.log(inow, l);
    $big_list.animate({left: -l}, 1000, 'easeInOutBack');
    $small_a.removeClass('active').eq(inow).addClass('active');
  }
  startTimer();
});

function lunbo(obj){
  /*
    inow:存取当前轮播图片序列
    timer:存取定时器对象
    $small_a:小圆点集合
  */
  var inow = 0, timer,$small_a;
  var $container = $('.container'),
  $wrapper = $('.wrapper', $container),
  $slide_list = $('.slide', $wrapper),
  $slide = $('li', $slide_list),
  $small_list = $('.small_list', $wrapper),
  $prev = $('.prev', $container),
  $next = $('.next', $container);


  //获取容器的宽度与高度
  var w = $container.width(),
  h = $container.height();

  //初始化
  this.init = function(){
    $small_a = '<a href="javascript:;"></a>';
    for(var i = 0; i < $slide_list.length; i++){
      $slide_list.append($small_a);
    }
    $small_a = $('a', $slide_list);
  };

  //添加事件
  this.events = function(){

    $container.on('mousemover', function(){
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

    $container.on('click', $prev, function(){
      inow--;
      if(inow < 0){
        inow = $small_a.length-1;
      }
      Goto(inow);
    });

    $container.on('click', $next, function(){
      inow++;
      if(inow > $small_a.length-1){
        inow = 0;
      }
      Goto(inow);
    });
    



  };

}