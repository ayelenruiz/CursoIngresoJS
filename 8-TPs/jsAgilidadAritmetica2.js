/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var numerosecretouno;
var numerosecretodos;
var operacionrandom;
var resultado;

function comenzar()
{
	numerosecretouno=Math.floor(Math.random() * 10) + 1;
	numerosecretodos=Math.floor(Math.random() * 10) + 1;
	operacionrandom=Math.floor(Math.random() * 4) + 1;
	document.getElementById('PrimerNumero').value=numerosecretouno;
	document.getElementById('SegundoNumero').value=numerosecretodos;

	if (operacionrandom==1)
	{
		document.getElementById('Operador').value="Suma";
		resultado=numerosecretouno+numerosecretodos;
	}
	else if (operacionrandom==2)
	{
		document.getElementById('Operador').value="Resta";
		resultado=numerosecretouno-numerosecretodos;
	}
	else if (operacionrandom==3)
	{
		document.getElementById('Operador').value="Division";
		resultado=numerosecretouno/numerosecretodos;
	}
	else
	{
		document.getElementById('Operador').value="Multiplicacion";
		resultado=numerosecretouno*numerosecretodos;
	}

}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById('Respuesta').value
	if(respuesta==resultado)
	{
		alert("es correcto");
	}
	else if(respuesta!=resultado)
	{
		alert("es incorrecto");
	}


}//FIN DE LA FUNCIÓN
