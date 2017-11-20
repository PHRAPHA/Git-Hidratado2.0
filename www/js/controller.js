document.addEventListener("deviceready", function(){


	//Adicionando Copos na Div
	var copos = 0;
	var contador = 0;

	//IF QUANDO O APP INCIAR ANTES DE CLICAR O BOTAO
	if (copos == 0) {
		$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
		$("#texto-cerebro").html("Seu cérebro está mais cansado e você pode ter dores de cabeça.");
		$("#texto-rim").html("Seu rim está recebendo menos oxigênio e causando lesões em suas células. Há mais chances de desenvolver pedras nos rins e infecções urinárias.");
		$("#texto-estomago").html("Há dificuldade em digerir os alimentos e eliminar as toxinas.");
	};


	$("#btnAddCopo").click(function () {
		$(".cups").append('<img src="img/agua.png">');

		contador++;
		console.log(contador);
		copos = contador;


		//Desidratado
		if (copos >= 0 && copos <= 2) {
			$("#user-foto").attr("src", "img/desidratado.png");
			$("#status").html("Você está desidratado, tome alguns copos de água para seu corpo funcionar corretamente!");
		};


		//Semidesidratado
		if (copos > 2 && copos <= 4) {
			$("#user-foto").attr("src", "img/semidesidratado.png");
			$("#status").html("Você está quase semidesidratado, tome alguns copos de água para seu corpo funcionar corretamente!");
		};

		//Semihidratado
		if (copos > 4 && copos <= 7) {
			$("#user-foto").attr("src", "img/semihidratado.png");
			$("#status").html("Você está quase hidratado, tome alguns copos de água para seu corpo funcionar corretamente!");
		};

		//Hidratado
		if (copos > 7) {
			$("#user-foto").attr("src", "img/hidratado.png");
			$("#status").html("Você está hidratado!, isso que é vida saudável!");
		};


		//IFS DA TELA TRES!! :)
		//Desidratado
		if (copos >= 0 && copos <= 3) {
			$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-cerebro").html("Seu cérebro está mais cansado e você pode ter dores de cabeça.");
			$("#texto-rim").html("Seu rim está recebendo menos oxigênio e causando lesões em suas células. Há mais chances de desenvolver pedras nos rins e infecções urinárias.");
			$("#texto-estomago").html("Há dificuldade em digerir os alimentos e eliminar as toxinas.");
		};

		//Semidesidratado
		if (copos >= 4 && copos <= 7) {
			$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-cerebro").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-rim").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-estomago").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
		};

		//Hidratado
		if (copos > 7) {
			$("#texto-sangue").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-cerebro").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-rim").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
			$("#texto-estomago").html("Seu volume sanguíneo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
		};

	});

	console.log(copos);

	//Para user Status

});
