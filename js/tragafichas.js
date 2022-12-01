window.onload=inici;
      
      var imagenes=["fotografia.png","gorra.png","tenedor_lapiz.png","maquineta.png","llavero.png","chupachups.png","rey_ervigio.png"];
      var premios=[2,2,3,2,3,3,6];
      var numeros_actuales=[];
      var cantidad=imagenes.length; 
      var credito=aleatorioCoin();//desde 8 a diez aleatoria
      var v=aleatorioTiles();//de 0 a 5 diez aleatoria
      var boton=document.getElementById("b0");
      var mp3;
      tiles=document.getElementsByClassName("ventana");
      console.log(v);

    function inici(){        
       		//eventos tirar - volver a tirar
       		document.getElementById("lanzar").onclick=tirar;
       		document.getElementById("b0").onclick=volvertirarb0;
       		document.getElementById("b1").onclick=volvertirarb1;
       		document.getElementById("b2").onclick=volvertirarb2;
       		mp3=document.getElementById("sonido");
       		document.getElementById("dinero").innerHTML=credito;
       		//inicio pintando tantas veces como credito aleatorio el moneda.png en el div correspondiente
       		for(i=0;i<credito;i++){
       		document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}


    }

function tirar(){	
					
			if (credito>0){
				// tiene que haber crédito div id="dinero"si credito es 0 no va
				//tres imagenes al azar
				//si son iguales las 3 premio aleatorio nºmonedas con musica.
				//al cerrar la ventana de alert se suman al total de creditos.div id="dinero"
				console.log("tirar");
				checkPremio();
				sonar();
				credito--
				document.getElementById("dinero").innerHTML=credito;
				// borro el div pintado con moneda.png corresponeiente al valor del credito anterior
				document.getElementById("monedas").innerHTML=``;
				//pintando tantas veces moneda.png como credito tengo en el  en el div correspondiente
				for(i=0;i<credito;i++){
     			document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
				aleatorioTiles();
				tiles[0].innerHTML=``;
				tiles[0].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				aleatorioTiles();
				tiles[1].innerHTML=``;
				tiles[1].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				tiles[2].innerHTML=``;
				aleatorioTiles();
				tiles[2].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				//}
				
			}
			else{
				console.log(credito);

				sonar3();
				document.getElementById("dinero").innerHTML=credito;
				}// no tirar
			
}
function volvertirarb0(){
				if (credito>0){
				console.log("volvertirar");
				sonar2();
				credito--
				document.getElementById("dinero").innerHTML=credito;
                document.getElementById("monedas").innerHTML=``;
                for(i=0;i<credito;i++){
                    document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
				tiles[0].innerHTML=``;
				tiles[0].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				}
				else{
				sonar3();
				document.getElementById("dinero").innerHTML=credito;
				}// no tirar
				//realizara random en imagenes (funcion tirar)
				//insertar img en: 
				//caso 1primer div ventana si 
				//caso 2primer div ventana si 
				//caso 3primer div ventana si 

}	

function volvertirarb1(){
				if (credito>0){
				console.log("volvertirar");
				sonar2();
				credito--
				document.getElementById("dinero").innerHTML=credito;
                document.getElementById("monedas").innerHTML=``;
                for(i=0;i<credito;i++){
                    document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
				tiles[1].innerHTML=``;
				tiles[1].innerHTML+=`<img src="img/${imagenes[v]}">`;
				}
				else{
				sonar3();
				document.getElementById("dinero").innerHTML=credito;
				}// no tirar
				//realizara random en imagenes (funcion tirar)
				//insertar img en: 
				//caso 1primer div ventana si 
				//caso 2primer div ventana si 
				//caso 3primer div ventana si 

}	
function volvertirarb2(){
				if (credito>0){
				console.log("volvertirar");
				sonar2();
				credito--
				document.getElementById("dinero").innerHTML=credito;
                document.getElementById("monedas").innerHTML=``;
                for(i=0;i<credito;i++){
                    document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
				tiles[2].innerHTML=``;
				tiles[2].innerHTML+=`<img src="img/${imagenes[2]}">`;
				}
				else{
				sonar3();
				document.getElementById("dinero").innerHTML=credito;
				}// no tirar
				//realizara random en imagenes (funcion tirar)
				//insertar img en: 
				//caso 1primer div ventana si 
				//caso 2primer div ventana si 
				//caso 3primer div ventana si 

}	

function comprar(){
    if(numeros_actuales[0]==numeros_actuales[1] && numeros_actuales[1]==numeros_actuales[2]){
        let p=premios[numeros_actuales[0]];
        let mensaje=`Has ganado ${premios[numeros_actuales[0]]} monedas`;
        for (let k=0;k<p;k++){
            mensaje+=`<img scr="img/moneda.png">`;
        }
        mostrar_mensaje(mensaje);
    }
    
}

function sonar(){
				mp3.src="audio/coin.mp3";
				mp3.play();

}
function sonar2(){
				mp3.src="audio/coin.mp3";
				mp3.play();

}		
function sonar3(){
				mp3.src="audio/sincash.mp3";
				mp3.play();
}	

function sonar4(){
				mp3.src="audio/ganar.mp3";
				mp3.play();
}

function aleatorioCoin(){
  return Math.round(Math.random() * (10 - 8) + 8);
  //La función Math.round() retorna el valor de un número redondeado al entero más cercano.
  //Math.random() devuelve un número aleatorio de 0 a 0.999
}

function aleatorioTiles(){
  return Math.round(Math.random() * (10 - 5) + 0);
  //return Math.round(Math.random() * (10 - 5) + 3);
  //La función Math.round() retorna el valor de un número redondeado al entero más cercano.
}

function mostrar_mensaje(m){
    document.getElementById("velo").style.display="flex";
    document.getElementById("mensaje").innerHTML = m;
}

function checkPremio(){

	if(tiles[0]==tiles[1] && tiles[0]==tiles[2]){
	return
	sonar4(); 
	alert("has ganado");
}
	//musica 
	// mensaje
}
