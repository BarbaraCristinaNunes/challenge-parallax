const lake = document.getElementById('lake');
const tadpole = document.getElementById('tadpole');
let types = [];

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
     if(e.key == 'ArrowTop'){
          types.push(e.key)
     }
     console.log(types);
});

