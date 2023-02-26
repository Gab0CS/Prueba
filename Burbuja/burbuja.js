const burbuja = (arr) =>{
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
    console.log(arr);
};