function Id(id) {
    return document.getElementById(id);
}

let amount = Id('total-amount').innerText;
let amountAvailable = parseFloat(amount);

let submitBtn1 = Id('submit1');
let submitBtn2 = Id('submit2');
let submitBtn3 = Id('submit3');

submitBtn1.addEventListener('click', function(event){
    event.preventDefault();
    let inputAmount = Id('donation-input1');
    let inputAmountValue = parseFloat(inputAmount.value);
    if(inputAmountValue > 0 && inputAmountValue <= amountAvailable){
        amountAvailable -= inputAmountValue;
        Id('total-amount').innerText = amountAvailable;
        inputAmount.value = '';
    }
})
