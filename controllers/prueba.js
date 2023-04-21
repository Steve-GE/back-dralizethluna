// // Arreglo proporcionado.
// const arreglo = [4, 5, 2, 4, 5, 9, 9, 4, 4];

// // Funcion para detectar si un número se repite.
// function contiene(arr, num_detectar, min_repeticiones){
    
//     // Inicializamos contador.
//     let contador = 0; 
    
//     for(let i = 0; i < arr.length; i++){
        
//         // Cehcamos si el arreglo en la posicion[i] es igual al numero a detectar.
//         if (arreglo[i] === num_detectar){
//             contador++; //Sumamos uno al contador.
            
//             // Si el contador es mayor o igual al minimo de repeticiones debe devolver un true.
//             if(contador >= min_repeticiones){
//                 return true;
//             }
//         }
//     }
    
//     // Si no se cumplen las condiciones, debe devolver un false. 
//     return false;
    
// }

// // Pruebas.
// console.log('Regresa: ', contiene(arreglo,4,5));
// console.log('Regresa: ', contiene(arreglo,4,4));
// console.log('Regresa: ', contiene(arreglo,4,3));
// console.log('Regresa: ', contiene(arreglo,9,2));







/* // Funcion para detectar la mayor diferencia entre cualquier par de números.
function mayorDiferencia(arr){
    
    // Iniciamos un minimo y un maximo en la posicion 0 del arreglo.
    let arr_min = arr[0];
    let arr_may = arr[0];
    
    // Iniciamos en la posicion 1 para recorrer el arreglo.
    for(let i = 1; i < arr.length; i++){
        
        // Si el arreglo en la posicion[i] NO es mayor, le asignmos el valor a arr_min.
        if(arr[i] < arr_min){
            arr_min = arr[i];
        }
        // Si el arreglo en la posicion[i] SI es mayor, le asignamos el valor a arr_may.
        else if(arr[i] > arr_may){
            arr_may = arr[i];
        }
    }
    
    // Restamos el mayor obtenido con el menor obtenido.
    return  arr_may - arr_min;
    
}


console.log(mayorDiferencia( [ 1, 1, 4 ])) // 3
console.log(mayorDiferencia( [ 9, 8 ])) // 1
console.log(mayorDiferencia( [ 6, 22, 16, 29, 23 ])) // 23
console.log(mayorDiferencia( [ 28, 16, 28, 11, 14, 26, 23, 25, 17, 3, 22, 23, 23, 10 ])) // 25 */



function mismaDiferencia(arr) {
 
    // Si el arreglo solo tiene dos elementos es verdadero
    if(arr.length == 2){
        return true;
    }

    // Restamos la segunda posicion menos la primera posición
    let diff = arr[1] - arr[0];
    
    if(!Number.isInteger(diff)){
        diff = diff.toFixed(1);
    }
    
    // Convertimos valores negativos a positivos
    if(diff < 0){
        diff = -diff;
        diff = parseFloat(diff.toFixed(1));
    }

    // Probamos si los pares tienen la misma diferencia 
    for (let i = 2; i < arr.length; i++) {

        let x = arr[i] - arr[i-1];
        // convertimos a positivos
        if(!Number.isInteger(x)){
            x = x.toFixed(1);
        }else     
        if(x < 0){
            x =-x;
            x = parseFloat(x.toFixed(1))
        }

      if (x !== diff) {
        return false;
      }
    }
  
    // Todos tienen la misma diferencia
    return true;
  }


console.log(mismaDiferencia([ 1, 3, 5 ])); // true
console.log(mismaDiferencia([ 194, 54, 23, 7, 3, 6, 8 ])); // false
console.log(mismaDiferencia([44, 37, 30, 23 ])); // true
console.log(mismaDiferencia([ -2.3, -1.1, 0.1, 1.3, 2.5, 3.7 ])); // true
console.log(mismaDiferencia([ 1, 8 ])); // true
console.log(mismaDiferencia([ 3, 2, 1, 2, 3, 4, 3])); // true


// console.log(mismaDiferencia([ -4, -2, 0, 2 ])); // true