document.getElementById('btn-submit').addEventListener('click', () => {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const passInput = document.getElementById('password');
  const password = passInput.value;

  if (email === 'foisal@gmail.com' && password === 'Foisal') {
    window.location.href = 'bank.html';
  } else {
    alert('please enter your valid information!');
  }
});

// bank.html er jonno js section
