

/* Colorful click effect */
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

/* Navigation Menu Toggle */
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
