let boxes = document.querySelectorAll(".box");
let turnO = true;
let count = 0;
let play = document.querySelector(".playgame");
let resetbtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msgg = document.querySelector(".msg");

const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    
    if (turnO) {
      box.innerText = "0";
      turnO = false;
    } else {
      box.innerText = "x";
      turnO = true;
    }
    box.disabled = true;
    count++;
    console.log(count)
    let iswinner = checkwinner();
    if(count===9 && !iswinner){
      gameDraw();
    }
  });
});
const gameDraw = () => {
  msgg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disabledbtn();
};

const checkwinner = () => {
  for (pattern of arr) {
    pos1 = boxes[pattern[0]].innerText;
    pos2 = boxes[pattern[1]].innerText;
    pos3 = boxes[pattern[2]].innerText;
    count =0;
    if ((pos1 != "") & (pos2 != "") & (pos3 != "")) {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
      }
    }

  }
};
const enableboxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabledbtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msgg.innerText = `congratulation,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledbtn();
};
const resetgame = () => {
  turnO = true;
  count= 0;
  enableboxes();
  msgContainer.classList.add("hide");
};

play.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
