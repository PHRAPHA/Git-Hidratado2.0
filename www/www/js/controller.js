	$(document).ready(function() {
  

	//Adicionando Copos na Div
	var copos = 0;
	var contador=0;
	$("#btnAddCopo").click(function() {
		$(".cups").append( '<img src="img/agua.png">');
			
			copos++;
			if(copos>=1){
			$("#1gota").removeClass("block");
			};
			if(copos>=5){
			$("#garrafa").removeClass("block");
			};
			if(copos>=10){
			$("#balde").removeClass("block");
			};
			if(copos>=15){
			$("#galao").removeClass("block");
			};
			if(copos>=20){
			$("#banho").removeClass("block");
			};
			if(copos>=30){
			$("#piscina").removeClass("block");
			};
});


//Adicionando Copos na Div


	console.log(copos);


	
	
	//Para user Status

	});