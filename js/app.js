function getInputValue(product) {
    const productInput = document.getElementById(product + '-cost');
    const productNumber = parseInt(productInput.value);

    if (isNaN(productNumber) || productNumber < 0 || productNumber == '') {
        productInput.value = '';
        return alert("Please give a positive number");
    }

    // productInput.value = '';
    return productNumber;
}


function calculateTotal() {
    let costOfFood = getInputValue('food');
    let costOfRent = getInputValue('rent');
    let costOfCloth = getInputValue('cloth');
    let totalIncome = getInputValue('income');

    let totalExpenses = costOfFood + costOfRent + costOfCloth;

    if (totalExpenses > totalIncome) {
        return alert('Income must be larger than total expenses');
    }

    let balance = totalIncome - totalExpenses;

    //update on the html
    document.getElementById('total-expense').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;
    return balance;

}

function updateBalance() {
    let totalIncome = getInputValue('income');
    let savingInput = getInputValue('save');

    let newBalance = parseInt(balance.innerText);
    let save = (totalIncome * (savingInput / 100));
    if (save > newBalance) {
        return alert('Not have enough  balance to save')
    }

    let RemainingBalance = newBalance - save;

    //update on the html
    document.getElementById('save-balance').innerText = save;
    document.getElementById('remaining-balance').innerText = RemainingBalance;

}

document.getElementById('calculation').addEventListener('click', function () {
    calculateTotal();
});

document.getElementById('saving-button').addEventListener('click', function () {
    updateBalance();
});