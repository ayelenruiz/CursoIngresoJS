function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while(respuesta == "si");
	{
        
        numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		contador++
		respuesta=prompt("ingrese si para continuar");
		acumulador=acumulador+numero;
	}
	promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN