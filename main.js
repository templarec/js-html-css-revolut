


// carica script quando ha finito di caricare la pagina
$(document).ready(function () {
	// variabili dei vari selettori
	var menu = $(".nav-right ul li span");
	var drop = $(".nav-drop");
	var body = $("body");
	//quando il mouse va sullo span
	menu.mouseenter(function () {
		$(this).siblings().addClass("active");
	});
	//quando mouse esce dallo span
	menu.mouseleave(function () {
		$(this).siblings().removeClass("active");
	});
	//quando mouse esce dal menu dropdown
	drop.mouseleave(function () {
		$(this).removeClass("active");
	});
	//quando mouse entra nel menu dropdown per farlo rimanere visibile quando esce
	//dallo span se l'utente vuole cliccare il link
	drop.mouseenter(function () {
		$(this).addClass("active");
	});
	//quando click sul body chiude dropdown
	body.click(function () {
		drop.removeClass("active");
	})


});