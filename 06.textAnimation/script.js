function breakTheText(){

  var h1Text = document.querySelector("h1").textContent
  var splitText = h1Text.split("")
  var h1 = document.querySelector("h1")
  var clutter = ""
  var halfTextValue = Math.floor(splitText.length/2)


  splitText.forEach((text, index) => {
    if(index<halfTextValue){
      clutter += `<span class="initial">${text}</span>`
    }
    else{
      clutter += `<span class="final">${text}</span>`
    }
  })

  h1.innerHTML = clutter

}

breakTheText()


gsap.from(".initial",{
  y:50,
  stagger:0.15,
  duration:0.8,
  opacity:0
})


gsap.from(".final",{
  y:50,
  stagger:-0.15,
  duration:0.8,
  opacity:0
})
