
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function videoconAnimation(){
    var videopcon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play")
videopcon.addEventListener("mouseenter",function(e){

        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
})
videopcon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videopcon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
      left:dets.x-50,
      top:dets.y-70
    })
})

}

videoconAnimation();


function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        staggr:0.2
    })
    gsap.from("#page1 #video-container",{
       scale:0.9,
        opacity:0,
        delay:1,
        duration:0.5,
        staggr:0.2
    })
}

loadingAnimation();

document.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
  })
})
document.querySelector("#child1").addEventListener("mousemove",function(dets){
    gsap.to("#cursor1",{
       
      })
    
})
let youtubeBtn=document.getElementById("#icons");
youtubeBtn.addEventListener("click",function(){
    alert("yes")
})
