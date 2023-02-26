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
