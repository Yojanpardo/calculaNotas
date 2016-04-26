<<<<<<< HEAD
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






=======
var cantidad=prompt("ingresa la cantidad de notas que vas a calcular");
var nota;
var total=0;
cantidad=Number(cantidad);
total=parseInt(total);
for (var i = 0; i < cantidad; i++) {
	nota=prompt("ingresa la nota numero " + (i+1));
	nota=Number(nota)
	total = (nota+total);
}
nota=total/cantidad;
alert("tu nota final es: " + nota);
>>>>>>> experimental
