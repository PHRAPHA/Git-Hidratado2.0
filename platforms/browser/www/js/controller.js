	$(document).ready(function() {
  

	//Adicionando Copos na Div
	var copos = 0;
	var contador=0;
	$("#btnAddCopo").click(function() {
		$(".cups").append( '<img src="img/agua.png">');
			
		contador++;
		console.log(contador);
		copos = contador;


		//Desidratado
		if(copos>=0 && copos<=2){
				$( "#user-foto").attr( "src", "img/desidratado.png" );
				$("#status").html("Você está desidratado, tome alguns copos de água para seu corpo funcionar corretamente!");
			};


		//Semidesidratado
		if(copos>2 && copos<=4){
			$( "#user-foto").attr( "src", "img/semidesidratado.png" );
			$("#status").html("Você está quase desidratado, você precisa de mais água do que isso!");
		};

		//Semihidratado
		if(copos>4 && copos<=7){
			$( "#user-foto").attr( "src", "img/semihidratado.png" );
			$("#status").html("Mais alguns copos e seu corpo vai trabalhar muito melhor, Por que não bebe mais um pouco de água?");
		};

		//Hidratado
		if(copos>7){
			$( "#user-foto").attr( "src", "img/hidratado.png" );
			$("#status").html("Você está hidratado!, isso que é vida saudável!");
		};

	});

	console.log(copos);


	



	//Para user Status

	});