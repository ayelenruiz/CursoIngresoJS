/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var numerosecreto;

function comenzar()
{
	
	numerosecreto=Math.floor(Math.random() * 3) + 1;
	switch(numerosecreto)
	{
		case 1:
		eleccionMaquina="piedra";
		break
		case 2:
		eleccionMaquina="papel";
		break
		case 3:
		eleccionMaquina="tijera";
	}
	alert(eleccionMaquina);


}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccion="piedra";
	if(eleccion==eleccionMaquina)
	{
		alert("empate");
	}
	if(eleccionMaquina=="tijera")
	{
		alert("ganaste");
	}
	if(eleccionMaquina=="papel")
	{
		alert("perdiste");
	}


}//FIN DE LA FUNCIÓN
function papel()
{
  eleccion="papel";
	if(eleccion==eleccionMaquina)
	{
		alert("empate");
	}
	if(eleccionMaquina=="tijera")
	{
		alert("perdiste");
	}
	if(eleccionMaquina=="piedra")
	{
		alert("ganaste");
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccion="tijera";
	if(eleccion==eleccionMaquina)
	{
		alert("empate");
	}
	if(eleccionMaquina=="papel")
	{
		alert("ganaste");
	}
	if(eleccionMaquina=="piedra")
	{
		alert("perdiste");
	}

}//FIN DE LA FUNCIÓN