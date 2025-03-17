var tl = gsap.timeline();
const menu = document.querySelector("#nav i")
const cross = document.querySelector("#full i")



tl.to("#full",{
  right:"0",
  duration:0.7,
  
})

tl.from("#full h4",{
  x:200,
  duration:0.7,
  stagger:0.2,
  opacity:0
})

tl.from("#full i",{
  opacity:0
})

tl.pause();

menu.addEventListener("click",() => {
  tl.play();
})

cross.addEventListener("click",() => {
  tl.reverse();
})
