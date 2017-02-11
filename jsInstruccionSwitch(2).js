function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);

switch(mesDelAño)
{
	case "julio":
	case "agosto":
	alert("Abrigate que hace frio");
	break;

	case "octubre":
	case "noviembre":
	case "diciembre":
	alert("Ya pasamos el frio, ahora calor!!");
	break;

	case "enero":
	case "febrero":
	case "marzo"
    case "abril":
    case "mayo":
    case "junio":
	alert("Falta para el calor");
	break;


}//FIN DE LA FUNCIÓN