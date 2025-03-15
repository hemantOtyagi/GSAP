console.log("hello world");

var initialPath = `M 200 200 Q 850 190 1700 200`
var finalPath = `M 200 200 Q 850 100 1700 200`

var string = document.querySelector(".string")

string.addEventListener("mousemove",(dets) => {
  console.log("mouse entered")
  finalPath = `M 200 200 Q ${dets.x} ${dets.y} 1700 200`
  //console.log(initialPath)
  gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration:0.2,
    ease:"power3.out"
  })

})

string.addEventListener("mouseleave",() => {
  console.log("mouse leaves")
  gsap.to("svg path",{
    attr:{
      d: initialPath
    },
      duration:1.5,
      ease:"elastic.out(1,0.2)"
  })

})
