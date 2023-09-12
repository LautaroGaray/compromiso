document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const confirmarButton = document.getElementById("confirmar");

    confirmarButton.addEventListener("click", function () {
        const nombre = nombreInput.value;
        if (nombre) {
            enviarCorreo(nombre);     
            Redirect(nombre);

        } else {
            alert("Por favor, ingresa tu nombre antes de confirmar tu asistencia.");
        }
    });

window.history.pushState(null, null, window.location.href);
window.addEventListener('popstate', function(event) {
    window.history.pushState(null, null, window.location.href);
});
    
function Redirect(name){
    try{
      localStorage.setItem('name', name);
      window.location.href ='/Confirmation';
    }catch(err){
       console.log(err);
    }
};

     function enviarCorreo(name) {

        let obj = {
            nombre : name
        }
       
        try {
            
           fetch('/PostMail', {
            method:'POST',
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/json"
            }

           
        }).then(response => response.json()
            ).then(data => {
                console.log(data);
            });
           
        } catch (error) {
           console.log(error);
        }
        nombreInput.value = "CONFIRMADO";
        confirmarButton.disabled = true;     
        setTimeout(function () {
            confirmarButton.disabled = false;
        }, 5000); 
        
        alert('Confirmación de: '+name, 'enviada');      
       
    }
    
   
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
