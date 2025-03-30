window.addEventListener("wheel", (dets) => {
  if(dets.deltaY > 0 ){
    gsap.to(".marque",{
      transform: "translatex(-200%)",
      repeat:-1,
      duration:4,
      ease:"none"
    })

    gsap.to(".marque img",{
      rotate:180,
    })
  }
  else{
    gsap.to(".marque",{
      transform: "translatex(0%)",
      repeat:-1,
      duration:4,
      ease:"none"
    })

    gsap.to(".marque img",{
      rotate:360,
    })
  }
})
