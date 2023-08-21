function getElementPrice(id){
    const productPriceString = document.getElementById(id).innerText
    const productPrice = parseFloat(productPriceString)
    return productPrice
}

function setElement(id,value){
    const element = document.getElementById(id)
    element.innerHTML = value;
}

function setEntryANdTotal (productName,productprice){
    const product = document.getElementById(productName).innerText
    const productPrice =  getElementPrice(productprice)
   

    const entryArea = document.getElementById('entryArea')
    const count = entryArea.childElementCount
    const p = document.createElement('p')
    p.innerHTML = `${count+1}. ${product}`
    entryArea.appendChild(p) 

    const totalPriceElement= document.getElementById('total-price')
    const previoustotalPrice = getElementPrice('total-price')

    const newTotalPrice = previoustotalPrice + productPrice
    totalPriceElement.innerText = newTotalPrice.toFixed(2)

    const discountElement = document.getElementById('discount')
    let totalElement = document.getElementById('total')
    const previousDiscountPrice = getElementPrice('discount')
    const makePurchase  = document.getElementById('btn-make-purchase')
    const apply = document.getElementById('apply-btn')
    
    if(newTotalPrice>0){
        makePurchase.removeAttribute('disabled')
        makePurchase.classList.remove('opacity-50')
    }
    if(newTotalPrice>=200){
        const newdiscount = newTotalPrice*(20/100)
        discountElement.innerText = newdiscount.toFixed(2)
        const newTotal = newTotalPrice-newdiscount
        totalElement.innerText = newTotal.toFixed(2)
        apply.removeAttribute('disabled')
        apply.classList.remove('opacity-50')
    }else{
        totalElement.innerText = newTotalPrice.toFixed(2) 
    }
     
}
 function clearPurchaseHistory(){
    const entryArea = document.getElementById('entryArea')
    entryArea.innerHTML = "";
    setElement('total-price','00.00')
    setElement('discount','00.00')
    setElement('total','00.00')
    const makePurchase  = document.getElementById('btn-make-purchase')
    makePurchase.setAttribute('disabled',true)
    makePurchase.classList.add('opacity-50')
    const apply = document.getElementById('apply-btn')
    apply.setAttribute('disabled',true)
    apply.classList.add('opacity-50')

}
    
