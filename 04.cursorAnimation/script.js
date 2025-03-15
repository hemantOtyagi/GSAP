var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image")

 main.addEventListener("mousemove",(dets) => {
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:0.9,
    ease:"back.out"
    })
  
})

imageDiv.addEventListener("mouseenter",() => {
  cursor.innerHTML = "View More"
  gsap.to(cursor,{
     scale:3,
    backgroundColor:"#ffffff8a"
    
  })
})


imageDiv.addEventListener("mouseleave",() => {
  cursor.innerHTML = ""
  gsap.to(cursor,{
     scale:1,
    backgroundColor: "white"
  })
})
