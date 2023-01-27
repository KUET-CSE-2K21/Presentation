function renderTemplate(section, data) {

	template1(section, data)
}

function template1(section, data) {
	section.setAttribute("id", "layout1")
	for (i in data) {
		var namehash = hash(data[i].name);
		var gradient = values.gradient[Math.abs(namehash % values.gradient.length)];
		var angle = namehash % 180 * Math.pow(-1, namehash % 10);
		var gradientText = "background:linear-gradient(" + angle + "deg," + gradient[0] + "," + gradient[1] + ")"


		var article = document.createElement("article")
		article.setAttribute("style", gradientText);
		article.classList.add("hidden")

		var imageContainer = document.createElement("figure")

		var dataContainer = document.createElement("div")
		dataContainer.classList.add("dcontainer")

		var image = document.createElement("div")
		image.classList.add("img")
		image.setAttribute("style", "background:url('" + "images/" + data[i].roll + ".jpg\');background-size:auto 100%;background-repeat:no-repeat;background-position:center center")

		var name = document.createElement("div")
		name.classList.add("name")
		name.innerHTML = data[i].name

		var roll = document.createElement("div")
		roll.classList.add("roll")
		roll.innerHTML = data[i].roll

		var homeDistrict = document.createElement("div")
		homeDistrict.classList.add("home")


		imageContainer.appendChild(image)
		dataContainer.appendChild(name)
		dataContainer.appendChild(roll)
		dataContainer.appendChild(homeDistrict)
		article.appendChild(dataContainer)
		article.appendChild(imageContainer)
		section.appendChild(article)
	}
}