const fs = require("fs")
const path = require("path")
const dir = __dirname + '/images/'
const images = fs.readdirSync(dir)
for (const file of images) {
	if (file != '.gitkeep') {
		const filePath = path.join(dir, file)
		console.log(path.join(dir, path.parse(filePath).name + '.jpg'))
		fs.rename(filePath, path.join(dir, path.parse(filePath).name + '.jpg'), () => { })
	}
}