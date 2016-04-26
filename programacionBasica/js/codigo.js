
var cantidad=prompt("ingresa la cantidad de notas que vas a calcular");// declara la variable cnatidad y la pde por teclado
var nota;// declara varable nota
var total=0;// declara variable total y se iguala a cero
cantidad=Number(cantidad);//convierte la variable cantidad en un numero
total=parseInt(total);//convierte la variable total en numero
for (var i = 0; i < cantidad; i++) {// inicia ciclo for con la condicion de la cantidad
	nota=prompt("ingresa la nota numero " + (i+1));
	nota=Number(nota)
	total = (nota+total);
}
if (total>0) {
nota=total/cantidad;
alert("tu nota final es: " + nota);
}