const userValue = [];

document.getElementById('btn-register').addEventListener('click', () => {
  const name = inputValueSt('name');
  const email = inputValueSt('regiEmail');
  const pass = inputValueSt('regiPassword');
  const newPass = inputValueSt('newPass');
  const userInfo = {
    name: name,
    email: email,
    password: pass,
  };
  if (name == '' || email === '' || pass === '' || newPass === '') {
    alert('Please Enter your Valid information');
    return;
  }

  if (pass != newPass) {
    document.getElementById('alertPass').innerText = '!Password not matched';
    return;
  } else {
    document.getElementById('alertPass').innerText = 'Registation successfull';
    document.getElementById('alertPass').style.color = 'green';
    userValue.push(userInfo);
  }
});
