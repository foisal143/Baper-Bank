document.getElementById('depBtn').addEventListener('click', () => {
  const inputValues = getValueInput('depositInput');
  const depositIner = getValueInnerText('dep');

  if (inputValues < 0) {
    alert('bokachuda taka ki kokhono 0 er kom hote pare');
    return;
  }
  if (isNaN(inputValues)) {
    alert('Please enter a valid number of amount');
    return;
  }
  const newDepValue = inputValues + depositIner;
  calculation('dep', newDepValue);

  const balanceTotal = getValueInnerText('balance');
  const newBalance = inputValues + balanceTotal;

  calculation('balance', newBalance);
});
