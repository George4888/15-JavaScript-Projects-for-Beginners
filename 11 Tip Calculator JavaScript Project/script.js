function reset() {
    document.querySelector('.single').style.display = 'none';
    document.querySelector('.multiple').style.display = 'none';
}

const button = document.getElementById('calc').addEventListener('click', () => {

function calculate() {
    reset();

    const billAmount = document.getElementById('amount').value;
    const tipPercentage = document.getElementById('tip').value;
    const numberOfpeople = document.getElementById('people').value;
    
    if(billAmount === "" || billAmount < 1) {
        alert('Please enter a valid number.');
    };

    if(numberOfpeople < 1) {
        alert('Please enter a valid number of people.');
    }

    function tipCalc() {
        let tipTotal = ((billAmount * 100) * tipPercentage) / 100;
        tipTotal = tipTotal.toFixed(2);
        return tipTotal;
    }
    
    let totalTip = tipCalc();
    
    if(numberOfpeople > 1) {
        document.querySelector('.multiple').style.display = 'block';
        let bill = (billAmount / numberOfpeople);
        let tip = (totalTip / numberOfpeople);
        document.querySelector('.totalTipMultiple').innerHTML = tip.toFixed(2);

        let amountEach = parseFloat(bill) + parseFloat(tip);
        document.querySelector('.totalAmountEach').innerHTML = amountEach.toFixed(2);

        let multipleTotal = parseFloat(billAmount) + parseFloat(totalTip);
        document.querySelector('.billTotalMultiple').innerHTML = multipleTotal.toFixed(2);
    } else {
        document.querySelector('.single').style.display = 'block';
        let singleTotal = (parseFloat(billAmount) + parseFloat(totalTip));
        document.querySelector('.tipAmount').innerHTML = totalTip;
        document.querySelector('.totalBill').innerHTML = singleTotal.toFixed(2);
    }
}

calculate();

});