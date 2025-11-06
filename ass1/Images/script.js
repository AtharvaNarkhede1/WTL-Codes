const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const mobileSignUp = document.getElementById('mobileSignUp');
const mobileSignIn = document.getElementById('mobileSignIn');

// Desktop toggle
signUpButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    container.classList.add('show-signup');
  } else {
    container.classList.add('right-panel-active');
  }
});

signInButton.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    container.classList.remove('show-signup');
  } else {
    container.classList.remove('right-panel-active');
  }
});

// Mobile toggle inside forms
mobileSignUp.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.add('show-signup');
});

mobileSignIn.addEventListener('click', (e) => {
  e.preventDefault();
  container.classList.remove('show-signup');
});
