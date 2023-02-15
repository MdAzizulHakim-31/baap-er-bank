//..................................................................................................................
//======================================={( Deposit )}================================================//

//step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2: get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

//step-7: clear the deposit field
depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid amount');
        return;
    }

    //step-3: get the current deposit total
    //for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

})


//======================================={( Withdraw )}================================================//


//step-1: add event listener to the deposit button
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2: get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount)

    //step-7: clear the deposit field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid amount');
        return;
    }

    //step-3: get the current deposit total
    //for non-input(element other than input, textarea) use innerText to get the text
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("'Baap er bank' does not have so much money. Do some work to gather more money")
        return;
    }

    //step-4: add numbers to set the total withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})

