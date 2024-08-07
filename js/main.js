// Add all your JS here
var con = document.querySelector('#container')
var turn = true;
let html = `<button class="btn"></button>`
for(i=1;i<10;i++){
con.innerHTML += html
}
const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
var btn = document.querySelectorAll('.btn');
var display = document.querySelector('h3')
btn.forEach((b)=>{
  b.addEventListener('click',function click(){
    if(turn == true){
      b.innerHTML = "O";
      turn = false;
      display.innerHTML = "Player X's turn";
    }
    else{
      b.innerHTML = "X";
      turn = true;
      display.innerHTML = "Player O's turn";
    }
    b.disabled = true;
  })
})
function rt(){
  btn.forEach((c)=>{
    c.innerHTML = "";
    c.disabled = false;
  })
  turn = true;
  display.innerHTML = "Player O's turn";
}
let reset = document.querySelector('.reset')
reset.addEventListener('pointerdown',()=>{
  reset.style.backgroundColor = "darkred";
  rt();
})
reset.addEventListener('pointerup',()=>{
  reset.style.backgroundColor = "crimson";
})
reset.addEventListener('pointerleave',()=>{
  reset.style.backgroundColor = "crimson";
})
