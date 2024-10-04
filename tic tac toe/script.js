let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let NewGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;

const winPatterns= [
    [0 ,1, 2],
    [0 ,3 ,6],
    [0 ,4,8],
    [1,4,7],
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
];


const resetGame=()=>
{
  turn0=true;
  enableBoxes();
msgContainer.classList.add("hide");

};


boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("Box was clicked");
      if(turn0){
        box.innerHTML="0";
        turn0=false;
      } else{
        box.innerHTML="X";
        turn0=true;
      }
      box.disabled=true;

      checkWinner()
        });
});

const disableBoxes=() =>{
  for (let box of boxes){
    box.disabled=true;
  }
}

const enableBoxes=() =>{
  for (let box of boxes){
    box.disabled=false;
    box.innerHTML="";
  }
}


const showWinner=(Winner)=>{
msg.innerHTML="Congratulation, Winner is "+Winner;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkWinner=()=> {
  for( let pattern of winPatterns){
   
   let pos1Val=boxes[pattern[0]].innerHTML;
   let pos2Val=boxes[pattern[1]].innerHTML;
   let pos3Val=boxes[pattern[2]].innerHTML;

   if(pos1Val !="" && pos2Val!=""&& pos3Val!=""){
    if(pos1Val===pos2Val&&pos2Val===pos3Val){
      console.log("Winner", pos1Val);
      showWinner(pos1Val);
    }
   }
  }
};


NewGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


const drawLine=(winPattrens,isDraw=false)=>{
  const line=document.createElement('div');
  line.classList.add('line');
}