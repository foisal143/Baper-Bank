document.getElementById('btn-submit').addEventListener('click', () => {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const passInput = document.getElementById('password');
  const password = passInput.value;
  for (const element of userValue) {
    if (element.email === email && element.password === password) {
      window.location.href = 'bank.html';
      return;
    }
  }
  if (email === 'foisal@gmail.com' && password === 'Foisal') {
    window.location.href = 'bank.html';
    return;
  } else {
    alert('please enter your valid information!');
  }
});

// registation page er jonno js section

document.getElementById('loginPage').addEventListener('click', () => {
  const regPage = document.getElementById('registation');
  const loginPage = document.getElementById('form-menu');
  loginPage.style.left = '0';
  regPage.style.right = '-100%';
});
document.getElementById('sginUpPage').addEventListener('click', () => {
  const regPage = document.getElementById('registation');
  const loginPage = document.getElementById('form-menu');
  regPage.style.right = '0';
  loginPage.style.left = '-100%';
});
