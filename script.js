gsap.from("#main #img1",{
    y:-200,
    opacity : 0,
    delay : 3.1,
    duration : 0.9,
})
gsap.from("#main #img2",{
    y:200,
    opacity : 0,
    delay : 3.1,
    duration : 0.9,
})



var tl = gsap.timeline()

tl.from("#main #navpart1",{
         y:-30,
        opacity : 0,
        delay : 3.9,
        duration : 0.8,
     })

     tl.from("#main #navpart2 h5",{
            y:-30,
             opacity : 0,
           duration : 0.8,
           stagger : 0.3,
          
         })

         tl.from("#main #content h1",{
            y:-30,
             opacity : 0,
           duration : 0.8,
           stagger : 0.3,
          
         })
         tl.from("#main #content h3",{
            y:-30,
             opacity : 0,
           duration : 0.8,
           stagger : 0.3,
          
         })
         tl.from("#main #content button",{
            y:-30,
             opacity : 0,
           duration : 0.8,
           stagger : 0.3,
          
         })



         Shery.mouseFollower({
            //Parameters are optional.
            skew: true,
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
          });







          gsap.from("#main2 p , #main2 img, #main2 button , #main2 h5, #main2 h2",{
            y:-40,
            opacity:0,
            duration:0.5,
            delay : 0.2 ,
            stagger : 0.3 ,
            scrollTrigger :{
              trigger : "#main2",
              scroller : "body",
              markers : false ,
              start : "top 20%" ,
            
              


            }
          })



          //loader......

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
    delay : 2.4,
    duration : 1.9 ,
})






//main3 animation

gsap.from("#main3 #video1 , #main3 #video2 , #main3 #video3",{
  y:-50,
  opacity:0 ,
  scale : 0 ,
 
  duration:0.5,
  delay : 0.2 ,
  stagger : 0.3 ,
  scrollTrigger : {
    trigger : "#main3",
    scroller : "body",
    markers : false ,
    start : "top 30%" ,

  }

})


gsap.from("#main4  video , #main4  h3 , #main4 h2 , #main4 h6 ",{
  scale : 0 ,
  opacity: 0 ,
  duration:0.5,
  delay : 0.2 ,
  stagger : 0.3 ,
  scrollTrigger : {
    trigger : "#main4",
    scroller : "body",
    markers : false ,
    start : "top 30%" ,

  }
})


Shery.textAnimate("#main5 #email , #main5 #email2 , #main5 #email3" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
  scrollTrigger:{
    trigger : "#main5",
    scroller : "body",
    markers : true ,
    start : "top 30%"
  }
});




