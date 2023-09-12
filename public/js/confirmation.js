document.addEventListener("DOMContentLoaded", function () {

   
    const nombreInput = document.getElementById("name");

    var nameRecovery = localStorage.getItem('name').toString();
    
     console.log(nameRecovery);

     if (nameRecovery !== null) {
         nombreInput.value = nameRecovery;
     }   

     nombreInput.disabled = true;

     localStorage.removeItem('name');

     const numBurbujas = 10; 
     const bubbleContainer = document.querySelector('.bubble-container');


function eliminarYCrearBurbuja(burbuja) {
    burbuja.remove(); 

    
    setTimeout(() => {
        crearBurbuja();
    }, Math.random() * 5000); 
}

function crearBurbuja() {
    const burbuja = document.createElement('div');
    burbuja.classList.add('bubble');

   
    const left = Math.random() * 100;
    burbuja.style.left = `${left}%`;
    burbuja.style.transform = `translateY(100vh)`; 

   
    bubbleContainer.appendChild(burbuja);

   
    burbuja.style.animation = 'moveBubble 5s linear forwards'; 
    burbuja.addEventListener('animationend', () => {
        eliminarYCrearBurbuja(burbuja);
    });
}


for (let i = 0; i < numBurbujas; i++) {
    crearBurbuja();
}
});
