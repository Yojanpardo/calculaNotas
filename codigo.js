var numero=prompt("ingrese la cantidad de notas");
numero = Number (numero);
var n=0;
var sumatoria = 0;
while(n < numero)
	{	
		var nota=prompt("ingrese la nota");
		nota = Number(nota);
		sumatoria = sumatoria+nota;
		promedio = sumatoria/numero
		alert("tu nota es " + promedio);
		n++
	}






