function itemCount(item, price, isAdd){

    const countID = document.getElementById(item+'-count');
    const priceID = document.getElementById(item+'-price');
    let priceDevice = price;
    let countDevice = parseInt(countID.value);
    if(isAdd == true){
        countDevice = countDevice + 1
    }
    else{
        if(countDevice > 0){
            countDevice = countDevice - 1
        }
    }
    
     countID.value = countDevice;
     priceID.innerText = priceDevice * countDevice;
     
}

function productPrice(item){
    const countID = document.getElementById(item+'-count');
    let countDevice = parseInt(countID.value);
    return countDevice;
}

function totalPrice(){
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const phoneTotalPrice = productPrice('phone') * 1219;
    const caseTotalPrice = productPrice('case') * 59;
    const subTotalAmount = phoneTotalPrice + caseTotalPrice;
    subTotal.innerText = subTotalAmount;
    const taxAmount = subTotalAmount / 10;
    tax.innerText = taxAmount;

    total.innerText = subTotalAmount + taxAmount;
}

const plusPhoneClick = document.getElementById('phone-plus');
plusPhoneClick.addEventListener('click', function(){
    itemCount('phone', 1219, true);
    totalPrice();
});

const minusPhoneClick = document.getElementById('phone-minus');
minusPhoneClick.addEventListener('click', function(){
    itemCount('phone', 1219, false);
    totalPrice();
})
const casePlusClick = document.getElementById('case-plus');
casePlusClick.addEventListener('click', function(){
    itemCount('case', 59, true);
    totalPrice();
});

const caseMinusClick = document.getElementById('case-minus');
caseMinusClick.addEventListener('click', function(){
    itemCount('case', 59, false);
    totalPrice();
})

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', function(){
    const countPhoneID = document.getElementById('phone-count');
    countPhoneID.value = '';
    const countCaseID = document.getElementById('case-count');
    countCaseID.value = '';
    const phonePriceID = document.getElementById('phone-price');
    phonePriceID.innerText = 0;
    const casePriceID = document.getElementById('case-price');
    casePriceID.innerText = 0;
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = 0;
    const tax = document.getElementById('tax');
    tax.innerText = 0;
    const total = document.getElementById('total');
    total.innerText = 0;
})