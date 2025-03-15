console.log("hello world");

var initialPath = `M 200 500 Q 850 500 1700 500`
var finalPath = `M 200 500 Q 850 500 1700 500`

var string = document.querySelector(".string")

string.addEventListener("mousemove",(dets) => {
  console.log("mouse entered")
    finalPath = `M 200 500 Q 850 ${dets.y} 1700 500`
    //console.log(initialPath)
    gsap.to("svg path", {
    attr: {
      d: finalPath,
    },
    duration:0.2
  })
   
})

string.addEventListener("mouseleave",() => {
  console.log("mouse leaves")
  gsap.to("svg path",{
    attr:{
      d: initialPath
    }
  })

})
