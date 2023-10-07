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

// password toggler section
document.getElementById('toggler').addEventListener('click', () => {
  const passField = document.getElementById('password');
  const toggleInner = document.getElementById('toggler');
  if (passField.type == 'password') {
    passField.type = 'text';
    toggleInner.innerHTML = `<i id="invisible" class="fa-regular fa-eye toggleIcon"></i>`;
  } else {
    passField.type = 'password';

    toggleInner.innerHTML = `<i class="fa-regular fa-eye-slash toggleIcon"></i>`;
  }
});
// password toggler  registation section
document.getElementById('regiTogglerPass').addEventListener('click', () => {
  const passField = document.getElementById('regiPassword');
  const toggleInner = document.getElementById('regiTogglerPass');
  if (passField.type == 'password') {
    passField.type = 'text';
    toggleInner.innerHTML = `<i id="invisible" class="fa-regular fa-eye toggleIcon"></i>`;
  } else {
    passField.type = 'password';

    toggleInner.innerHTML = `<i class="fa-regular fa-eye-slash toggleIcon"></i>`;
  }
});
// retype password toggler section

document.getElementById('regiTogglerRePass').addEventListener('click', () => {
  const passField = document.getElementById('newPass');
  const toggleInner = document.getElementById('regiTogglerRePass');
  if (passField.type == 'password') {
    passField.type = 'text';
    toggleInner.innerHTML = `<i id="invisible" class="fa-regular fa-eye toggleIcon"></i>`;
  } else {
    passField.type = 'password';

    toggleInner.innerHTML = `<i class="fa-regular fa-eye-slash toggleIcon"></i>`;
  }
});
