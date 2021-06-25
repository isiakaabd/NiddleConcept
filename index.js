const buttonToggler = document.querySelector('.navbar-toggler')
const buttonTogglers = document.querySelector('.navbar-toggler-icon');


buttonToggler.addEventListener('click', () => {
  buttonTogglers.classList.toggle('none')
  buttonTogglers.nextElementSibling.classList.toggle('none')
})



// jquery
//  $("h1").css("backgroundColor", "tomato");


// var z = $('.address-container').text()
// alert(z)
//z.css("backgroundColor", "tomato")