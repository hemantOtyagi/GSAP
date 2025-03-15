const box = document.querySelector("#box");

document.addEventListener("mousemove",(event) => {
   gsap.to("#box",{
    x: event.clientX-13,
    y: event.clientY-10,
    scrub:true,
    duration:1
  }) 
})

gsap.from("#box",{
  y:100,
  opacity:0,
  scrollTrigger:{
    
  }
})
