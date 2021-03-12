$(document).ready(function () {
	var menu = $(".nav-right ul li span");
	menu.hover(function () {
		$(this).siblings().toggleClass("active");
	})
});