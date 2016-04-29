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

});