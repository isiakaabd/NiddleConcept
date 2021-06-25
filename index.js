const buttonToggler = document.querySelector('.navbar-toggler')
const buttonTogglers = document.querySelector('.navbar-toggler-icon');
const navbar= document.getElementById("navbar")

buttonToggler.addEventListener('click', () => {
  buttonTogglers.classList.toggle('none')
  buttonTogglers.nextElementSibling.classList.toggle('none')
})

window.addEventListener("scroll", ()=>{
  
  navbar.classList.toggle("sticky",window.scrollY  > 0)
   })


// jquery
//  $("h1").css("backgroundColor", "tomato");


// var z = $('.address-container').text()
// alert(z)
//z.css("backgroundColor", "tomato")