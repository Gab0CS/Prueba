const palindromo = (frase) =>{
    const longitud =  frase.length();
    for (let i = 0; longitud / 2; i++){
        resta = longitud -1 - i;
        if(frase(i) !== frase[longitud - resta])
            return "No es palíndromo.";
    }
    return "Es palíndromo"
};
