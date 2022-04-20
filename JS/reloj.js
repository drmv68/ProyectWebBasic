$(document).ready(function(){
	//selector de tema
	var theme = $("#theme");
	$('#to-black').click(()=>{				
		localStorage.clear();
		localStorage.setItem('colores', 'black');
		location.reload();		
	});
	$('#to-blue').click(()=>{
		localStorage.clear();
		localStorage.setItem('colores', 'blue');
		location.reload();
	});
	$('#to-yellow').click(()=>{
		localStorage.clear();
		localStorage.setItem('colores', 'yellow');
		location.reload();
	});
	let datoTheme = localStorage.getItem('colores');

		if(datoTheme == 'black'){
			theme.attr("href", "folderStyle/black.css");
		}else if(datoTheme == 'blue'){
				theme.attr("href", "folderStyle/blue.css");
		}else if(datoTheme == 'yellow'){
				theme.attr("href", "folderStyle/yellow.css");	
	};
	//UP

	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 555);
		return false;
	});
		//login Falso!


		$('#login').submit(function(){
			var datos = $('#dato_nombre').val();
			localStorage.setItem('datos', datos);
		});

		var datos = localStorage.getItem('datos');
		
		if(datos != null && datos != 'undefined'){
			var login =	$("#login"); 
			login.html(`<br><br>Hola! Bienvenido <b>${datos}</b>`);
			login.append(`<a href="#" id="logOut" >Cerrar Sesión</a>`);	

			$('#logOut').click(function(){
				localStorage.clear();
				location.reload();
			});
		}

		//reloj

			setInterval(function() {

			var reloj = moment().format('hh:mm:ss');
			$('#reloj').html(reloj);
			}, 1);

			
});