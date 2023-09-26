document.getElementById('btn-withdraw').addEventListener('click', () => {
  const withdraValues = getValueInput('withdrawInput');
  const withdrawInner = getValueInnerText('withdraw');
  const balanceTotals = getValueInnerText('balance');
  if (balanceTotals < withdraValues) {
    alert('Tumar  acount e eto taka nai');
    return;
  }
  if (withdraValues < 0) {
    alert('bokachuda taka ki kokhono 0 er kom hote pare');
    return;
  }
  if (isNaN(withdraValues)) {
    alert('Please enter a valid number of amount');
    return;
  }
  const newWithValue = withdraValues + withdrawInner;
  calculation('withdraw', newWithValue);

  const newBalances = balanceTotals - withdraValues;

  calculation('balance', newBalances);
});
