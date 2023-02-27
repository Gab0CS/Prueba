const arrInput = document.querySelector(".inputs input");
const boton = document.querySelector(".inputs button");
const displayResultado = document.querySelector(".resultado");
let filtro;

boton.addEventListener("click", () =>{
    displayResultado.innerHTML = burbuja(filtro);
    console.log(typeof(filtro));
});

arrInput.addEventListener("keyup", () => {
    filtro = arrInput.value;
    if(filtro){
        return boton.classList.add("active");
    }
    boton.classList.remove("active");
});


const burbuja = (arrayFalso) =>{
    arr = JSON.parse(arrayFalso);
    const len =  arr.length;
    for(let i = 1; i < len; i++){
        for(let j = 0; j < (len - i); j++){
            if(arr[j] > arr[j + 1]){
                let aux = arr[j]; 
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;
            }
        }
    }
    return arr;
};

