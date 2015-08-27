function AjaxFunction(){
  var AjaxRequest; // 缓存XHR对象便于 Ajax 使用

  try {
    //Opear 8.0+,Safari,Firefox
    AjaxRequest = new XMLHttpRequest();
  }catch (e){
    try {
      AjaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
    }catch (e) {
      try {
        AjaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
      }catch(e) {
        // 错误处理
        alert("Your browser broke!");
        return false;
      }
    }
  }
}