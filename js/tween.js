$(function(){
  var $box = $('.box');
  //TweenMax.to($box, 2, {background:"#f1f1f1", top: "300px", left:"500px"});
  //TweenMax.to($box, 2, {background:"#f1f1f1", top: 300, left:500});
  TweenMax.to($box, 2, {background:"#f1f1f1", top: "300px", left:"500px"});//三种效果相同
  TweenMax.to($box, 2, {background:"red", left: "300px", top:"500px",delay: 1});
  /*
  function completeHandler(){
    TweenMax.to($box, 2, {background:"red", left: "300px", top:"500px"});
  }
  */
})