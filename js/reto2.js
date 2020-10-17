const calculadora = document.getElementById('calculadora');
calculadora.addEventListener('click', button_Click);

const textoPantalla = document.getElementById('textoPantalla');
let punto = false;
let numeroPantalla = "0";
let inputIniciado = false;
let numeroReservado = "0";
let operacionTipo = "";

function button_Click(e) {
    e.preventDefault();
    
    if(e.target.value === "1/x") {
        fraccionar();
    }
    else if (!Number.isNaN(parseInt(e.target.value))) {
        agregarNumero(e.target.value);
    }
    else if (e.target.value === "." && punto === false) {
        punto = true;
        agregarNumero(e.target.value);
    }
    else if (e.target.value === "=") {
        igual();
    }
    else if (e.target.value === "CE") {
        limpiarTodo();
    }
    else if (e.target.value === "C") {
        limpiarPantalla();
    }
    else if (e.target.value === "Retr") {
        retroceder();
    }
    else if(e.target.value === "+/-") {
        invertirValor();
    }
    else if(e.target.value === "%") {
        porcentaje();
    }
    else if(e.target.value === "Raiz") {
        raiz();
    }
    else if(e.target.value === "Potencia") {
        potencia();
    }
    else {
        operacion(e.target.value);
    }
}

function agregarNumero(tecla) { 
    if (inputIniciado) {
        numeroPantalla += tecla;
    }
    else {
        inputIniciado = true;
        numeroPantalla = (tecla === "." ? "0" : "") + tecla;
    }
    textoPantalla.innerHTML = numeroPantalla;
}

function limpiarTodo() {
    numeroReservado = "0";
    operacionTipo = "";
    limpiarPantalla();
}

function limpiarPantalla() {
    numeroPantalla = "0";
    inputIniciado = false;
    textoPantalla.innerHTML = numeroPantalla;
}	

function retroceder() {
    if (inputIniciado) {
        if (numeroPantalla.substring(numeroPantalla.length - 1) === ".") {
            punto = false;
        }
        numeroPantalla = (numeroPantalla.length > 1 ? numeroPantalla.substring(0, numeroPantalla.length - 1) : "0");
    }
    textoPantalla.innerHTML = numeroPantalla;
}

function operacion(tipo) {
    if (tipo !== "") {
        igual();
    }
    operacionTipo = tipo;
    numeroReservado = numeroPantalla;
    inputIniciado = false;
}

function igual() {
    if (operacionTipo === "") { 
        textoPantalla.innerHTML = numeroPantalla;
    }
     else { 
        equacion = numeroReservado + operacionTipo + numeroPantalla; 
        resultado = eval(equacion) 
        textoPantalla.innerHTML = resultado;
        numeroPantalla = resultado; 
        operacionTipo = ""; 
        inputIniciado = false; 
    }
}

function porcentaje() { 
    numeroPantalla = numeroPantalla/100;
    textoPantalla.innerHTML = numeroPantalla; 
    igual();
    inputIniciado = false;
}

function raiz() {
    numeroPantalla = Math.sqrt(numeroPantalla);
    textoPantalla.innerHTML= numeroPantalla;
    operacionTipo = "";
    inputIniciado = false;
}

function potencia() {
    numeroPantalla = Math.pow(numeroPantalla, 2)
    textoPantalla.innerHTML= numeroPantalla;
    operacionTipo = "";
    inputIniciado = false;
}

function invertirValor() { 
    let numero = Number(numeroPantalla);
    numero = -numero;
    numeroPantalla = String(numero);
    textoPantalla.innerHTML = numeroPantalla;
}

function fraccionar() {
    console.log(numeroPantalla);
    let numero = Number(numeroPantalla);
    numero = (1/numero);
    numeroPantalla = String(numero);		 
    textoPantalla.innerHTML = numeroPantalla;
    inputIniciado = false;
}