// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//& lista de los nombres 

let listaAmigos = [];

//& esta funcion se encargada de agregar los nombres 
function agregarAmigo(){
    let campoAmigo = document.getElementById('amigo');
    amigo = campoAmigo.value.trim();

     validarEntrada();

        listaAmigos.push(amigo);
        alert('Nombre ingresado con exito');
    
        visualizarLista();
  //& permite mostrar los campos.       
        campoAmigo.value = "";
        campoAmigo.focus();

};
//&  valida la entrada  de informacion devolviendo un mensaje si el campo de texto esta vacio
     
function validarEntrada(){    
      if ( amigo  === "") {
        alert(" Campo invalido por favor ingresar un nombre valido");
        return;
     }
};

//& muestra la lista en la pantalla 

function visualizarLista() {
   let lista = document.getElementById('listaAmigos');
//& vacia el campo de ingreso de informacion:
    lista.innerHTML = "";


listaAmigos.forEach(amigo => {
    let li = document.createElement('li');
    li.className = 'amigo';
    li.textContent = amigo;
    lista.appendChild(li);
    
});

};

function sortearAmigo(){  
    //& verifica si hay nombres ingresados
      if (listaAmigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
      }

      let sorteoAleatoria = Math.floor(Math.random() * listaAmigos.length);
      let amigoSeleccionado = listaAmigos[sorteoAleatoria];

       let resultado = document.getElementById("resultado");
       resultado.innerHTML = ""; //& limpia el resultado 

       let resul = document.createElement("li");
       resul.textContent = `El amigo sorteado es: ${amigoSeleccionado}`;
       resultado.appendChild(resul);
       noRepetirAmigo();
      
       return;
    };

    //& funcion que ayuda aque no se repitan los nombres.

  function noRepetirAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado = listaAmigos[indiceAleatorio];

//& Eliminarlo de la lista para que no se repita
    listaAmigos.splice(indiceAleatorio, 1);
    
  }
