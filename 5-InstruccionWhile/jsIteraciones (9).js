function Mostrar()
{

	var contador=0;
	nombre=prompt("Por favor ingrese nombre");
	// declarar variables
	var edad;
	var respuesta='si';
	var maximo;
	var minimo;
	var nombre;
	var nombreDelMayor;
	var sexo;
	var nota;
	var aprobados;
	var desaprobadosfemeninos;
	var desaprobadosmasculinos;
	var promediodenota;
	var acumuladordenota;
	var promedioedadfemenino;
    var acumuladoredadfemenino;
    var aprobadosfemeninos;
    var bandera="nadie";
    var nombredel10;
    var sexodel10;
    var edaddel10;
    var aprobadosfemeninosnotaparmenoredad;


    
	while(respuesta!='no')
	{
		
       edad=prompt("ingrese edad");
       edad=parseInt(edad);
       while(edad<0 || edad>100)
        {
        	edad=prompt("Reingrese edad");
            edad=parseInt(edad); 
       	}
       	sexo=prompt("Ingrese sexo");
       	while(sexo!="f" && sexo!="m")
       	{
       		sexo=prompt("Reingrese sexo");
       	}
       	nota=prompt("Ingrese Nota");
       	nota=parseInt(nota);
       	while(nota>0 || nota<11)
       	{
       		nota=prompt("Reingrese Nota");
       		nota=parseInt(nota);
       	}
       	if(nota==10 && bandera=="nadie")
       	{
       		nombredel10=nombre;
       		sexodel10=sexo;
       		edaddel10=edad;
       	}
        //cantidad de personas aprobadas
        if(nota>4)
        {
           aprobados=aprobados+1;
        }
        //cuantos femeninos y cuantos masculinos desaprobaron
        if(nota<3 && sexo=m)
        {
           desaprobadosmasculinos=desaprobadosmasculinos+1;
        }
        if(nota<3 && sexo=f)
        {
        	desaprobadosfemeninos=desaprobadosfemeninos+1;
        }
        //Sacar el acumulador de Nota
          acumuladordenota=acumuladordenota+nota;

        //Edad promedio de las mujeres
        //cantidad de mujeres que aprobaron con nota par y son menores de edad..
        if(sexo=="f")
        {
           if(nota%2==0 && nota>=4)
           {
               aprobadosfemeninosnotaparmenoredad=aprobadosfemeninosnotaparmenoredad+1;
           }
        }




        contador++;
        nombreDelMayor=nombre;
        sexo=notaminima;
         
       if(contador==1)
       {
          maximo=edad;
          minimo=edad;
          nombreDelMayor=nombre;
        }
       else
       {
       	    if(edad>maximo)
        	{
                maximo=edad;
                nombreDelMayor=nombre;
        	}
        	if(edad<minimo)
        	{
                minimo=edad;   
        	}

        	if(contador==1)
        	{
        		notaminima=nota;
        		sexominimo;sexo:
        	}
        	 if(nota<minimo)
        	{
                minimo=nota;   
        	}

       }

       


	   respuesta=prompt("Para salir teclee no");
	}//while(respuesta!='no')
     
     //promedio de nota..
      promedio=acumuladordenota/;
      
      //Edad promedio de las mujeres..
      promediodeedadfemenino=acumuladoredadfemenino/


}//FIN DE LA FUNCIÓN