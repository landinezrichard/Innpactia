$(document).ready(function() {

	/*Funcionalidades Menu Footer*/

	var menus = ['.FootInt-menuList'];

	/*Mostrar menu mobile*/
	$('.FootInt-menuBtn').click(function(){
		mostrarOcultar('.FootInt-menuList');
	});

	function mostrarOcultar(elemento){
		for (var i = 0; i <= menus.length-1; i++) {
			if(menus[i] != elemento){
				$(menus[i]).slideUp();
			}
		}
		$(elemento).slideToggle();
	}

	/* Acordeon Preguntas frecuentes*/
	$('.Preguntas-itemHead').click(function(){		
		$(this).next().fadeToggle();
	});

	/*Seleccionar interna*/

	var URLhash = window.location.hash;
	$(URLhash).css('left','0');
	/*Ocultar menu redes interna*/
	if(URLhash === "#planes"){		
		$('.RedesInt').css('display','none');
	}
	else{
		$('.RedesInt').css('display','inline-block');
	}

	$('.FootInt-menu').on('click','ul li a',function(event){
		// event.preventDefault();
		var URLhash = window.location.hash;
		var anterior = $(URLhash);
		var idSeccion = $(this).attr('href');
		var seccion =$(idSeccion);

		if(URLhash !== idSeccion){
			seccion
				.css('z-index','2')
				.animate(
				{
					left:0
				},
				300,
				function(){					
					anterior.css('left','-100%');
					$(this).css('z-index','1');
				}
			);
		}

		if(URLhash === "#planes"){
			$('.RedesInt').css('display','none');
		}
		else{
			$('.RedesInt').css('display','inline-block');
		}
		
	});

	/*Mostrar texto Nosotros*/

	$('.Nosotros-list').on('click','.Nosotros-item',function (event){
		$(this).find('.Nosotros-itemTxt').fadeToggle();		
	});

	//detectar cambio hash url

	$(window).bind('hashchange', function () {
		//detect hash change
		var tab = window.location.hash.slice(1);

		console.log(tab);

		//Desactivar todo el contenido
		// $('div.hash_content').each(function(){
		// $(this).hide();
		// });

		//Activar el contenido
		// var div_inactive = $('div.' + tab);
		// div_inactive.show();
	});


});