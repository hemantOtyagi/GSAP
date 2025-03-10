console.log("hello world")
//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
//gsap.to("#box1", { rotation: 360,
//  x: 900,
//  duration: 1,
//  delay: 1,
//  backgroundColor:"yellow",
//  borderRadius:"100px",
//  repeat:-1,
//  yoyo: true // this yoyo property basically used to make the object to and form in between initial and final position
//
//});

//gsap.from("#box2", { rotation: 260,
//  x: 500,
//  duration: 1,
//  delay: 1,
//  backgroundColor: "blue",
//  borderRadius:"100px"
//});

//gsap.to("h1", {
//  opacity:0,
//  duration:2,
//  delay:1,
//  color:"red",
//})

//gsap.from("h1", {
//  y:100,
//  opacity:0,
//  duration:2,
//  delay:1,
//  color:"red",
//  stagger:0.3 // stagger property is basically run the same gsap animation for each element of a group seprately
//})


//This below method of manually calculating time and applying animation one after another is hectic so we use gsap Timeline to solve this issue and make the animation synchronous
//gsap.to("#box1", {
//  x:800,
//  duration:1,
//  delay:1.5,
//  rotation:200
//})
//
//
//gsap.to("#box2", {
//  x:800,
//  duration:1,
//  delay:2.5,
//  rotation:200
//})
//
//
//gsap.to("#box3", {
//  x:800,
//  duration:1,
//  delay:3.5,
//  rotation:200
//})


var tl = gsap.timeline();
tl.to("#box1",{
  x:400,
  rotation:360,
  backgroundColor:"pink",
  delay:1
})


tl.to("#box2",{
  x:600,
  rotation:360,
  backgroundColor:"lightgreen",
})


tl.to("#box3",{
  x:800,
  rotation:360,
  backgroundColor:"lightred",
})
