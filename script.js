

// //  let boxes= document.querySelectorAll(".box");
// let resetBtn= document.querySelector(".reset-btn");
//   let newGameBtn = document.querySelector(".newGame");
//   let msgcontainer = document.querySelector(".msg-container");
//   let msg= document.querySelector(".msg");
// let turnO = true;






//  //  // here we use arrays to store the wining patern in 2D
// //  // means arrays under arrays  -ex- 
// //  let arr1= ["hii", "hlw"]
// //  let arr2 =[ ["hi ", "hlw"],["yogesh", "ramesh"]];
// //  arr1
// // (2) ['hii', 'hlw']
// // arr2
// // (2) [Array(2), Array(2)]0: (2) ['hi ', 'hlw']1: (2) ['yogesh', 'ramesh']length: 2[[Prototype]]: Array(0)
// // arr2[0]
// // (2) ['hi ', 'hlw']
// // arr2[0][0]
// // 'hi '


// const winPatters = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];


// const boxes = document.querySelectorAll('.box'); // Select all elements with class "box"
// boxes.forEach((box) => {
//   box.addEventListener('click', () => {
   
//     if(turnO===true){
//         box.innerHTML="O";
//         turnO=false;
//     }
//     else{
//         box.innerHTML="X"
//         turnO=true;
//     }
//     box.disabled=true;
//    checkWinner();
//   });
// });
// resetBtn.addEventListener("click", ()=>{

// }
// );

// showWinner=(winner)=>{
//  msg.innerText = `Congratulations, winner is ${winner}`;
//  msgcontainer.classList.remove( "hide");
// };

// // for getting the winner we have to use for-of loop 
//   const checkWinner=()=>{
// for(let pattern of winPatters){
//     // console.log(pattern[0], pattern[1],pattern[2],)
//     // console.log(
        
//     //      boxes[pattern[1]].innerText,
//     //      boxes[pattern[2]].innerText
//     //     );
//         let pos1val=boxes[pattern[0]].innerText;
//         let pos2val=boxes[pattern[1]].innerText;
//         let pos3val=boxes[pattern[2]].innerText;

//         if(pos1val !=""&& pos2val !=""&& pos3val !=""){
//             if(pos1val===pos2val && pos1val===pos3val){
//                console.log("winner is-",pos1val)
//                showWinner(pos1val);
//             }
//         }

// };
//   };

document.addEventListener('DOMContentLoaded', () => {
    let turnO = true;
    const boxes = document.querySelectorAll('.box');
    const resetBtn = document.querySelector('.reset-btn');
    const newGameBtn = document.querySelector('.newGame');
    const msgContainer = document.querySelector('.msg-container');
    const msg = document.querySelector('#msg');

    const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    boxes.forEach((box, index) => {
      box.addEventListener('click', () => {
        if (turnO === true) {
          box.innerHTML = "O";
          turnO = false;
        } else {
          box.innerHTML = "X";
          turnO = true;
        }
        box.classList.add('disabled');
        checkWinner();
      });
    });

    resetBtn.addEventListener('click', () => {
      boxes.forEach((box) => {
        box.innerHTML = "";
        box.classList.remove('disabled');
      });
      turnO = true;
      msgContainer.classList.add('hide');
    });

    newGameBtn.addEventListener('click', () => {
      location.reload();
    });

     
      
      const showWinner = (winner) => {
        console.log(`Showing winner: ${winner}`); // Debug log
        msg.innerText = `Congratulations🤗, winner is ${winner}👑`;
        msgContainer.classList.remove('hide');
      };
      
      const checkWinner = () => {
        for (let pattern of winPatterns) {
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;
      
          if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos1val === pos3val) {
              console.log("winner is-", pos1val);
              showWinner(pos1val);
              boxes.forEach((box) => {
                box.classList.add('disabled');
              });
              break;
            }
          }
        }
      };
      
  });