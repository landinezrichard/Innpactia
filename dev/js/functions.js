$(document).ready(function() {

	/**/
	var arrow_izq ='<img class="flecha-izq" src="../images/01-index/left-arrow.png">';
	var arrow_der ='<img class="flecha-izq" src="../images/01-index/right-arrow.png">';

	/*Banner del Index*/
	$('.Banner-slides.owl-carousel').owlCarousel({		
		nav: true,
		autoPlay: false,
		slideSpeed: 1000,
		dots: true,		
		responsive: {
			0:{
				items:1
			}
		},
		navText: [arrow_izq,arrow_der]
	});	

	/*Funcionalidades Menu*/

	var menus = ['.MainMenu','.Header-contactoMail','.Header-contactoTel','.Header-contactoRedes'];

	/*Mostrar menu mobile*/
	$('.Header-mobileMenu').click(function(){
		mostrarOcultar('.MainMenu');
	});

	/*Mostrar redes*/
	$('.Header-mobileRedes').click(function(){
		mostrarOcultar('.Header-contactoRedes');
	});

	/*Mostrar contacto*/
	$('.Header-mobileMail').click(function(){
		mostrarOcultar('.Header-contactoMail');
	});

	/*Mostrar tel*/
	$('.Header-mobileTel').click(function(){
		mostrarOcultar('.Header-contactoTel');
	});

	function mostrarOcultar(elemento){
		for (var i = 0; i <= menus.length-1; i++) {
			if(menus[i] != elemento){
				$(menus[i]).slideUp();
			}
		}
		$(elemento).slideToggle();
	}

});