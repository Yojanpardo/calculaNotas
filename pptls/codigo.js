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
