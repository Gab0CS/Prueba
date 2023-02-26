const palindromo = (frase) =>{
    const l =  frase.length;
    for (let i = 0; l / 2; i++){
        if(frase[i] !== frase[l -1 - i]){
            console.log("No es palíndromo");
        }
    }
    console.log("Es palídromo.");
};
