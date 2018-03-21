var vDia = document.getElementById("dia").value;
var vMes = document.getElementById("mes").value;
var vYear = parserInt(document.getElementById("year").value);



function comprobarBisiesto(vYear){
	if((vYear % 100 != 0 && vYear % 4 == 0) || vYear % 400 == 0){		
		return true;
	}else{
		return false;
	}	
}

function bisiesto(){
	var esBisiesto = comprobarBisiesto();
	if(esBisiesto == true){
		document.getElementById("pBisiesto").textContent() = "el año es bisiesto";
	}else{
		document.getElementById("pBisiesto").textContent() = "el año no es bisiesto";
	}
}

function validarFecha(vDia, vMes, vYear) {
	var esBisiesto = comprobarBisiesto(vYear);
	if (vMes <= 0 || vMes > 12) {
		return false;
	}

	if (vDia <=0 || vDia > 31) {
		return false;
	}else{
		if(vMes == 2 && esBisiesto == true && vDia > 29){
			return false;
		}
		if (vMes == 2 && esBisiesto == false && vDia > 28) {
			return false;
		}
		if(vMes == 2 || vMes == 4 || vMes == 6 || vMes == 9 || vMes == 11){
			if (vDia > 30) {
				return false;
			}
		}
	}
	return true;
}

function imprimirLatino(){
	document.getElementById("p").textContent() = "("+vDia+"/"+vMes+"/"+vYear")"; 
}

function imprimirGringo(){
	document.getElementById("p").textContent() = "("+vMes+"/"+vDia+"/"+vYear")"; 
}