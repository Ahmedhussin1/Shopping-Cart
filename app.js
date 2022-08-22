
let Plus = document.querySelectorAll(".fa-plus")
let minus = document.querySelectorAll(".fa-minus")
let priceTag = document.querySelectorAll(".priceTag")

// increasing elements counter
Plus.forEach((btn, idx) => {
    let plusCounter = priceTag[idx]
    btn.addEventListener("click", add = () => {
        // console.log(idx)
        plusCounter.innerHTML = parseInt(plusCounter.innerHTML) + 1
    })
})
// decreasing elements counter
minus.forEach((btn,idx)=>{
    let minusCounter=priceTag[idx]
    btn.addEventListener("click",add=()=>{
        if(parseInt(minusCounter.innerHTML)>0){
            minusCounter.innerHTML=parseInt(minusCounter.innerHTML)-1;
        }
    })
})

let loveBtn = document.getElementById("love")
let loveCount=1
document.getElementById("love").onclick=function(){
    loveCount++;
    if(loveCount%2==0){
        loveBtn.style.color='red';
    }
    else{
        loveBtn.style.color='black';
    }
    console.log('red');
}
