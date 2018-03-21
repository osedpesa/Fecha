var vDia = document.getElementById("dia").value;
var vMes = document.getElementById("mes").value;
var vYear = document.getElementById("year").value;

function comprobarBisiesto(){
	if((vYear % 100 != 0 && vYear % 4 == 0) || vYear % 400 == 0){
		document.getElementById("pBisiesto").textContent() = "el año es bisiesto";
	}else{
		document.getElementById("pBisiesto").textContent() = "el año no es bisiesto";
	}	
}