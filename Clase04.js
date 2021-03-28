/* PROGRAMACION IMPERATIVA
T2C4 Control de Flujo */

/* Cintia Vettorazzi*/

//CONSIGNA if ternario

/*Semaforo peatonal*/
//supondremos que los colores ingresados son rojo y blanco (ya que solamente se pide validar dos opciones, sin considerar que la respuesta sea incorrecta)

//if ternario
function semaforoPeatonal (color){
    color=color.toUpperCase();
    return (color==="ROJO")? "No avanzo" : "Avanzo";
}
console.log("__________SEMAFORO__________");
console.log("-----if ternario-----");
console.log(semaforoPeatonal("rojo"));    //v
console.log(semaforoPeatonal("blanco"));    //f

/*Mayor de edad*/

//if ternario
function mayorEdad (edad){
    return (edad<21)? "Menor de edad" : "Mayor de edad";
}
console.log("__________Mayor de Edad__________");
console.log("-----if ternario-----");
console.log(mayorEdad(5));    //menor
console.log(mayorEdad(33));    //mayor


//EJERCICIOS EXTRA - Control de flujos

/*EJERCICIO NUMERO 1 
Funcion que retorna "true" si un valor pasado como parametro es par, o "false" si es impar*/

//if comun
function esPar1(num) {
    return (num % 2) === 0;
}
//if ternario
function esPar2(num) {
    return (num % 2) === 0 ? true : false;
}
console.log("__________EJERCICIO 1__________");
console.log("-----if comun-----");
console.log(esPar1(20));    //v
console.log(esPar1(19));    //f
console.log("-----if ternario-----");
console.log(esPar2(20));    //v
console.log(esPar2(19));    //f

/*EJERCICIO NUMERO 2
Funcion que muestra "barrera arriba" si un vehiculo pago peaje o "barrera abajo" si no pago*/

//if comun
function barrera1(pago) {
    if (pago) {
        return "Barrera arriba";        //ingresa en caso de que "pago" sea true
    }
    return "Barrera abajo"              //se ejecuta en caso de que "pago" sea false
}
//if ternario
function barrera2(pago) {
    return pago ? "Barrera arriba" : "Barrera abajo";
}
console.log("__________EJERCICIO 2__________");
console.log("-----if comun-----");
console.log(barrera1(true));    //v
console.log(barrera1(false));   //f
console.log("-----if ternario-----");
console.log(barrera2(true));    //v
console.log(barrera2(false));   //f

/*EJERCICIO NUMERO 3
Funcion que devuelve "true" o "false" en caso de que un numero pasado como parametro sea igual (o no) a otro numero elegido al azar por la funcion "Math.random()" entre 0 y 10*/
//se utilizara como funcion auxiliar "Math.floor(Math.random() * (max - min)) + min" que genera numeros random entre un max (10) y un min (0)

//if comun
function igual(num) {
    if ((Math.floor(Math.random() * 10)) === num) {
        return "Los numeros son iguales";
    }
    return "Los numeros son diferentes"          //ingresa en caso de que los numeros sean diferentes
}
//if ternario
function igual2(num) {
    return ((Math.floor(Math.random() * 10)) === num) ? "Los numeros son iguales" : "Los numeros son diferentes";
}
console.log("__________EJERCICIO 3__________");
console.log("-----if comun-----");
console.log(igual(0));
console.log("-----if ternario-----");
console.log(igual2(5));

/*EJERCICIO NUMERO 4
Funcion que recibe un dia y un mes e indica si es navidad o no*/
//se valida la posibilidad de que "mes" sea en palabras o numero

//if comun
function navidad(dia, mes) {
    if (dia === 25 && (mes === "12" || mes.toUpperCase() === "DICIEMBRE")) {
        return "Es Navidad";
    }
    return "No es Navidad"          //ingresa en caso de que la fecha no sea Navidad (dia, mes o ambos no sean correctos)
}
//if ternario
function navidad2(dia, mes) {
    return (dia === 25 && (mes === "12" || mes.toUpperCase() === "DICIEMBRE")) ? "Es Navidad" : "No es Navidad";
}
console.log("__________EJERCICIO 4__________");
console.log("-----if comun-----");
console.log(navidad(25, "12"));         //v,v
console.log(navidad(25, "Diciembre"));  //v,v
console.log(navidad(2, "12"));          //f,v
console.log(navidad(2, "DICIEMBRE"));   //f,v
console.log(navidad(25, "1"));          //v,f
console.log(navidad(25, "Enero"));      //v,f
console.log(navidad(5, "1"));           //f,f
console.log(navidad(5, "Enero"));       //f,f
console.log("-----if ternario-----");
console.log(navidad2(25, "12"));        //v,v
console.log(navidad2(25, "Diciembre")); //v,v
console.log(navidad2(2, "12"));         //f,v
console.log(navidad2(2, "DICIEMBRE"));  //f,v
console.log(navidad2(25, "1"));         //v,f
console.log(navidad2(25, "Enero"));     //v,f
console.log(navidad2(5, "1"));          //f,f
console.log(navidad2(5, "Enero"));      //f,f

/*EJERCICIO NUMERO 5
Funcion que recibe un mes e indica cuantos dias tiene*/
//Se considera al mes como string, por lo tanto valido las posibilidades de que sean en numeros o palabras

//Switch
function diasMes(mes) {
    mes = mes.toUpperCase();
    switch (mes) {
        case "1":
        case "01":
        case "ENERO":
        case "3":
        case "03":
        case "MARZO":
        case "5":
        case "05":
        case "MAYO":
        case "7":
        case "07":
        case "JULIO":
        case "8":
        case "08":
        case "AGOSTO":
        case "10":
        case "OCTUBRE":
        case "12":
        case "DICIEMBRE":
            mes = "31 dias";
            break;
        case "FEBRERO":
        case "2":
        case "02":
            mes = "28 o 29 dias"
            break;
        case "ABRIL":
        case "4":
        case "04":
        case "JUNIO":
        case "6":
        case "06":
        case "SEPTIEMBRE":
        case "SETIEMBRE":
        case "9":
        case "09":
        case "NOVIEMBRE":
        case "11":
            mes = "30 dias";
            break;
        default:
            mes = "No es un mes";
    }
    return mes;
}
//if ternario
function diasMes2(mes) {
    mes = mes.toUpperCase();
    switch (mes) {
        case "1":
        case "01":
            mes = "ENERO";
            break;
        case "2":
        case "02":
            mes = "FEBRERO";
            break;
        case "3":
        case "03":
            mes = "MARZO";
            break;
        case "4":
        case "04":
            mes = "ABRIL";
            break;
        case "5":
        case "05":
            mes = "MAYO";
            break;
        case "6":
        case "06":
            mes = "JUNIO";
            break;
        case "7":
        case "07":
            mes = "JULIO";
            break;
        case "8":
        case "08":
            mes = "AGOSTO";
            break;
        case "9":
        case "09":
            mes = "SEPTIEMBRE";
            break;
        case "10":
            mes = "OCTUBRE";
            break;
        case "11":
            mes = "NOVIEMBRE";
            break;
        case "12":
            mes = "DICIEMBRE";
            break;
    }       //realice un switch para hacer mas legible el if ternario
    return (mes === "ENERO" || mes === "MARZO" || mes === "MAYO" || mes === "JULIO" || mes === "AGOSTO" || mes === "OCTUBRE" || mes === "DICIEMBRE") ? "31 dias" : (mes === "ABRIL" || mes === "JUNIO" || mes === "SEPTIEMBRE" || mes === "SETIEMBRE" || mes === "NOVIEMBRE") ? "30 dias" : (mes === "FEBRERO") ? "28 o 29 dias" : "No es un mes";
}
console.log("__________EJERCICIO 5__________");
console.log("-----if comun-----");
console.log(diasMes("2"));
console.log(diasMes("01"));
console.log(diasMes("11"));
console.log(diasMes("FebrerO"));
console.log(diasMes("MARZO"));
console.log(diasMes("abril"));
console.log(diasMes("pepito"));
console.log(diasMes("75"));
console.log("-----if ternario-----");
console.log(diasMes2("2"));
console.log(diasMes2("01"));
console.log(diasMes2("11"));
console.log(diasMes2("FebrerO"));
console.log(diasMes2("MARZO"));
console.log(diasMes2("abril"));
console.log(diasMes2("pepito"));
console.log(diasMes2("75"));


/*EJERCICIO NUMERO 6
Funcion que recibe un valor por parámetro e indica que un alumno recursa si tiene una nota
menor a 4, va a recuperatorio si tiene una nota menor a 7 y aprueba en el caso de que
la nota sea igual o superior a 7.*/
// el rango valido de notas es entre 0 y 10, incluidos los limites

//if comun
function apruebaONo(nota) {
    if (nota >= 7 && nota <= 10) {
        return "Aprueba";
    } else if (nota < 7 && nota >= 4) {
        return "Recupera";
    } else if (nota >= 0 && nota < 4) {
        return "Recursa";
    } else {
        return "No es una nota valida [0-10]";
    }
}
//if ternario
function apruebaONo2(nota) {
    return (nota < 4 && nota >=0) ? "Recursa" : (nota >= 4 && nota < 7) ? "Recupera" : (nota >=7 && nota <= 10)? "Aprueba" : "No es una nota valida [0-10]";   //contemplando que la funcion reciba solamente enteros entre 0 y 10
}
console.log("__________EJERCICIO 6__________");
console.log("-----if comun-----");
console.log(apruebaONo(1));     //Recursa
console.log(apruebaONo(5));     //Recupera
console.log(apruebaONo(8));     //Aprueba
console.log(apruebaONo(15));     //Nota invalida
console.log("-----if ternario-----");
console.log(apruebaONo2(1));        //Recursa
console.log(apruebaONo2(5));        //Recupera
console.log(apruebaONo2(8));        //Aprueba
console.log(apruebaONo2(15));       //Nota invalida

/*EJERCICIO NUMERO 7
Funcion que recibe dos valores por parámetro (altura y velocidad) e indica si una nave espacial puede abrir su paracaidas o no de acuerdo a ellos*/

//if comun
function naveEspacial(altura, velocidad) {
    if ((altura > 2000 && altura < 3000) && velocidad < 1000) {
        return "Abre paracaidas";
    } else {
        return "NO abre paracaidas"
    }
}

//if ternario
function naveEspacial2(altura, velocidad) {
    return ((altura > 2000 && altura < 3000) && (velocidad < 1000)) ? "Abre paracaidas" : "NO abre paracaidas";
}
console.log("__________EJERCICIO 7__________");
console.log("-----if comun-----");
console.log(naveEspacial(2500, 500));       //v,v
console.log(naveEspacial(2500, 1500));      //v,f
console.log(naveEspacial(1500, 1500));      //f,f
console.log(naveEspacial(1500, 500));       //f,v
console.log("-----if ternario-----");
console.log(naveEspacial2(2500, 500));      //v,v
console.log(naveEspacial2(2500, 1500));     //v,f
console.log(naveEspacial2(1500, 1500));     //f,f
console.log(naveEspacial2(1500, 500));      //f,v

/*EJERCICIO NUMERO 8
Funcion que recibe tres booleanos por parámetro e indica el valor final de un sandwich*/

//if comun
function precio(tomate, papa, huevo) {
    let base = 150;     //precio base del sandwich sin nada agregado
    let suma = 0;       //auxiliar suma interna de agregados
    if (tomate && papa && huevo) {
        suma = 20 + 50 + 60;    //agrega tres elementos
    } else {
        if (tomate) {
            if (papa) {
                suma = 20 + 50;     //agrega tomate y papa
            } else {
                if (huevo) {        
                    suma = 20 + 60; //agrega tomate y huevo
                } else {
                    suma = 20;      //agrega solo tomate
                }
            }
        } else {
            if (papa) {
                if (huevo) {
                    suma = 50 + 60; //agrega papa y huevo
                } else {
                    suma = 50;  //solo agrega papa
                }
            } else {
                if (huevo) {    
                    suma = 60;  //agrega solo huevo
                }
            }
        }
    }
    return base + suma;     //en caso de que no agregue nada, la suma sera 0 y solo se cobrara la base
}
//opcion 2 con if comun
function precio3 (tomate,papa,huevo){
    let sumaTomate=0;
    let sumaPapa=0;
    let sumaHuevo=0;
    let base=150;
    if (tomate){
        sumaTomate=20;
    }
    if (papa){
        sumaPapa=50;
    }
    if (huevo){
        sumaHuevo=60;
    }
    return (base+sumaTomate+sumaPapa+sumaHuevo);
}

//if ternario
function precio2(tomate, papa, huevo) {
    return (tomate && papa && huevo) ? 150 + 20 + 50 + 60 : (tomate) ? (papa) ? 150 + 20 + 50 : (huevo) ? 150 + 20 + 60 : 150 + 20 : (papa) ? (huevo) ? 150 + 50 + 60 : 150 + 50 : (huevo) ? 150 + 60 : 150;
}
console.log("__________EJERCICIO 8__________");
console.log("-----if comun-----");
console.log(precio(true, true, true)); //v,v,v    -->280
console.log(precio(false, false, false)); //f,f,f -->150
console.log(precio(true, true, false)); //v,v,f   -->220
console.log(precio(true, false, true)); //v,f,v   -->230
console.log(precio(false, true, true)); //f,v,v   -->260
console.log(precio(true, false, false)); //v,f,f  -->170
console.log(precio(false, false, true)); //f,f,v  -->210
console.log(precio(false, true, false)); //f,v,f  -->200
console.log("-----if comun opcion 2-----");
console.log(precio3(true, true, true)); //v,v,v    -->280
console.log(precio3(false, false, false)); //f,f,f -->150
console.log(precio3(true, true, false)); //v,v,f   -->220
console.log(precio3(true, false, true)); //v,f,v   -->230
console.log(precio3(false, true, true)); //f,v,v   -->260
console.log(precio3(true, false, false)); //v,f,f  -->170
console.log(precio3(false, false, true)); //f,f,v  -->210
console.log(precio3(false, true, false)); //f,v,f  -->200
console.log("-----if ternario-----");
console.log(precio2(true, true, true)); //v,v,v    -->280
console.log(precio2(false, false, false)); //f,f,f -->150
console.log(precio2(true, true, false)); //v,v,f   -->220
console.log(precio2(true, false, true)); //v,f,v   -->230
console.log(precio2(false, true, true)); //f,v,v   -->260
console.log(precio2(true, false, false)); //v,f,f  -->170
console.log(precio2(false, false, true)); //f,f,v  -->210
console.log(precio2(false, true, false)); //f,v,f  -->200

/*CONSIGNA SWITCH
Funcion que recibe por parametro un mes y dice a que estacion pertenece*/
//Los meses de cambio de estacion son considerados casos aparte

//Switch
function mesEstacion(mes) {
    mes = mes.toUpperCase();        //transformo el mes ingresado a mayuscula para hacer menos comprobaciones en caso de diferentes escrituras
    switch (mes) {
        case "ENERO":
        case "FEBRERO":
            mes = "VERANO";
            break;
        case "ABRIL":
        case "MAYO":
            mes = "OTOÑO";
            break;
        case "JULIO":
        case "AGOSTO":
            mes = "INVIERNO";
            break;
        case "OCTUBRE":
        case "NOVIEMBRE":
            mes = "PRIMAVERA";
            break;
        case "SEPTIEMBRE":
        case "SETIEMBRE":
            mes = "INVIERNO/PRIMAVERA";
            break;
        case "DICIEMBRE":
            mes = "PRIMAVERA/VERANO";
            break;
        case "MARZO":
            mes = "VERANO/OTOÑO";
            break;
        case "JUNIO":
            mes = "OTOÑO/INVIERNO";
            break;
        default:
            mes = "ERROR: No corresponde a un mes";     //si el mes no existe o esta mal tipeado
    }
    return mes;
}
console.log("__________EJERCICIO SWITCH__________");
console.log("-----switch-----");
console.log(mesEstacion("Septiembre"));
console.log(mesEstacion("diCiEMbre"));
console.log(mesEstacion("MARZO"));
console.log(mesEstacion("junio"));
console.log(mesEstacion("Octubre"));
console.log(mesEstacion("enerO"));
console.log(mesEstacion("mayo"));
console.log(mesEstacion("JUlIo"));
console.log(mesEstacion("pepito"));