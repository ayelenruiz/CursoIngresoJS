/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var resultado;
    largo=document.getElementById('Largo');
    ancho=document.getElementById('Ancho');
    largo=parseInt(largo);
    ancho=parseInt(ancho);
    resultado=((2*largo)+(2*ancho))*3;
    alert("el rectangulo es" +resultado);
}
function Circulo () 
{
	var largo;
	var ancho;
	var radio;
	var resultado;
	largo=document.getElementById('Largo');
	ancho=document.getElementById('Ancho');
	radio=document.getElementById('Radio');
	resultado=((radio*2)/3.14)*3;
	alert("cantidad de alambre a comprar es" +resultado);
}
function Materiales () 
{
	var largo;
	var ancho;
	var bolsadecal;
	var bolsadecemento;
	var resultado;
	largo=document.getElementById('Largo');
	ancho=document.getElementById('Ancho');
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	bolsadecemento=parseInt(bolsadecemento);
	bolsadecal=parseInt(bolsadecal);
	=(largo+ancho)*2;
	=(largo+ancho)*3;
	alert("bolsa de cemento que se necesitan" + bolsadecemento "bolsa de cal que se necesitan" +bolsadecal);
}