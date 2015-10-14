function lunbo(elem, option){
  /*
    inow:存取当前轮播图片序列
    timer:存取定时器对象
    $small_a:小圆点集合
    obj{
      direction:horizontal/vertical 水平或垂直
      speed:滑动速度
      initialSlide：初始滑动索引
    }
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
  h = $container.height(),
  slide = {
    w : $slide.eq(0).width(),
    h : $slide.eq(0).height(),
    len : $slide.length
  };


  //初始化
  this.init = function(){
    $small_a = '<a href="javascript:;"></a>';
    for(var i = 0; i < $slide_list.length; i++){
      $slide_list.append($small_a);
    }
    if(!!opaction){
      
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
      console.log('e')
    }).on('mouseout', function(){
      $prev.hide();
      $next.hide();
      $small_list.hide();
      startTime();
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

    $small_list.on('click', 'a', function(){
      inow = $(this).index();
      Goto(inow);
    });
  };

  function startTime(){
    timer = setInterval(function(){
      if(inow < small_a.length-1){
        inow++;
      }else{
        inow＝0；
      }
      Goto(inow);
    },1000);
  }

  function Goto(inow){
    var l = $slide.eq(inow).position().left;
    $slide_list.stop(true,true).animate({ left: -l}, 1500, 'easeInOutBack');
    $small_a.removeClass('active').eq(inow).addClass('active');
  }

}