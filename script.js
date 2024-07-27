window.addEventListener("mousemove", function(details){
    var rectCont = document.querySelector("#rect");
    var xval = gsap.utils.mapRange(0, window.innerWidth, 100+(rectCont.getBoundingClientRect().width/2), window.innerWidth-(100+rectCont.getBoundingClientRect().width/2),details.clientX);
   gsap.to('#rect',{
    left: xval,
    ease: Power3
   })
});