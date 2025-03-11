//gsap.from("#page1 #box", {
//  scale:0,
//  duration:2,
//  delay:1,
//  rotate:360,
//  scrollTrigger:{
//    trigger:"#page1",
//    scroller:"body",
//    //markers:true,
//    scrub:"true",
//    start:"top 60%",
//    end:"top 40%"
//  }
//})
//
//
//gsap.from("#page2 #box", {
//  scale:0,
//  duration:2,
//  rotate:360,
//  scrollTrigger:{
//    trigger: "#page2 #box",
//    scroller: "body",
//    markers:true,
//    scrub:2, // this scrub property helps in making our animation more smooth by providing true or numeric value to this attribute
//    start: "top 50%",
//    end:"top 30%",
//    pin: true
//  }
//})
//
//gsap.from('h1',{
//  opacity:0,
//  y:100,
//  duration:2,
//  scrollTrigger:{
//    trigger:"h1",
//    scroller: "body",
//    //markers: true,
//    start:"top 30%"
//  }
//})
//
//
//gsap.from('h2',{
//  opacity:0,
//  y:100,
//  duration:2,
//  scrollTrigger:{
//    trigger:"h2",
//    scroller: "body",
//    //markers: true,
//    start:"top 30%"
//  }
//})
//
//
//gsap.from("#page3 #box", {
//  scale:0,
//  duration:2,
//  delay:1,
//  rotate:360,
//  scrollTrigger:{
//    trigger:"#page3",
//    scroller:"body",
//    //markers:true,
//    scrub:"true",
//    start:"top 60%"
//  }
//})


gsap.to("#page2 h1", {
  transform:"translateX(-150%)",
  scrollTrigger:{
    trigger:"#page2", //if there is some case where we need to use pin property so the trigger point will always be the parent of that child in this case of h1 the parent is h1
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -100%",
    scrub:2,
    pin: true  //holds the parent component for the animation to be complete
  }
})
