// I have a variable to each div that I have in my html
const lake = document.getElementById('lake');

const tadpole = document.getElementById('tadpole');

const sand1 = document.getElementById('sand1');

const sand2 = document.getElementById('sand2');

const fish1 = document.getElementById('fish1');

const fish2 = document.getElementById('fish2');

const main = document.getElementById('main');

let dragonfly = document.getElementsByClassName('dragonfly');

//  I have an object for each layer to work with the positions of them
const positionSand1 = {
     x: 0,
};
const positionSand2 = {
     x: 0,
};
const positionFish1 = {
     x: 0,
};
const positionFish2 = {
     x: 0,
};
const tadpolePosition = {
     x: 0,
     y: 0,
};
const dragonflyPosition = {
     x: 0,
};
let types = [];

const d = new Date();
let seconds = d.getSeconds();

console.log(seconds);

/* With this event I know what the user is typing and setting this information in the array called types
I use this information to make the tadpole moving 
*/

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
});

/* With this event I know when the user stops typing the keyboard and I remove the information about 
the key form the array called types. So the tadpole stops the move
*/

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
})

// This function is responsible for the movement of the layer that has the sand

function moveSand(){

     if(types.includes('ArrowLeft')){
          positionSand1.x += 1.5;
          document.getElementById('sand1').style.backgroundPositionX = positionSand1.x + "px";
     }
     if(types.includes('ArrowRight')){
          positionSand1.x -= 1.5;
          document.getElementById('sand1').style.backgroundPositionX = positionSand1.x + "px";
     }
     if(types.includes('ArrowLeft')){
          positionSand2.x += 1;
          document.getElementById('sand2').style.backgroundPositionX = positionSand2.x + "px";
     }
     if(types.includes('ArrowRight')){
          positionSand2.x -= 1;
          document.getElementById('sand2').style.backgroundPositionX = positionSand2.x + "px";
     }

}

// This function is responsible for the movement of the layers that has the fishes

function MoveFishes(){
     positionFish1.x += 0.4;
     positionFish2.x -= 0.3;

     fish1.style.backgroundPositionX = positionFish1.x + "px";
     fish2.style.backgroundPositionX = positionFish2.x + "px";
}

// This function is responsible for the movement of the layer that has the tadpole

function moveTadpole(){
     if(types.includes('ArrowLeft') && tadpolePosition.x > 0){
          tadpolePosition.x -= 0.5;
          tadpole.style.left = tadpolePosition.x + "px";
     }
     if(types.includes('ArrowRight') && tadpolePosition.x < 1400){
          tadpolePosition.x += 0.5;
          tadpole.style.left = tadpolePosition.x + "px";
     }
     if(types.includes('ArrowDown') && tadpolePosition.y < 650){
          tadpolePosition.y += 0.5;
          tadpole.style.top = tadpolePosition.y + "px";
     }
     if(types.includes('ArrowUp') && tadpolePosition.y > 0){
          tadpolePosition.y -= 0.5;
          tadpole.style.top = tadpolePosition.y + "px";
     }
     if(types.length == 0 && tadpolePosition.y < 650){
          tadpolePosition.y += 0.2;
          tadpole.style.top = tadpolePosition.y + "px";
     }
}

// This function is responsible for create a new div where there will be a dragonfly layer

function createDrangofly() {

     let dragonfly = document.createElement('div');
     dragonfly.classList.add('dragonfly');
     main.appendChild(dragonfly);
     createDragonflyStyle(dragonfly);
}

// This function is responsible for remove the div whose dragonfly completed the course in the page 

function removeDragonfly() {

     for(i = 0; i < dragonfly.length; i++){
          if(dragonfly[i].offsetLeft < 0){
               dragonfly[i].remove();
          }
     }
}

// This function is responsible for create a style to the new div which was created by the function createDrangofly()

function createDragonflyStyle(div){

     let position = Math.floor(Math.random() * (650 - 0) + 1);
     div.style.top = position + "px";
     div.style.right = 0 + "px";     

}

// This function is responsible for the movement of the layers that have the dragonfly

function moveDragonfly() {

     for(i = 0; i < dragonfly.length; i++){
          dragonflyPosition.x = dragonfly[i].offsetLeft;
          dragonflyPosition.x -= 2;
          dragonfly[i].style.left = dragonflyPosition.x + "px";
     }     
}


// function collision() {
     
//      for(i = 0; i < dragonfly.length; i++){
//           console.log(dragonfly[i].offsetLeft);
//      }
// }

function evolution() {
     console.log(seconds);
     if(seconds == 1){
          tadpole.style.backgroundImage = "url('img/tadpole-evolution-1.png')";
     }
     if(seconds == 15){
          tadpole.style.backgroundImage = "url('img/tadpole-evolution-2.png')";
     }
     if(seconds == 20){
          tadpole.style.backgroundImage = "url('img/tadpole-evolution-3.png')";
          tadpole.style.width = 200 + "px";
          tadpole.style.height = 100 + "px";
     }

}


function call(){
     createDrangofly();
     setTimeout(call, 9000);
}
call()

function test(){
     moveDragonfly()
     setTimeout(test, 1)
}
test();

function game(){
     moveTadpole();
     removeDragonfly()
     moveSand();
     MoveFishes();
     // collision() 
     evolution()
     setTimeout(game, 1);
}
game();