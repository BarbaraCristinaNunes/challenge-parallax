const lake = document.getElementById('lake');
const tadpole = document.getElementById('tadpole');
const sand1 = document.getElementById('sand1');
const sand2 = document.getElementById('sand2');
const fish1 = document.getElementById('fish1');
const fish2 = document.getElementById('fish2');
const dragonfly = document.getElementById('dragonfly');

const positionSand1 = {
     x: 0,
};

const positionSand2 = {
     x: 0,
};

const tadpolePosition = {
     x: 1400,
     y: 0,
};

const dragonflyPosition = {
     x: 0,
     y: 650,
}

const positionFish1 = {
     x: 0,
}

const positionFish2 = {
     x: 0,
}

let types = [];


console.log(tadpolePosition.x);
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
     // console.log(types);
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
     // console.log(types)
})


function moveSand(){
     if(types.includes('ArrowLeft')){
          positionSand1.x += 1;
          document.getElementById('sand1').style.backgroundPositionX = positionSand1.x + "px";
     }
     if(types.includes('ArrowRight')){
          positionSand1.x -= 1;
          document.getElementById('sand1').style.backgroundPositionX = positionSand1.x + "px";
     }
     if(types.includes('ArrowLeft')){
          positionSand2.x += 0.5;
          document.getElementById('sand2').style.backgroundPositionX = positionSand2.x + "px";
     }
     if(types.includes('ArrowRight')){
          positionSand2.x -= 0.5;
          document.getElementById('sand2').style.backgroundPositionX = positionSand2.x + "px";
     }
     // console.log(positionSand2.x + " sand2");
     // console.log(positionSand1.x + " sand1");
}

function MoveFishes(){
     positionFish1.x += 0.4;
     positionFish2.x -= 0.2;

     fish1.style.backgroundPositionX = positionFish1.x + "px";
     fish2.style.backgroundPositionX = positionFish2.x + "px";
}

function moveTadpole(){
     if(types.includes('ArrowLeft') && tadpolePosition.x < 1400){
          tadpolePosition.x += 0.5;
          tadpole.style.right = tadpolePosition.x + "px";
     }
     if(types.includes('ArrowRight') && tadpolePosition.x > 0){
          tadpolePosition.x -= 0.5;
          tadpole.style.right = tadpolePosition.x + "px";
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
          tadpolePosition.y += 0.5;
          tadpole.style.top = tadpolePosition.y + "px";
     }


}


function game(){
     // moveTadpole();
     // moveSand();
     // MoveFishes();
     setTimeout(game, 1);
}
game();