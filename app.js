
let Plus = document.querySelectorAll(".fa-plus")//get all plus icons
let minus = document.querySelectorAll(".fa-minus")//get all minus icons
let priceTag = document.querySelectorAll(".priceTag")//no. of items selected
let totalPrice=document.getElementById("total-price");//total price of items
let prices = document.querySelectorAll(".itm-price")//get each item price
let element= document.querySelectorAll(".cart-ele2");
let trash = document.querySelectorAll(".fa-trash-can");

// increasing elements counter----------------------
Plus.forEach((btn, idx) => {
    let plusCounter = priceTag[idx];
    let itmCounter=prices[idx];
    btn.addEventListener("click", add = () => {
        plusCounter.innerHTML = parseInt(plusCounter.innerHTML) + 1;//increase the counter by one 
        totalPrice.innerHTML = parseInt(totalPrice.innerHTML)+parseInt(itmCounter.innerHTML);//
    })
})
// decreasing elements counter-----------------------
minus.forEach((btn,idx)=>{
    let minusCounter=priceTag[idx];
    let itmCounter=prices[idx];
    let ele=element[idx];
    btn.addEventListener("click",add=()=>{
        if(parseInt(minusCounter.innerHTML)>0){
            minusCounter.innerHTML=parseInt(minusCounter.innerHTML)-1;
            totalPrice.innerHTML = parseInt(totalPrice.innerHTML)-parseInt(itmCounter.innerHTML);
        }
    })
})

trash.forEach((btn,idx)=>{
    let ele=element[idx];
    btn.addEventListener("click",add=()=>{
        ele.remove();
    })
})
