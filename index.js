window.onload = main;
var section, data;
function main() {
	handleNavigation()
	data = read_csv(values.data)
	section = document.querySelector("section")
	renderTemplate(section, data)
	navigate(0)
}