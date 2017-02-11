function Mostrar()
{
//tomo la edad  
var mesDelAño
mesDelAño=document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño)
	{
      case "Febrero":
	alert("Si tiene 28 dias");
	break;
	
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "NSoviembre":
	alert("Si tiene 30 dias");
	break;

	default
	alert("Si tiene 31 dias");
	 break;
	
	}
	
	

	



}//FIN DE LA FUNCIÓN