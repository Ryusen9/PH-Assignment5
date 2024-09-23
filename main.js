function Id(id) {
    return document.getElementById(id);
}

let amount = Id('total-amount').innerText;
let amountAvailable = parseFloat(amount);

let submitBtn1 = Id('submit1');
let submitBtn2 = Id('submit2');
let submitBtn3 = Id('submit3');

let donationBtn = Id('donation-btn');
let historyBtn = Id('history-btn');
let donationSection = Id('Donation-section');
let historySection = Id('History-section');

donationBtn.addEventListener('click', function(event) {
    event.preventDefault();
    donationSection.classList.remove('hidden');
    historySection.classList.add('hidden');
})

historyBtn.addEventListener('click', function(event) {
    event.preventDefault();
    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
})
// !Submit button 1
submitBtn1.addEventListener('click', function(event){
    event.preventDefault();
    let inputAmount = Id('donation-input1');
    let inputAmountValue = parseFloat(inputAmount.value);
    let innerDonation = Id('donation-amount1');
    let innerDonationValue = parseFloat(innerDonation.innerText);
    if (inputAmount.value === '' || inputAmount.value > amountAvailable || inputAmount.value < 0) {
        return alert('Please enter a valid amount')
    }
    if(inputAmountValue > 0 && inputAmountValue <= amountAvailable){
        innerDonationValue += inputAmountValue;
        innerDonation.innerText = innerDonationValue;
        amountAvailable -= inputAmountValue;
        Id('total-amount').innerText = amountAvailable;
    }
    let modal = Id('modal-wrapper');
    modal.classList.remove('hidden');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 5000);
    let modalCloseBtn = Id('modal-close-btn');
    modalCloseBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    })
    let today = new Date();
    let historyList = Id('history-container');
    let history = document.createElement('div');
    history.innerHTML = `<div class="history border-2 w-[90%] mx-auto py-3 px-3 flex flex-col gap-3    rounded-lg shadow-lg">
        <p>${inputAmount.value} is donated for Donate for Flood at Noakhali, Bangladesh</p>
        <div class="bg-gray-200 py-2 px-3 rounded-lg">
            <p>Date : ${today}</p>
        </div>
        </div>`;
    historyList.appendChild(history);
})
// !Submit button 2
submitBtn2.addEventListener('click', function(event){
    event.preventDefault();
    let inputAmount = Id('donation-input2');
    let inputAmountValue = parseFloat(inputAmount.value);
    let innerDonation = Id('donation-amount2');
    let innerDonationValue = parseFloat(innerDonation.innerText);
    if (inputAmount.value === '' || inputAmount.value > amountAvailable || inputAmount.value < 0) {
        return alert('Please enter a valid amount')
    }
    if(inputAmountValue > 0 && inputAmountValue <= amountAvailable){
        innerDonationValue += inputAmountValue;
        innerDonation.innerText = innerDonationValue;
        amountAvailable -= inputAmountValue;
        Id('total-amount').innerText = amountAvailable;
    }
    let modal = Id('modal-wrapper');
    modal.classList.remove('hidden');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 5000);
    let modalCloseBtn = Id('modal-close-btn');
    modalCloseBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    })
    let today = new Date();
    let historyList = Id('history-container');
    let history = document.createElement('div');
    history.innerHTML = `<div class="history border-2 w-[90%] mx-auto py-3 px-3 flex flex-col gap-3    rounded-lg shadow-lg">
        <p>${inputAmount.value} is donated for Donate for Flood Relief in Feni,Bangladesh</p>
        <div class="bg-gray-200 py-2 px-3 rounded-lg">
            <p>Date : ${today}</p>
        </div>
        </div>`;
    historyList.appendChild(history);
})
// !Submit Button 3
submitBtn3.addEventListener('click', function(event){
    event.preventDefault();
    let inputAmount = Id('donation-input3');
    let inputAmountValue = parseFloat(inputAmount.value);
    let innerDonation = Id('donation-amount3');
    let innerDonationValue = parseFloat(innerDonation.innerText);
    if (inputAmount.value === '' || inputAmount.value > amountAvailable || inputAmount.value < 0) {
        return alert('Please enter a valid amount')
    }
    if(inputAmountValue > 0 && inputAmountValue <= amountAvailable){
        innerDonationValue += inputAmountValue;
        innerDonation.innerText = innerDonationValue;
        amountAvailable -= inputAmountValue;
        Id('total-amount').innerText = amountAvailable;
    }
    let modal = Id('modal-wrapper');
    modal.classList.remove('hidden');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 5000);
    let modalCloseBtn = Id('modal-close-btn');
    modalCloseBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    })
    let today = new Date();
    let historyList = Id('history-container');
    let history = document.createElement('div');
    history.innerHTML = `<div class="history border-2 w-[90%] mx-auto py-3 px-3 flex flex-col gap-3    rounded-lg shadow-lg">
        <p>${inputAmount.value} is donated for Aid for Injured in the Quota Movement</p>
        <div class="bg-gray-200 py-2 px-3 rounded-lg">
            <p>Date : ${today}</p>
        </div>
        </div>`;
    historyList.appendChild(history);
})


