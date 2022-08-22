
let Plus = document.querySelectorAll(".fa-plus")

let count = 0;
Plus.forEach(btn => {
    count ++
    let counter = btn.parentElement.previousElementSibling
    btn.addEventListener("click", add = () => {
        counter.innerHTML = parseInt(counter.innerHTML) + 1
    })
})

// document.querySelectorAll(".fa-plus").onclick=function(e){
//     count++;
//     console.log("adding")
//     document.getElementById("counterLabel").innerHTML=count;
// }
document.querySelectorAll("#minus1,#minus2").onclick=function(){
    if(count>0){
        count--;
    }
    else{
        count=0;
    }
    document.getElementById("counterLabel").innerHTML=count;
}
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
