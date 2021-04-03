/* PROGRAMACION IMPERATIVA
T2C4 Ejercicios Arrays */

/* Cintia Vettorazzi*/

/*__________EJERCICIO 1__________*/
/*Usando sólo .pop() y .push(), crear una función que reciba un array 
de 4 elementos por parámetro y retorne un array con los elementos 
invertidos en su orden: Ej [1,2,3,4] retorna [4,3,2,1]*/

function invertirArray(arreglo) {
    let arregloInvertido = [];
    
    arregloInvertido.push(arreglo.pop()); //[4] ---> [1,2,3]
    arregloInvertido.push(arreglo.pop()); //[4,3] ---> [1,2]
    arregloInvertido.push(arreglo.pop()); //[4,3,2] ---> [1]
    arregloInvertido.push(arreglo.pop()); //[4,3,2,1] ---> []

    return arregloInvertido;
}
let numeros = [1, 2, 3, 4];
console.log("__________EJERCICIO 1__________");
console.log("Array original: ");
console.log(numeros);
console.log("Array invertido: ");
console.log(invertirArray(numeros));


/*__________EJERCICIO 2__________*/
/*Crear una función que recibe un array de 4 elementos con números 
enteros y devuelve uno que contenga sólo los números pares, 
si los hubiera. Ej [1,2,3,4] retorna [2,4]*/

//con indices y arreglo auxiliar
function arrayPares(arreglo) {
    let arregloAuxiliar = [];

    if (arreglo[0] % 2 == 0) {
        arregloAuxiliar.push(arreglo[0]); //pusheo el primer elemento del arreglo si es par
    }
    if (arreglo[1] % 2 == 0) {
        arregloAuxiliar.push(arreglo[1]); //pusheo el segundo elemento del arreglo si es par
    }
    if (arreglo[2] % 2 == 0) {
        arregloAuxiliar.push(arreglo[2]); //pusheo el tercer elemento del arreglo si es par
    }
    if (arreglo[3] % 2 == 0) {
        arregloAuxiliar.push(arreglo[3]); //pusheo el cuarto elemento del arreglo si es par
    }
    return arregloAuxiliar;
}
numeros = [1, 2, 3, 4];
console.log("__________EJERCICIO 2__________");
console.log("__con indice y array auxiliar__");
console.log("Array original: ");
console.log(numeros);
console.log("Array con pares: ");
console.log(arrayPares(numeros));

//con .pop() y .unshift()
function arrayPares2(arreglo) {
    let aux = arreglo.pop();
    if (aux % 2 == 0) {
        arreglo.unshift(aux); //pongo adelante del arreglo el ultimo elemento del arreglo si es par
    }
    aux = arreglo.pop();
    if (aux % 2 == 0) {
        arreglo.unshift(aux); //pongo adelante del arreglo el ultimo elemento del arreglo si es par
    }
    aux = arreglo.pop();
    if (aux % 2 == 0) {
        arreglo.unshift(aux); //pongo adelante del arreglo el ultimo elemento del arreglo si es par
    }
    aux = arreglo.pop();
    if (aux % 2 == 0) {
        arreglo.unshift(aux); //pongo adelante del arreglo el ultimo elemento del arreglo si es par
    }
    return arreglo;
}
numeros = [1, 2, 3, 4];
console.log("__________EJERCICIO 2__________");
console.log("____con .pop() y .unshift()____");
console.log("Array original: ");
console.log(numeros);
console.log("Array con pares: ");
console.log(arrayPares2(numeros));

/*__________EJERCICIO 3__________*/
/*Crear una función que recibe 2 parámetros, un texto con
un tipo de dato de JS y un array de 4 elementos; retorna 
un booleano que indica si todos los elementos son del tipo 
de dato que se envió por parámetro. 
Ej: tipoArray(“number”, [1,2,3,4]) retorna true; 
tipoArray(“number”, [1,2,”hola”,4]) retorna false*/

function tipoArray(tipo, arreglo) {         //tipo --> "number" o "string" o "boolean" u "object"
    //si algun elemento del arreglo no coincide con el tipo pedido retorna "false"
    if (tipo != typeof(arreglo[0])) {
        return false;
    }
    if (tipo != typeof(arreglo[1])) {
        return false;
    }
    if (tipo != typeof(arreglo[2])) {
        return false;
    }
    if (tipo != typeof(arreglo[3])) {
        return false;
    }
    //si todos los elementos del arreglo coinciden con el tipo pedido, retorna "true"
    return true;
}

let array1 = [1, 2, 5, 4];                  //"number" --> true
let array2 = ["a", "b", "c", "d"];             //"string" --> true
let array3 = [true, true, false, false];       //"boolean" --> true
let array4 = [[1], ["hola"], [5], [true]];  //"object" --> true
let array5 = [1, 2, "hola", 5];                //"number" --> false

console.log("__________EJERCICIO 3__________");
console.log("number --> ", array1);
console.log(tipoArray("number", array1));   //true
console.log("string --> ", array2);
console.log(tipoArray("string", array2));   //true
console.log("boolean --> ", array3);
console.log(tipoArray("boolean", array3));  //true
console.log("object --> ", array4);
console.log(tipoArray("object", array4));   //true
console.log("number --> ", array5);
console.log(tipoArray("number", array5));   //false

/*__________EJERCICIO 4__________*/
/* Crear una función que recibe un array con números enteros 
y devuelve uno que contenga la suma acumulada de todos sus 
números. Usar la función tipoArray para validar que el array 
es de números, en caso que no, salir de la función antes de 
acumular con el mensaje "Error: array corrupto"*/

function sumaArray(arreglo) {
    let arrayAuxiliar = [];
    if (tipoArray("number", arreglo)) {       //valido que el arreglo sea de numeros
        arrayAuxiliar.push(arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3]);    //pusheo la suma de los elementos del arreglo
        return arrayAuxiliar;
    } else {
        return "Error: array corrupto";     //hay elementos que no son numeros en el arreglo
    }
}

console.log("__________EJERCICIO 4__________");
console.log("Array --> ", array1);
console.log(sumaArray(array1));   //12
console.log("Array --> ", array2);
console.log(sumaArray(array2));   //Error: array corrupto
console.log("Array --> ", array3);
console.log(sumaArray(array3));   //Error: array corrupto
console.log("Array --> ", array4);
console.log(sumaArray(array4));   //Error: array corrupto
console.log("Array --> ", array5);
console.log(sumaArray(array5));   //Error: array corrupto

/*__________EJERCICIO 5__________*/
/*Así como el ejercicio 4 usa dos funciones aquí creadas, 
crear un ejercicio que utilice las 4 funciones aquí creadas. 
Ej función que recibe array, acumula sólo aquellos elementos 
pares y los invierte solo si son números enteros. 
Otro ejemplo puede ser el uso de letras y palabras para 
combinarlas en frase irracionales.*/

/*Función que recibe un array de 4 elementos; verifica que sean todos 
sus elementos de tipo "number". 
-Caso 1: 
        NO todos los elementos del array son de tipo "number", devuelve [0,0,0,0]
-Caso 2:
        TODOS sus elementos son de tipo "number" --> se queda con los pares
        --A) no hay elementos pares, devuelve [0,0,0,0]
        --B) hay un par, devuelve [0,0,0,0]
        --C) hay dos pares
                ---i)el primero es mayor que el último, completa el arreglo con ceros, 
                    lo invierte, lo muestra por pantalla y devuelve otro arreglo con 
                    la suma de sus elementos
                ---ii)el primero es menor o igual que el último, devuelve [0,0,0,0]
        --D) hay tres pares
                ---i)el primero es mayor que el último, completa el arreglo con ceros, 
                    lo invierte, lo muestra por pantalla y devuelve otro arreglo con 
                    la suma de sus elementos
                ---ii)el primero es menor o igual que el último, devuelve [0,0,0,0]
        --E) hay cuatro pares
                ---i)el primero es mayor que el último,lo invierte, lo muestra por 
                    pantalla y devuelve otro arreglo con la suma de sus elementos
                ---ii)el primero es menor o igual que el último, devuelve [0,0,0,0]
EN RESUMEN:
        La funcion devuelve [0,0,0,0] en todos los casos en los cuales no haya elementos
        de tipo "number", no tenga números pares, sólo haya un par o el primer par del 
        array no sea mayor que el ultimo par; en caso contrario, devuelve el arreglo
        de pares invertido y la suma de sus elementos en otro arreglo*/

function ejercicio5(arreglo) {
    let arrayAuxiliar = [];             //declaro un arreglo auxiliar vacio
    if (tipoArray("number", arreglo)) {      //valido si todos los elementos del array son de tipo "number"
        arrayAuxiliar = arrayPares(arreglo);        //se queda sólo con los pares si es que existen
        if (arrayAuxiliar[0] > arrayAuxiliar[arrayAuxiliar.length - 1]) {   //verifico si el primer elemento par es mayor que el último
            if (arrayAuxiliar.length != arreglo.length) {       //completa los lugares que faltan del arrayAuxiliar con ceros si se necesita
                arrayAuxiliar.push(0);
            }
            if (arrayAuxiliar.length != arreglo.length) {       //completa los lugares que faltan del arrayAuxiliar con ceros si se necesita
                arrayAuxiliar.push(0);
            }
            arrayAuxiliar = invertirArray(arrayAuxiliar);       //invierte array de pares
            console.log("Array invertido --> ",arrayAuxiliar);  //muestra el array invertido
            return sumaArray(arrayAuxiliar);
        }
    }
    //el array no tiene todos sus elementos de tipo "number" o no tiene elementos pares o el primer elemento par no es mayor que el último
    if (arrayAuxiliar.length != 0){arrayAuxiliar=[];}       //si el arreglo no esta vacio le saco sus elementos
    arrayAuxiliar.push(0, 0, 0, 0);         //completo con ceros para luego retornarlo
    return arrayAuxiliar;
}
console.log("__________EJERCICIO 5__________");
let arreglo1 = [1,2,3,"hola"];      //NO son todos números 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
//SI son todos numeros
arreglo1 = [1,3,5,7];      //NO hay pares 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [1,2,5,7];      //1 par 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [1,2,4,7];      //2 pares --> ultimo mayor que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [1,2,2,7];      //2 pares --> ultimo igual que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [1,4,2,7];      //2 pares --> ultimo menor que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,2,4] y [2+4]=[6]
arreglo1 = [1,2,4,6];      //3 pares --> ultimo mayor que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [1,2,4,2];      //3 pares --> ultimo igual que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [1,6,4,2];      //3 pares --> ultimo menor que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,2,4,6] y [2+4+6]=[12]
arreglo1 = [2,4,6,8];      //4 pares --> ultimo mayor que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [2,4,6,2];      //4 pares --> ultimo igual que el primero 
console.log(ejercicio5(arreglo1));  // ---> [0,0,0,0]
arreglo1 = [8,6,4,2];      //4 pares --> ultimo menor que el primero 
console.log(ejercicio5(arreglo1));  // ---> [2,4,6,8] y [2+4+6+8]=[20]

