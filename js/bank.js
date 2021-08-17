//function for get input value
function getInputAmount(inputId) {
    const inputflid = document.getElementById(inputId);
    const inputAmount = inputflid.value;
    inputflid.value = '';
    return (inputAmount);
}
//function for get deposite and withdrow inner text
function getCurrentAmount(currentId, inputAmount) {
    const currentAmountFlid = document.getElementById(currentId);
    const curremtAmount = currentAmountFlid.innerText;
    const totalAmount = parseFloat(curremtAmount) + parseFloat(inputAmount);
    currentAmountFlid.innerText = totalAmount;
    return totalAmount
}
// function for calculate total balance 
function getTotalBalanc(totalBalance, inputVlaue, add) {
    const balance = document.getElementById(totalBalance);
    const proviusBalance = balance.innerText;
    if (add == true) {
        balance.innerText = parseFloat(proviusBalance) + parseFloat(inputVlaue);
    }
    else {
        balance.innerText = parseFloat(proviusBalance) - parseFloat(inputVlaue);
    }
}
// deposite btn 
document.getElementById('deposite-btn').addEventListener('click', function () {
    const inputflid = getInputAmount('deposite-input');
    if (inputflid > 0) {
        const Amount = getCurrentAmount('deposite-amount', inputflid);
    }
    const totalBalance = getTotalBalanc('total-balance', inputflid, true);

})
// withdrow btn
document.getElementById('Withdrow-btn').addEventListener('click', function () {
    const withdrowFlied = getInputAmount('Withdrow-input');
    if (withdrowFlied > 0) {
        const withdrowAmount = getCurrentAmount('Withdrow-amount', withdrowFlied);

    }

    const totalBalance = getTotalBalanc('total-balance', withdrowFlied, false);
})