// Add all your JS here
var con = document.querySelector('#container')
var player = "X"
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
    display.innerHTML = `Player ${player}'s turn`;
    player = player == "X"?"O":"X";
    b.innerHTML = player
    b.disabled = true;
    check()
  })
})
function win(x){
  display.innerHTML = `Congratulations,the winner is ${x}`;
  btn.forEach((d)=>{
    d.disabled = true
  })
}
function draw() {
        for (const cell of btn) {
            if (cell.innerHTML === "") {
                return false;
            }
        }
        return true;
    }
function check(){
  for(let pattern of winningCombinations){
   let x = btn[pattern[0]].innerText
   let y = btn[pattern[1]].innerText
   let z = btn[pattern[2]].innerText
   if(x!="" && y!="" && z!="" && x==y && y==z){
     win(x);
     var line = document.querySelector('span')
     var px = pattern[0]
     var py = pattern[1]
     var pz = pattern[2]
     if(py==4){
       let an = (px+1)*45
       line.style.cssText = 'bottom:50%; transform:rotate('+an+'deg);'
     }
     else if(px==0){
       line.style.cssText = pz==6?'transform:rotate(90deg);left:-13vw;top:50%':'top:6vw'
     }
     else if(pz==8){
       line.style.cssText = px==2?'transform:rotate(90deg);right:-13vw;bottom:50%':'bottom:6vw'
     }
     return;
   }
   else if(draw()){
     display.innerHTML = "draw"
   }
  }
}
//reset....
function restart(){
  btn.forEach((c)=>{
    c.innerHTML = "";
    c.disabled = false;
    var line = document.querySelector('span')
    line.style.cssText = 'bottom:13vw; transform:rotate(0deg);'
  })
  display.innerHTML = "Player O's turn";
}
let reset = document.querySelector('.reset')
reset.addEventListener('pointerdown',()=>{
  reset.style.backgroundColor = "darkred";
  restart();
})
reset.addEventListener('pointerup',()=>{
  reset.style.backgroundColor = "crimson";
})
reset.addEventListener('pointerleave',()=>{
  reset.style.backgroundColor = "crimson";
})
