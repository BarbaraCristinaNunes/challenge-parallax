class Tadpole 
{
    #positionX = 0;
    #positionY = 0;
    #evolution = ['img/tadpole-left.png', 'img/tadpole-evolution-1.png', 'img/tadpole-evolution-2.png', 'img/tadpole-evolution-3.png'];
    #dead = false;

    constructor(){

    }

    moveLeft(){

        if(this.#positionX > 0){
            this.#positionX -= 0.5;
            return this.#positionX;
        }
    }

    moveRight(){
        if(this.#positionX < 1400){
            this.#positionX += 0.5;
            return this.#positionX;
        }
    }

    moveDown(){
        if(this.#positionY < 650){
            this.#positionY += 0.5;
            return this.#positionY;
        }
    }

    moveUp(){
        if(this.#positionY > 0){
            this.#positionY -= 0.5;
            return this.#positionY;
        }
    }

    noMove(){
        this.#positionY += 0.2;
        return this.#positionY;
    }

    deadStatus(status){
        this.#dead = status;
        return this.#dead;
    }

    tadpolEvolution(index){
        return this.#evolution[index];
    }
}

let tadpoleObject = new Tadpole();

// I have a variable to each div that I have in my html
const lake = document.getElementById('lake');

const tadpole = document.getElementById('tadpole');
tadpole.style.backgroundImage = "url('" + tadpoleObject.tadpolEvolution(0) + "')";

const sand1 = document.getElementById('sand1');

const sand2 = document.getElementById('sand2');

const fish1 = document.getElementById('fish1');

const fish2 = document.getElementById('fish2');

const main = document.getElementById('main');

const progressBar = document.getElementById('progress');

const message = document.getElementById('message');

let dragonfly = document.getElementsByClassName('dragonfly');

let dead  = false;

//  I have an object for each layer to work with the positions of them
let positionSand1 = {
     x: 0,
};
let positionSand2 = {
     x: 0,
};
let positionFish1 = {
     x: 0,
};
let positionFish2 = {
     x: 0,
};

let dragonflyPosition = {
     x: 0,
};
let types = "";
// let seconds = 0;

// console.log(seconds);

/* With this event I know what the user is typing and setting this information in the array called types
I use this information to make the tadpole moving 
*/

window.addEventListener('keydown', (e) => {
     
     if(e.key == 'ArrowLeft'){
          types = 'ArrowLeft';
     }
     if(e.key == 'ArrowRight'){
          types = 'ArrowRight';
     }
     if(e.key == 'ArrowDown'){
          types = 'ArrowDown';
     }
     if(e.key == 'ArrowUp'){
          types = 'ArrowUp';
     }
});

/* With this event I know when the user stops typing the keyboard and I remove the information about 
the key form the array called types. So the tadpole stops the move
*/

window.addEventListener('keyup', (e) => {
     
     if(e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'ArrowDown' || e.key == 'ArrowUp'){
          types = "";
     }
})

// This function is responsible for the movement of the layer that has the sand

function moveSand(){

     if(types == 'ArrowLeft'){
          positionSand1.x += 1.5;
          document.getElementById('sand1').style.backgroundPositionX = positionSand1.x + "px";
     }
     if(types == 'ArrowRight'){
          positionSand1.x -= 1.5;
          document.getElementById('sand1').style.backgroundPositionX = positionSand1.x + "px";
     }
     if(types == 'ArrowLeft'){
          positionSand2.x += 1;
          document.getElementById('sand2').style.backgroundPositionX = positionSand2.x + "px";
     }
     if(types == 'ArrowRight'){
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
     if(types == 'ArrowLeft'){
          tadpole.style.left = tadpoleObject.moveLeft() + "px";
     }
     if(types == 'ArrowRight'){
          tadpole.style.left = tadpoleObject.moveRight() + "px";
     }
     if(types == 'ArrowDown'){
          tadpole.style.top = tadpoleObject.moveDown() + "px";
     }
     if(types == 'ArrowUp'){
          tadpole.style.top = tadpoleObject.moveUp() + "px";
     }
     if(types == ""){
          tadpole.style.top = tadpoleObject.noMove() + "px";
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

     for(let i = 0; i < dragonfly.length; i++){
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

     for(let i = 0; i < dragonfly.length; i++){
          dragonflyPosition.x = dragonfly[i].offsetLeft;

          if(types == 'ArrowRight'){
               dragonflyPosition.x -= 2.5;
               dragonfly[i].style.left = dragonflyPosition.x + "px";
          }else{
               dragonflyPosition.x -= 2;
               dragonfly[i].style.left = dragonflyPosition.x + "px";     
          }
     }     
}


function collision() {
     for(let i = 0; i < dragonfly.length; i++){

          if(
               !(tadpole.offsetLeft + 100 < dragonfly[i].offsetLeft || 
               tadpole.offsetTop + 50 < dragonfly[i].offsetTop ||
               tadpole.offsetLeft > dragonfly[i].offsetLeft + 100 ||
               tadpole.offsetTop > dragonfly[i].offsetTop + 45)
          ){
               message.innerHTML = "<h1> You died! </h1> <p>You survived for "+ progressBar.value +" seconds";
               dead = true;
          }               
     }
}

function evolution() {
     // console.log(seconds);
     if(progressBar.value == 30){
          tadpole.style.backgroundImage = "url('" + tadpoleObject.tadpolEvolution(1) + "')";
     }
     if(progressBar.value == 60){
          tadpole.style.backgroundImage = "url('" + tadpoleObject.tadpolEvolution(2) + "')";
     }
     if(progressBar.value == 90){
          tadpole.style.backgroundImage = "url('" + tadpoleObject.tadpolEvolution(3) + "')";
          tadpole.style.width = 200 + "px";
          tadpole.style.height = 100 + "px";
     }
}

function countSurvivalTime(){

     if(progressBar.value == 100){
          progressBar.value = 0;
     }else{
          progressBar.value += 1 ;
     }
     // console.log(progressBar.value);
}


function game(){
     createDrangofly();
     countSurvivalTime();
     if(dead !== true){
          console.log(dead);
          setTimeout(game, 1000);
     }     
}
game();

function landscapeMoves(){     
     removeDragonfly()
     moveSand();
     MoveFishes();
     collision();
     setTimeout(landscapeMoves, 1);  
}
landscapeMoves();

function animalsMoves(){
     moveDragonfly();
     moveTadpole();
     evolution();
     if(dead !== true){
          console.log(dead);
          setTimeout(animalsMoves, 1);
     }     
}
animalsMoves();

document.getElementById("restart").addEventListener("click", restartGame);

function restartGame(){
     location.reload();
}
