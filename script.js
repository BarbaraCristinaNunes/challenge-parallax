const lake = document.getElementById('lake');
const tadpole = document.getElementById('tadpole');
let types = [];
let x = 1400;
let y = 0;
let right = 0;
let left = 0;

// console.log(x);
// console.log(y);

window.addEventListener('keydown', (e) => {
     
     if(e.key == 'ArrowLeft'){
          types.push(e.key);
     }
     if(e.key == 'ArrowRight'){
          types.push(e.key)
     }
     if(e.key == 'ArrowDown'){
          types.push(e.key)
     }
     if(e.key == 'ArrowUp'){
          types.push(e.key)
     }
     console.log(types);
});

window.addEventListener('keyup', (e) => {
     
     if(e.key == 'ArrowLeft'){
          types.splice('ArrowLeft');
     }
     if(e.key == 'ArrowRight'){
          types.splice('ArrowRight');
     }
     if(e.key == 'ArrowDown'){
          types.splice('ArrowDown');

     }
     if(e.key == 'ArrowUp'){
          types.splice('ArrowUp');
     }
     console.log(types)
})

function game(){
     // moveTadpole();
     moveSand();
     setTimeout(game, 1);
}
game();

function moveSand(){
     if(types.includes('ArrowLeft') && x <= 1400){
          right += 1;
          document.getElementById('sand2').style.backgroundPositionX = right + "px";
     }
     if(types.includes('ArrowRight') && x > 0){
          right -= 1;
          document.getElementById('sand2').style.backgroundPositionX = right + "px";
     }
     if(types.includes('ArrowLeft') && x <= 1400){
          left -= 1;
          document.getElementById('sand1').style.backgroundPositionX = left + "px";
     }
     if(types.includes('ArrowRight') && x > 0){
          left += 1;
          document.getElementById('sand1').style.backgroundPositionX = left + "px";
     }
}
// function moveSand2(){
     
// }



function moveTadpole(){
     if(types.includes('ArrowLeft') && x <= 1400){
          x += 1;
          tadpole.style.right = x + "px";
     }
     if(types.includes('ArrowRight') && x > 0){
          x -= 1;
          tadpole.style.right = x + "px";
     }
     if(types.includes('ArrowDown') && y <= 650){
          y += 1;
          tadpole.style.top = y + "px";
     }
     if(types.includes('ArrowUp') && y > 0){
          y -= 1;
          tadpole.style.top = y + "px";
     }
     if(types.length == 0){
          y += 1;
          tadpole.style.top = y + "px";
     }

     console.log(x);
     console.log(y);

}
// function moveScenary(){

// }
