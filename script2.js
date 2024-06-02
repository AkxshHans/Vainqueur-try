Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });




var t1 = gsap.timeline()


function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*15)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
        else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"

        }
    },150)
}
time()


t1.to("#loader h1",{
    
    delay  : 0.5,
    duration : 1 ,
    onStart : time()

})

gsap.to("#loader",{
    top : "-100vh" ,
    delay : 2.6,
    duration : 1.9 ,
})




Shery.textAnimate("#main #one , #main #two , #main #three , #main #four , #main #five" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 1.5,
    duration: 0.2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });