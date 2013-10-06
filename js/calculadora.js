/*Script*/

//variables globales
var operador1="";
var operador2="";
var resultado="";
var controlOperacion=false;
var tipoOperacion;

//funciones 
function calculadora(n){
	switch(n){
		case 0:
			numero("0");
			break;
		case 1:
			numero("1");
			break;
		case 2:
			numero("2");
			break;
		case 3:
			numero("3");
			break;
		case 4:
			numero("4");
			break;
		case 5:
			numero("5");
			break;
		case 6:
			numero("6");
			break;
		case 7:
			numero("7");
			break;
		case 8:
			numero("8");
			break;
		case 9:
			numero("9");
			break;
		case "exp":
			controlOperacion=true;
			operador1=parseFloat(document.getElementById("cuadroDigitos").value);
			document.getElementById("cuadroDigitos").value = "";
			tipoOperacion="exp";
			document.getElementById("punto").disabled = false;
			desabilitarTecla();
			break;
		case "/":
			operacion("/");
			break;
		case "x":
			operacion("x");
			break;
		case "-":
			operacion("-");
			break;
		case "+":
			operacion("+");
			break;
		case "=":
			operador2=parseFloat(document.getElementById("cuadroDigitos").value);
			controlOperacion=false;
			if(tipoOperacion=="x"){
				resultado=operador1*operador2;
				document.getElementById("cuadroDigitos").value = resultado;
			}
			if(tipoOperacion=="+"){
				resultado=operador1+operador2;
				document.getElementById("cuadroDigitos").value = resultado;
			}
			if(tipoOperacion=="-"){
				resultado=operador1-operador2;
				document.getElementById("cuadroDigitos").value = resultado;
			}
			if(tipoOperacion=="/"){
				resultado=operador1/operador2;
				document.getElementById("cuadroDigitos").value = resultado;
			}
			if(tipoOperacion=="exp"){
				resultado=Math.pow(operador1,operador2);
				document.getElementById("cuadroDigitos").value = resultado;
			}
			operador1="";
			operador2="";
			resultado=0;
			habilitar();
			break;
		case ".":
			if (controlOperacion==false){
				operador1=operador1+".";
				document.getElementById("cuadroDigitos").value = operador1;
			}else{
				operador2=operador2+".";
				document.getElementById("cuadroDigitos").value = operador2;
			}
			document.getElementById("punto").disabled = true;
			break;
		case "C":
			document.getElementById("cuadroDigitos").value = "";
			if (controlOperacion==false){  
				operador1="";
			}else{
				operador2="";
			}
			habilitar();
			break;
		case "aPesetas":
			operador1=parseFloat(document.getElementById("cuadroDigitos").value);
			resultado=operador1*166.386;
			document.getElementById("cuadroDigitos").value = resultado;
			operador1="";
			operador2="";
			resultado=0;
			break;
		case "aEuros":
			operador1=parseFloat(document.getElementById("cuadroDigitos").value);
			resultado=operador1/166.386;
			document.getElementById("cuadroDigitos").value = resultado;
			operador1="";
			operador2="";
			resultado=0;
			break;
		default:
			break;
	}
}
//funcion para las operaciones
function operacion(operador){
	switch (operador){
		case "+":
			operador="+";
			break;
		case "-":
			operador="-";
			break;
		case "x":
			operador="x";
			break;
		case "/":
			operador="/";
			break;
		default:
			break;
	}
	controlOperacion=true;
	operador1=parseFloat(document.getElementById("cuadroDigitos").value);
	document.getElementById("cuadroDigitos").value = "";
	tipoOperacion=operador;
	document.getElementById("punto").disabled = false;
	desabilitarTecla();
}

//funcion escribir numeros
function numero(numero){
	if (controlOperacion==false){
		operador1=operador1+numero;
		document.getElementById("cuadroDigitos").value = operador1;
	}else{
		operador2=operador2+numero;
		document.getElementById("cuadroDigitos").value = operador2;
	}
}

//funcion que deshabilita teclas
function desabilitarTecla(){
	document.getElementById("division").disabled = true;
	document.getElementById("multiplicacion").disabled = true;
	document.getElementById("resta").disabled = true;
	document.getElementById("suma").disabled = true;
	document.getElementById("aPesetas").disabled = true;
	document.getElementById("aEuros").disabled = true;
	document.getElementById("exp").disabled = true;
}

//habilitar teclas
function habilitar(){
	document.getElementById("punto").disabled = false;
	document.getElementById("division").disabled = false;
	document.getElementById("multiplicacion").disabled = false;
	document.getElementById("resta").disabled = false;
	document.getElementById("suma").disabled = false;
	document.getElementById("aPesetas").disabled = false;
	document.getElementById("aEuros").disabled = false;
	document.getElementById("exp").disabled = false;
}















