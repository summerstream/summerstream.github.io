function fall(){
  var fallTarget = document.getElementById('aboutCard');
  var begin = 0;
  var dura = 100;
  var initTop = fallTarget.offsetTop
  var height = fallTarget.clientHeight;
  function bounce(){
    begin++;
    if(begin < dura){
      var topValue = 0 - height + window.Tween.Bounce.easeOut(begin,0,initTop+height,dura);
      fallTarget.style.top = topValue+'px';
      window.requestAnimationFrame(bounce);
    }
  }
  bounce();
}
window.requestAnimationFrame(fall);

//bind scroll
var pic1 = document.getElementById("pic1");
function scroll(e) {
  console.info(window.scrollY);
  window.requestAnimationFrame(function() {
    if (1) {
      var top = 200 - window.scrollY / 10;
      if (top < 0) {
        top = 0;
      }
      pic1.style.top = top + "px";
    } else {
    }
  });
}
window.addEventListener("scroll", scroll);

// pull animation
setTimeout(function(){
    var pullNodes = document.getElementsByClassName('pull');
    for(var i=0;i<pullNodes.length;i++){
            setTimeout((function(i){
                return function(){
                    pullNodes[i].style.transform = 'translateY(0)';
                    pullNodes[i].style.opacity = 1;
                }
            })(i), i*100);

    }
}, 100*1000/60)