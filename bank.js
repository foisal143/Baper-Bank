const deposit = document.getElementById('dep');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');
let balInti = parseFloat(balance.innerText);
const btnWithdraw = document.getElementById('btn-withdraw');
const btnDeposit = document.getElementById('depBtn');

btnDeposit.addEventListener('click', () => {
  const depositInput = document.getElementById('depositInput');
  const depValue = depositInput.value;
  const dep = parseFloat(depValue);
  const depIner = deposit.innerText;
  let depItem = parseFloat(depIner);
  if (depValue === '') {
    alert('please enter your amount');
    return;
    // btnDeposit.setAttribute('data-modal-target', 'popup-modal');
    // btnDeposit.setAttribute('data-modal-toggle', 'popup-modal');
  } else {
    if (depValue < 0) {
      alert('Halar pu hala taka ki kokhono 0 er kom hote pare');
      return;
    } else {
      balance.innerText = balInti += dep;

      depositInput.value = '';
    }
  }
  deposit.innerText = depItem += dep;
});

btnWithdraw.addEventListener('click', () => {
  const withdrawInput = document.getElementById('withdrawInput');
  const withValue = withdrawInput.value;
  const withdrawIner = withdraw.innerText;
  let withdrawValue = parseFloat(withdrawIner);

  const withval = parseFloat(withValue);

  console.log(withdraw.innerText);
  if (withValue === '') {
    alert('please enter your amount');
    return;
  } else {
    if (withValue < 0) {
      alert('Halar pu hala taka ki kokhono 0 er kom hote pare');
      return;
    } else {
      withdrawInput.value = '';
    }
  }

  if (balInti < withval) {
    alert('Tumar acount e eto taka nai joto ase tototuku nite parba');
    return;
  } else {
    balance.innerHTML = balInti -= withval;
  }
  withdraw.innerText = withdrawValue += withval;
});
