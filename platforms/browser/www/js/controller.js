$(document).ready(function () {


	//Adicionando Copos na Div
	var copos = 0;
	var contador = 0;
	$("#btnAddCopo").click(function () {
		$(".cups").append('<img src="img/agua.png">');

		contador++;
		console.log(contador);
		copos = contador;


		//Desidratado
		if (copos >= 0 && copos <= 2) {
			$("#user-foto").attr("src", "img/desidratado.png");
			$("#status").html("Você está desidratado, tome alguns copos de água para seu corpo funcionar corretamente!");
			$("#texto-sangue").html("Seu volume sangúineo está reduzido e a pressão sanguínea pode cair. A falta de água também prejudica o transporte de nutrientes para outros órgãos.");
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

	});

	console.log(copos);

	//Para user Status

});