
// create variables.
let localDarkMode = localStorage.getItem('localDarkMode'); 
let darkModeToggle = document.querySelector('a.dark-mode-toggle');

//Set how will the dark and light mode interact with your HTML and CSS creating functions for when it's enabled and disabled.
let enableDarkMode = () => {
  document.body.classList.add('dark');
  localStorage.setItem('localDarkMode', 'enabled');
}

let disableDarkMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('localDarkMode', null);
}

//Once the page loads, check the localStorage value for the last session (if any) to set the correct mode.

if (localDarkMode === 'enabled') { enableDarkMode() }

//Add the event listener for the toggle button adding the functions already created before and loading the value for the localStorage too.

darkModeToggle.addEventListener('click', () => {
  
  localDarkMode = localStorage.getItem('localDarkMode'); 
  
  if (localDarkMode !== 'enabled') {
    enableDarkMode();

  } else {  
    disableDarkMode(); 
  }
});







// Generates new fact on About page
function newFact() {
    var facts = ["The wood frog can hold its pee for up to eight months. My personal record is ten hours on an international flight. Wow!", "The term 'freelancers' originally referred to self-employed, sword-wielding mercenaries. Regrettably, I do not own a sword.", "The word 'MacGyvered' is in the Oxford English Dictionary. (e.g. I MacGyvered this website using toothpicks and StackOverflow.)"];
    var randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').innerHTML = facts[randomFact];
  };


// Colorful click effect
const COLORS = ['red','green','pink','blue','yellow','purple'];

function clickEffect(e){
  let rippleColor = Math.floor(Math.random() * COLORS.length);
  
  let ripple = document.createElement('div');
  ripple.className = ('clickRipple');
  ripple.style.top = `${e.clientY}px`;
  ripple.style.left = `${e.clientX}px`;
  ripple.style.borderColor = COLORS[rippleColor];
  document.body.appendChild(ripple);
  
  ripple.addEventListener('animationend',()=>{
    ripple.parentElement.removeChild(ripple);
  })
}
document.addEventListener('click', clickEffect)

// Navigation Menu Toggle 
const menuToggle = document.querySelector('a.menu-toggle')
const navMenu = document.querySelector('.overlay')

document.addEventListener('click', function () {
  const clickEd = menuToggle.contains(event.target)

 if (clickEd) {
  if (menuToggle.classList.contains('clicked')) {
    navMenu.classList.add('slide-out-top')
    navMenu.classList.remove('bounce-in-top')
    menuToggle.classList.toggle('clicked') 
    } 
   else {
    navMenu.classList.remove('slide-out-top')
    navMenu.classList.add('bounce-in-top')
    menuToggle.classList.toggle('clicked') 
    }
} 
  else {
   menuToggle.classList.remove('clicked')
    navMenu.classList.remove('bounce-in-top')
}
})

// Contact Form Validation 
$('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}

$("#contact-form").submit(function() {
	var stopsubmit = false;

if($('#name').val() == "") {
	errorfield('#name-form');
	stopsubmit=true;
}
if($('#email').val() == "") {
	errorfield('#email-form');
	stopsubmit=true;
}
  if(stopsubmit) return false;
});
		
});
