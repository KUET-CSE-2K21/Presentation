window.onload = main;
var section, data;
function main() {
	addEventListener("click", function () {
		var
			el = document.documentElement
			, rfs =
				el.requestFullScreen
				|| el.webkitRequestFullScreen
				|| el.mozRequestFullScreen
			;
		rfs.call(el);
	});
	handleNavigation()
	data = read_csv(values.data)
	section = document.querySelector("section")
	renderTemplate(section, data)
	navigate(0)
}