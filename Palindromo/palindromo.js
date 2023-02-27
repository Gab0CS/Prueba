const textInput = document.querySelector(".inputs input");
const boton = document.querySelector(".inputs button");
const displayResultado = document.querySelector(".resultado");


boton.addEventListener("click", () =>{
    displayResultado.innerHTML = palindromo(filtro);
});

textInput.addEventListener("keyup", () => {
    filtro = textInput.value;
    if(filtro){
        return boton.classList.add("active");
    }
    boton.classList.remove("active");
});


const palindromo = (frase) =>{
    let reducir = /[^A-Za-z0-9]/g;
    fraseProcesada = frase.toLowerCase().replace(reducir, '');
    let long =  fraseProcesada.length;
    for(let i = 0; i < long / 2; i++){
        if(fraseProcesada[i]!== fraseProcesada[long -1 - i]){
            return 'No es palíndromo';
        }
    }
    return 'Es palíndromo';
};
