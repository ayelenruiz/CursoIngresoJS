/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
					switch(contadorIntentos)
					{
						case 1:
						alert("Usted es un Psíquico");
						break

						case 2:
						alert("excelente percepción");
						break

						case 3:
						alert("Esto es suerte");
						break

						case 4:
						alert("Excelente tecnica");
						break

						case 5:
						alert("Usted esta en la media");
						break

						case 6:
						case 7:
						case 8:
						case 9:
						case 10:
						alert("falta tecnica");
						break

						default:
						alert("afortunado en el amor");



					}
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