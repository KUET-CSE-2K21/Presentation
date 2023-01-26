var at = 0;
var total = data.length;
function handleNavigation() {
	document.oncontextmenu = e => {
		e.preventDefault();
		navigate(at - 1);
		return false;
	}
	document.onclick = e => {
		e.preventDefault();
		navigate(at + 1);
		return false;
	}
	document.onkeydown = e => {
		e = e || window.event;
		console.log(e)
		switch (e.keyCode) {
			case 40:
			case 37:
			case 34:
				navigate(at - 1)
				break;
			case 38:
			case 33:
			case 39:
				navigate(at + 1)
				break;
		}
	}
	window.onwheel = e => {
		if (e.deltaY >= 0) {
			navigate(at + 1)
		} else {
			navigate(at - 1)
		}
	}
}
function navigate(to) {
	if (to < 0) to = 120
	to %= section.childElementCount

	section.children[at].classList.add("hidden")
	section.children[to].classList.remove("hidden")
	at = to
} 