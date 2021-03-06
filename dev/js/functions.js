$(document).ready(function() {

	/*Funcionalidades Menu*/

	var menus = ['.Header-menuList'];

	/*Mostrar menu mobile*/
	$('.Header-menuBtn').click(function(){
		mostrarOcultar('.Header-menuList');
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
	var seccionBanner = $('.Banner');
	var margenBanner = seccionBanner.css('margin-top');
	var howAlto = seccionHow.height()+1;

	$('.Banner-btn').click(function(event){
		event.preventDefault();
		seccionHow.animate({
				top:0,
			},
			300
		);	
		howAlto = seccionHow.height()+1;
		seccionHeader.animate({
				marginTop:howAlto,
			},
			300
		);		
		seccionHeader.css('position','relative');
		seccionBanner.css('marginTop','0');
		
	});
	
	/*Oculta seccion "como funciona"*/
	$(window).scroll(function(){
		var of_window = $(window).scrollTop();
		var of_header = seccionHeader.offset().top;
		if(of_window >= of_header && of_header == howAlto){
			seccionHow.css('top','-1000%');
			seccionHeader.css({
				'margin-top':'0',
				'position':'fixed'
			});
			seccionBanner.css('marginTop', margenBanner);
			window.scrollTo(0, 0);
		}

		/*Boton de volver arriba*/
		var alto_pantalla = $( window ).height();
		if(of_window >= alto_pantalla){
			btnVolver.fadeIn();
		}else{
			btnVolver.fadeOut();
		}
	});

	/*Boton cerrar de "como funciona"*/
	$('.How-closeBtn').click(function(event){
		event.preventDefault();
		seccionHow.animate({
				top:'-1000%',
			},
			300
		);
		seccionHeader.animate({
				marginTop:0
			},
			300,
			function (){
				seccionBanner.animate({
						marginTop:margenBanner
					},
					0,
					function (){
						seccionHeader.css({
							'position':'fixed'
						});
					}
				);
			}
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

	/*Funciones para los Sliders*/
	var arrow_izq ='<img class="flecha-izq" src="../images/01-index/left-arrow.png">';
	var arrow_der ='<img class="flecha-izq" src="../images/01-index/right-arrow.png">';

	/*Banner Principal*/
	$('.Banner-slider').owlCarousel({
		nav: false,
		autoPlay: true,
		slideSpeed: 1000,
		dots: false,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});

	/*Slider Colores*/
	var owl = $('.SliderColor').owlCarousel({
		nav: true,
		autoPlay: true,
		slideSpeed: 1000,
		dots: false,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});	

	owl.on('changed.owl.carousel', function(event) {
		$('.SliderColor-img').fadeToggle('fast');
		$('.SliderColor-txt').fadeToggle('fast');
		$('.SliderColor-img').fadeIn(600,'easeInElastic',function(){
			$('.SliderColor-txt').fadeIn(600,'easeInExpo');
		});
		// $('.SliderColor-der').fadeIn(600,'easeInElastic');	
	});

	/*Slider Unicef*/
	var owl2 = $('.SliderUni-list').owlCarousel({
		nav: false,
		autoPlay: true,
		slideSpeed: 1000,
		dots: true,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});	

	owl2.on('changed.owl.carousel', function(event) {
		$('.SliderUni-izq').fadeToggle('fast');
		$('.SliderUni-der').fadeToggle('fast');
		$('.SliderUni-izq').fadeIn(600,'easeInElastic',function(){
			$('.SliderUni-der').fadeIn(600,'easeInExpo');
		});
	});

	/*Slider Azul*/
	var owl3 = $('.SliderBlue-list').owlCarousel({
		nav: true,
		autoPlay: true,
		slideSpeed: 1000,
		dots: true,
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});	

	owl3.on('changed.owl.carousel', function(event) {
		$('.SliderBlue-izq').fadeToggle('fast');
		$('.SliderBlue-der').fadeToggle('fast');
		$('.SliderBlue-izq').fadeIn(600,'easeInExpo');
		$('.SliderBlue-der').fadeIn(600,'easeInExpo');
	});


	/*Boton Fixed de volver arriba*/
	var btnVolver = $('.Footer-back');

	btnVolver.click(function(event){
		event.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		},600);
	});


	/*cambiar color barra search*/
	$('.Banner-menulist').on('click','.Banner-menuItem',function(event){
		event.preventDefault();
		var color = $(this).css('background-color');
		console.log(color);
		$('.Banner-search').css('background-color',color);
	});

	/*Menu lateral*/
	$('.MenuL').on('click','li a',function(event){
		event.preventDefault();
		var irSeccion = $(this).attr('href');
		var altoHeader = $('.Header').height();

		if(irSeccion == '#inicio'){
			$('html,body').animate({scrollTop:0},500);
		}

		if(irSeccion == '#hoy'){
			var distancia = $('.Cifras').offset().top -altoHeader;
			$('html,body').animate({scrollTop:distancia},500);
		}
		if(irSeccion == '#promesa'){
			var distancia = $('.ValorMarca').offset().top -altoHeader;
			$('html,body').animate({scrollTop:distancia},500);
		}
	});
});