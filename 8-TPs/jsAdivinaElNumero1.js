/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroingresado;



function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
numeroSecreto=Math.floor(Math.random() * 100) + 1;
/*console.log("numerosecreto");*/
		//alert(numeroSecreto );
document.getElementById('intentos').value=contadorIntentos;

		/*alert(numerosecreto);*/
		console.log(numeroSecreto);
		contadorIntentos=0;
		
		

}

function verificar()
{ 
    
	
    numeroingresado=document.getElementById('numero').value;
    contadorIntentos=contadorIntentos+1;
    document.getElementById('intentos').value=contadorIntentos;
   
			
			
			if (numeroingresado==numeroSecreto) 
				{
					alert("Sos un ganador");
				}
			if (numeroingresado<numeroSecreto)
				{
					alert("te falta");
				}	
			if (numeroingresado>numeroSecreto)
				{
				    alert("te pasaste");
				}

			
			
				
}