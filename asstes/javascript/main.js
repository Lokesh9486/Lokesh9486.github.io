const item=document.querySelectorAll(".item");
const restBtn=document.querySelector(".reset-btn");
const startGame=document.querySelector(".start_game");
const min=document.querySelector(".min");
const sec=document.querySelector(".sec");
const start_game_container=document.querySelector(".start_game_container");
const winnerContainer=document.querySelector(".winner-container");

let count=0;
let time_sec=0;
let time_min=0;
let min_count=1;
let timeingFun;

startGame.addEventListener("click",letSBegin);

function letSBegin(){
  
  start_game_container.classList.add("tran_animat");

  timeingFun=setInterval(() => {
    time_sec++;
    if (time_sec<10) {
      sec.innerHTML=`0${time_sec}`;
    }
    else{
      sec.innerHTML=time_sec;
    }
    
    if(time_sec===60){
      min.innerHTML=`0`+min_count;
      time_sec=0;
      min_count++;
      if(min_count==5){
        sec.innerHTML="00";
        min.innerHTML="00";
        clearInterval(timeingFun);
      }
    }
  }, 1000);  
}

restBtn.addEventListener("click",resetFun);

function resetFun(){
  item.forEach(item=>{
    item.innerHTML="";
  })
  sec.innerHTML="00";
  min.innerHTML="00";
  count=0;
  time_sec=0;
  time_min=0;
  min_count=1;
  clearInterval(timeingFun);
  letSBegin();
}

item.forEach(item => {
  item.addEventListener("click",checking_it);  
});

function checking_it(){
  if (count) {
    if(this.innerText){
      return
    }
    else{
      this.innerText="x";
      count--;
    }
  }
  else{
    if(this.innerText){
      return
    }
    else{
      this.innerText="o";
      count++;
    }
  }
  result_check(this.innerHTML);
}


function result_check(innerValue){
const itemOne=document.querySelector(".item-first").innerText;
const itemSecond=document.querySelector(".item-second").innerHTML;
const itemThird=document.querySelector(".item-third").innerHTML;
const itemFourth=document.querySelector(".item-fourth").innerHTML;
const itemFifth=document.querySelector(".item-fifth").innerHTML;
const itemSixth=document.querySelector(".item-sixth").innerHTML;
const itemSeventh=document.querySelector(".item-seventh").innerHTML;
const itemEight=document.querySelector(".item-eight").innerHTML;
const itemNinth=document.querySelector(".item-ninth").innerHTML;

const arrfirst=[itemOne,itemSecond,itemThird];
const arrSecond=[itemFourth,itemFifth,itemSixth];
const arrThird=[itemSeventh,itemEight,itemNinth];
const arrFourth=[itemOne,itemFourth,itemSeventh];
const arrFifth=[itemSecond,itemFifth,itemEight];
const arrSixth=[itemThird,itemSixth,itemNinth];
const arrSeveth=[itemOne,itemFifth,itemNinth];
const arrEight=[itemThird,itemFifth,itemSeventh];

const parent=[arrfirst,arrSecond,arrThird,arrFourth,arrFifth,arrSixth,arrSeveth,arrEight];

let passValue=innerValue;

for(let i=0;i<parent.length;i++){
  final_result_check(parent[i],passValue);
}
}

function final_result_check(arr,passValue){
  if(arr[0]===arr[1] && arr[0]===arr[2]){
  if(arr[0].length && arr[1].length && arr[2].length){
    winnerContainer.classList.add("winner-container-show");
    winnerContainer.innerHTML=`Match won by ${passValue}<br> duration:${min.innerHTML}:${sec.innerHTML} <br> <br> <button class="recover-btn">Cancel</button>`;
    clearInterval(timeingFun);
    const recoverBtn=document.querySelector(".recover-btn");
    recoverBtn.addEventListener("click",()=>{
    clearInterval(timeingFun);
    winnerContainer.classList.remove("winner-container-show");
  })
  }
 }
}
