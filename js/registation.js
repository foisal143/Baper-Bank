document.getElementById('btn-register').addEventListener('click', () => {
  const name = inputValueSt('name');
  const email = inputValueSt('regiEmail');
  const pass = inputValueSt('regiPassword');
  const newPass = inputValueSt('newPass');
  console.log(name, email, pass, newPass);
});
