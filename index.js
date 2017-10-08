var pic1 = document.getElementById('pic1');
function scroll(e){
    console.info(window.scrollY)
    window.requestAnimationFrame(function(){
        if(1){
            var top = 200-window.scrollY/10+'px';
            // top=100;
            console.info(top)
            pic1.style.top=top;
        }else{

        }
    })
}
window.addEventListener('scroll', scroll)