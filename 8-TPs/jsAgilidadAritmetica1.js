/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
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
