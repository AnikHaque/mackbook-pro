// getting all by id 

const totalmemoryCost = document.getElementById('extra-memory')
const totalstorageCost = document.getElementById('extra-storage')
const totaldeliveryCost = document.getElementById('delivery-charge')
const totalPrice = document.getElementById('total-price')
const macPrice = document.getElementById('best-price')
const promoInput = document.getElementById('promoCode')
const promoDiscountPriceText = document.getElementById('total-amount')

//   total memory start

// 8GB Memory 
document.getElementById('eightGbMemory').addEventListener('click', function () {
    totalmemoryCost.innerText = '0'
    updateAll()
})

// 16 GB Memory 
document.getElementById('sixteenGbMemory').addEventListener('click', function () {
    totalmemoryCost.innerText = '180'
    updateAll()
})
//   total memory end

// total storage cost start

// 256 GB SSD 
document.getElementById('lowSSD').addEventListener('click', function () {
    totalstorageCost.innerText = '0'
    updateAll()
})

// 512 GB SSD 
document.getElementById('middleSSD').addEventListener('click', function () {
    totalstorageCost.innerText = '100'
    updateAll()
})

// 1TB SSD 
document.getElementById('highSSD').addEventListener('click', function () {
    totalstorageCost.innerText = '180'
    updateAll()
})
// total storage end

//total delivery cost start

// free delivery 
document.getElementById('firdayTwentyfifth').addEventListener('click', function () {
    totaldeliveryCost.innerText = '0'
    updateAll()
})

// paid delivery of 20 taka 
document.getElementById('fridayTwentyone').addEventListener('click', function () {
    totaldeliveryCost.innerText = '20'
    updateAll()
})
//total delivery cost end

// apply promo and get discount 
document.getElementById('applyPromo').addEventListener('click', function () {
    discountOffer()
})

// update function 
function updateAll() {
    const bestPrice = Number(macPrice.innerText);
    const extraMemoryCost = Number(totalmemoryCost.innerText);
    const extraStorageCost = Number(totalstorageCost.innerText);
    const extraDeliveryCost = Number(totaldeliveryCost.innerText);
    const finalTotalPrice = bestPrice + extraMemoryCost + extraStorageCost + extraDeliveryCost;
    totalPrice.innerText = finalTotalPrice;
    promoDiscountPriceText.innerText = totalPrice.innerText;
}

// promo code apply function 
function discountOffer(){
    let discountPrice = Number(promoDiscountPriceText.innerText)
    promoCode = promoInput.value
    if (promoCode == 'stevekaku') {
        promoDiscountPriceText.innerText = parseFloat(totalPrice.innerText /100)*80
    }
   
    promoInput.value = ''
}