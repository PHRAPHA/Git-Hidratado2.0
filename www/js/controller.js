$(document).ready(function() {
	  
	console.log("Olá Rapha");
	//Variáveis Contadoras
	var copos = 0;
	var contador=0;

	if (contador >= 0 && contador <= 3) {
		$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
		$("#texto-cerebro").html("Seu cérebro está mais cansado. A falta de água torna mais difícil pensar, podendo causar uma sensação de cansaço e dores de cabeça.");
		$("#texto-rim").html("Seu rim está recebendo menos oxigênio e causando lesões em suas células. Há mais chances de desenvolver pedras nos rins e infecções urinárias.");
		$("#texto-estomago").html("O estômago e o intestino têm dificuldade em digerir os alimentos e eliminar as toxinas, o que pode causar refluxo, azia e prisão de ventre.");
	};


	$("#btnAddCopo").click(function() {
	$(".cups").append( '<img class="copo" src="img/agua.png">');
	
	//Faz os Copos Sumirem após 9 segundos
		copos++;
		contador++;
		console.log(copos);
		setTimeout(function () {
			$('.copo:last-child').remove();
			copos--;
			contador--;
			console.log(copos);
		
			//Desidratado
			if (copos >= 0 && copos <= 2) {
				$("#user-foto").attr("src", "img/desidratado.png");
				$("#status").html("Você está desidratado, tome alguns copos de água para seu corpo funcionar corretamente!");
			};


			//Semidesidratado
			if (copos > 2 && copos <= 4) {
				$("#user-foto").attr("src", "img/semidesidratado.png");
				$("#status").html("Você está quase desidratado, você precisa de mais água do que isso!");
			};

			//Semihidratado
			if (copos > 4 && copos <= 7) {
				$("#user-foto").attr("src", "img/semihidratado.png");
				$("#status").html("Mais alguns copos e seu corpo vai trabalhar muito melhor, Por que não bebe mais um pouco de água?");
			};

			//Hidratado
			if (copos > 7) {
				$("#user-foto").attr("src", "img/hidratado.png");
				$("#status").html("Você está hidratado! Isso que é vida saudável!");
			};

			//IFS DA TELA TRES!! :)
			//Desidratado
			if (contador >= 0 && contador <= 3) {
				$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
				$("#texto-cerebro").html("Seu cérebro está mais cansado. A falta de água torna mais difícil pensar, podendo causar uma sensação de cansaço e dores de cabeça.");
				$("#texto-rim").html("Seu rim está recebendo menos oxigênio e causando lesões em suas células. Há mais chances de desenvolver pedras nos rins e infecções urinárias.");
				$("#texto-estomago").html("O estômago e o intestino têm dificuldade em digerir os alimentos e eliminar as toxinas, o que pode causar refluxo, azia e prisão de ventre.");
			};

			//Semidesidratado
			if (contador >= 4 && contador <= 7) {
				$("#texto-sangue").html("Com essa quantidade de água, seu sangue está fluindo melhor do que antes. Ainda assim, a falta de água continua a prejudicar o desempenho do seu organismo.");
				$("#texto-cerebro").html("Seu cérebro ainda está sobrecarregado, pois a falta de água compromete a passagem de nutrientes necessários para seu bom funcionamento.");
				$("#texto-rim").html("Seus rins tem dificuldade em filtrar o sangue. Isso causa consequências para órgãos como a pele, que pode desenvolver espinhas.");
				$("#texto-estomago").html("Com pouca água, seu corpo não é capaz de produzir o suco gástrico e as enzimas digestivas, o que pode deixar seu intestino lento.");
			};

			//Hidratado
			if (contador > 7) {
				$("#texto-sangue").html("Seu sangue aumentou de volume e agora flui com mais facilidade pelo seu corpo, transportando com facilidade os nutrientes para todos os órgãos e deixando você mais disposto.");
				$("#texto-cerebro").html("Com a melhora no transporte de nutrientes, seu cérebro se torna mais ágil e sua memória e o seu sono melhoram.");
				$("#texto-rim").html("Seus rins são capazes de filtrar seu sangue sem ficarem sobrecarregados. Além disso, não há concentração de toxinas, o que impede o desenvolvimento de bactérias.");
				$("#texto-estomago").html("Seu órgãos digestores agora possuem uma melhor capacidade de digerir alimentos e absorver nutrientes necessários para abastecer seu sangue.");
			};

			if(copos < 0){
				copos = 0;
			}
		
		}, 20000);

	//Fim Faz os Copos Sumirem após 9 segundos
	
		//Frases e Bonecos após o click no add copos
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
			$("#status").html("Você está hidratado! Isso que é vida saudável!");
		};

		

	});

	$('#btnRemCopo').click(function(){
		$( ".copo:last-child" ).remove();
		copos--;
		contador--;

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

		//IFS DA TELA TRES!! :)
		//Desidratado
		if (contador >= 0 && contador <= 3) {
			$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-cerebro").html("Seu cérebro está mais cansado. A falta de água torna mais difícil pensar, podendo causar uma sensação de cansaço e dores de cabeça.");
			$("#texto-rim").html("Seu rim está recebendo menos oxigênio e causando lesões em suas células. Há mais chances de desenvolver pedras nos rins e infecções urinárias.");
			$("#texto-estomago").html("O estômago e o intestino têm dificuldade em digerir os alimentos e eliminar as toxinas, o que pode causar refluxo, azia e prisão de ventre.");
		};

		//Semidesidratado
		if (contador >= 4 && contador <= 7) {
			$("#texto-sangue").html("Com essa quantidade de água, seu sangue está fluindo melhor do que antes. Ainda assim, a falta de água continua a prejudicar o desempenho do seu organismo.");
			$("#texto-cerebro").html("Seu cérebro ainda está sobrecarregado, pois a falta de água compromete a passagem de nutrientes necessários para seu bom funcionamento.");
			$("#texto-rim").html("Seus rins tem dificuldade em filtrar o sangue. Isso causa consequências para órgãos como a pele, que pode desenvolver espinhas.");
			$("#texto-estomago").html("Com pouca água, seu corpo não é capaz de produzir o suco gástrico e as enzimas digestivas, o que pode deixar seu intestino lento.");
		};

		//Hidratado
		if (contador > 7) {
			$("#texto-sangue").html("Seu sangue aumentou de volume e agora flui com mais facilidade pelo seu corpo, transportando com facilidade os nutrientes para todos os órgãos e deixando você mais disposto.");
			$("#texto-cerebro").html("Com a melhora no transporte de nutrientes, seu cérebro se torna mais ágil e sua memória e o seu sono melhoram.");
			$("#texto-rim").html("Seus rins são capazes de filtrar seu sangue sem ficarem sobrecarregados. Além disso, não há concentração de toxinas, o que impede o desenvolvimento de bactérias.");
			$("#texto-estomago").html("Seu órgãos digestores agora possuem uma melhor capacidade de digerir alimentos e absorver nutrientes necessários para abastecer seu sangue.");
		};

	});

	console.log(copos);

	//vai dar certo
	
	//Formatação didatica separada, contador a parte

	


	
});