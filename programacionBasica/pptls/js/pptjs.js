var opcionUsusario;
var opcionJs;

function aleatorio(min,max) {
	var opcion=Math.floor(Math.random() * (max - min + 1) + min);
	return opcion;
}

var opciones=["piedra","papel","tijera","lagarto","spock"];
opcionUsusario=prompt("elige una opcion:\n0 piedra\n1 papael\n2 tijera\n3 lagarto\n4 spock",0);
opcionJs=aleatorio(0,4);

if (opcionUsusario>=0){
	alert("Elegiste " + opciones[opcionUsusario]);
	alert("La maquina eligió " + opciones[opcionJs]);
	if(opcionUsusario == 0) {
		if (opcionJs==0) {
			alert("empate!");
		} else if(opcionJs==4){
			alert("perdiste");
		}else if(opcionJs==3){
			alert("ganaste");
		}else if (opcionJs==2) {
			alert("ganaste");
		} else if(opcionJs==1){
			alert("perdiste");
		}
	}else if(opcionUsusario==1){
		if (opcionJs==0) {
			alert("ganaste");
		} else if(opcionJs==4){
			alert("ganaste");
		}else if(opcionJs==3){
			alert("perdiste");
		}else if (opcionJs==2) {
			alert("perdiste");
		} else if(opcionJs==1){
			alert("empate");
		}
	}else if(opcionUsusario==2){
		if (opcionJs==0) {
			alert("perdiste");
		} else if(opcionJs==4){
			alert("perdiste");
		}else if(opcionJs==3){
			alert("ganaste");
		}else if (opcionJs==2) {
			alert("empate");
		} else if(opcionJs==1){
			alert("ganaste");
		}
	}else if(opcionUsusario==3){
		if (opcionJs==0) {
			alert("perdiste");
		} else if(opcionJs==4){
			alert("ganaste");
		}else if(opcionJs==3){
			alert("empate");
		}else if (opcionJs==2) {
			alert("perdiste");
		} else if(opcionJs==1){
			alert("ganaste");
		}
	}else if(opcionUsusario==4){
		if (opcionJs==0) {
			alert("ganaste");
		} else if(opcionJs==4){
			alert("empate");
		}else if(opcionJs==3){
			alert("perdiste");
		}else if (opcionJs==2) {
			alert("ganaste");
		} else if(opcionJs==1){
			alert("perdiste");
		}
	}else{
		alert("escoje una puta opcion >:(");
	}
}else{
	alert("escoje una puta opcion >:(");
}
