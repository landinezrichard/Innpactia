$(document).ready(function() {

	/*Funcionalidades Menu*/

	var menus = ['.Menu'];

	/*Mostrar menu mobile*/
	$('.Header-menuBtn').click(function(){
		mostrarOcultar('.Menu');
	});

	function mostrarOcultar(elemento){
		for (var i = 0; i <= menus.length-1; i++) {
			if(menus[i] != elemento){
				$(menus[i]).slideUp();
			}
		}
		$(elemento).slideToggle();
	}

	/*Boton "Como Funciona"*/
	var seccionHow = $('.How');
	var seccionHeader = $('.Header');

	$('.Banner-btn').click(function(event){
		event.preventDefault();
		seccionHow.animate({
				top:0,
			},
			300
		);
		seccionHeader.animate({
				marginTop:662,
			},
			300
		);


	});
	/*Oculta seccion "como funciona"*/
	$(window).scroll(function(){
		var of_window = $(window).scrollTop();
		var of_header = seccionHeader.offset().top;
		if(of_window >= of_header && of_header == 662){
			seccionHow.css('top','-662px');
			seccionHeader.css('margin-top','0');
			$(window).scrollTop(0);			
		}		
	});	

	/*Boton cerrar de "como funciona"*/
	$('.How-closeBtn').click(function(event){
		event.preventDefault();
		seccionHow.animate({
				top:-662,
			},
			300
		);
		$('.Header').animate({
				marginTop:0,
			},
			300
		);
	});

	/*Barra de Share Fixed*/
	$('.Share-btn').click(showShare);

	$('.Share').hover(function() {			
			$('.Share-all').animate({left:64});
		},
		function() {
			$('.Share-all').animate({left:-270});			
		}
	);

	function showShare(event){
		event.preventDefault();

		var posleft = $('.Share-all').css('left');
		var posleft =posleft.split('px');

		if(posleft[0] == 64){
			$('.Share-all').animate({left:-270});			
		}
		if(posleft[0] == -270){
			$('.Share-all').animate({left:64});
		}				
		
	}

	/**/
	var arrow_izq ='<img class="flecha-izq" src="../images/01-index/left-arrow.png">';
	var arrow_der ='<img class="flecha-izq" src="../images/01-index/right-arrow.png">';

	/*Banner del Index*/
	// $('.Banner-slides.owl-carousel').owlCarousel({		
	// 	nav: true,
	// 	autoPlay: false,
	// 	slideSpeed: 1000,
	// 	dots: true,		
	// 	responsive: {
	// 		0:{
	// 			items:1
	// 		}
	// 	},
	// 	navText: [arrow_izq,arrow_der]
	// });	

});