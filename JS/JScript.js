$(document).ready(function(){
	
	//slaider

	$('.bxslider').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    pager: false
  });


	//post

	var post = [
		{
			title: 'artiCULO1',
			fecha: 'Publicado en: ' + moment().format('MMMM') + ' del dia ' +  moment().date() + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Autem repudiandae tenetur sapiente quam totam neque dolorum aut nisi ipsam omnis sed, eius in impedit molestiae illum? Quod quos rerum consectetur.'
		},
		{
			title: 'artiCULO 2',
			fecha: 'Publicado en: ' + moment().format('MMMM') + ' del dia ' +  moment().date() + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Autem repudiandae tenetur sapiente quam totam neque dolorum aut nisi ipsam omnis sed, eius in impedit molestiae illum? Quod quos rerum consectetur.'
		},
		{
			title: 'artiCULO 3',
			fecha: 'Publicado en: ' + moment().format('MMMM') + ' del dia ' +  moment().date() + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Autem repudiandae tenetur sapiente quam totam neque dolorum aut nisi ipsam omnis sed, eius in impedit molestiae illum? Quod quos rerum consectetur.'
		},
		{
			title: 'artiCULO 4',
			fecha: 'Publicado en: ' + moment().format('MMMM') + ' del dia ' +  moment().date() + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Autem repudiandae tenetur sapiente quam totam neque dolorum aut nisi ipsam omnis sed, eius in impedit molestiae illum? Quod quos rerum consectetur.'

		},
		{
			title: 'artiCULO 4',
			fecha: 'Publicado en: ' + moment().format('MMMM') + ' del dia ' +  moment().date() + ' del año ' + moment().format('YYYY'),
			content: 'Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Autem repudiandae tenetur sapiente quam totam neque dolorum aut nisi ipsam omnis sed, eius in impedit molestiae illum? Quod quos rerum consectetur.'

		},
	]

	post.forEach(function(item, index){
		var post = `
			<article class="post">
				<h3>${item.title}</h3>
					<span class="fecha">${item.fecha}</span>
					<p>${item.content}</p>
					<a href="#" class="boton-more">Leer más</a>
			</article>`

			$('#posts').append(post);
	});


	//selector de tema
	//tratar de sostener tema en el local storage

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
		};

		


});