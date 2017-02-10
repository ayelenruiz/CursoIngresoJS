function Mostrar()
{
//tomo la edad  
var edad;
edad=document.getElementById('edad').value;
/*if(edad<=18)
{


	alert("la persona es adolescente"+edad);
	  	if(edad>=13)
	  	{
	  		alert("la persona es menor");
	  	}

}*/
if(edad<18 && edad>12)
{
	alert("la persona es adolescente"+edad);
}


}//FIN DE LA FUNCIÓN