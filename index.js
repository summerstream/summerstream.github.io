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
}, 300)