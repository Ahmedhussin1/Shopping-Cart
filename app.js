let count = 0;
document.getElementById("add").onclick=function(){
    count++;
    document.getElementById("counterLabel").innerHTML=count;
}
document.getElementById("minus").onclick=function(){
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
