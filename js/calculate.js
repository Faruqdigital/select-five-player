document.getElementById('calculate-player-number').addEventListener('click', function(){
    const calculateField = document.getElementById('calculate-field');
    const newCalculateAmountString = calculateField.value;
    const newCalculateAmount = parseFloat(newCalculateAmountString);
    
    calculateField.value = '';

    const calculateTotalElement = document.getElementById('calculate-total');
    const previousCalculateTotalString = calculateTotalElement.innerText;
    const previousCalculateTotal = parseFloat(previousCalculateTotalString)

    const newCalculateTotal = newCalculateAmount * 5;
    calculateTotalElement.innerText = newCalculateTotal;

    const totalBalanceElement = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalanceElement.innerText;
    const previousTotalAmount = parseFloat(previousTotalBalanceString);

    const newTotalBalance = previousTotalAmount + newCalculateTotal;
    totalBalanceElement.innerText = newTotalBalance;
})

document.getElementById('calculate-total-number').addEventListener('click', function(){
    const managerBalanceField = document.getElementById('manager-balance-field');
    const managerBalanceString = managerBalanceField.value;
    const managerAmount = parseFloat(managerBalanceString);
    
    managerBalanceField.value = '';

    const coachBalanceField = document.getElementById('coach-balance');
    const coachBalanceString = coachBalanceField.value;
    const coachAmount = parseFloat(coachBalanceString);
    
    coachBalanceField.value = '';

    const newTotalBalanceElement = document.getElementById('total-balance');
    const newPreviousBalanceString = newTotalBalanceElement.innerText;
    const newPreviousTotalAmount = parseFloat(newPreviousBalanceString);

    const newBalance = newPreviousTotalAmount + managerAmount + coachAmount;
    newTotalBalanceElement.innerText = newBalance;
})


