//memory beshi khaile hash e neya lagbe, roll er age char diya dileo auto hash

function open_file(url) {
	/*const xhrs = new XMLHttpRequest()
	xhrs.open('GET', url, false)
	xhrs.send(null)

	if (xhrs.status === 200) {
		return xhrs.responseText
	}
	return false*/
	return csvstring
}
//if err just add file as var in ``
function read_csv_header(line) {
	var ret = []
	var temp = ""
	for (i in line) {
		switch (line[i]) {
			case ',':
				ret.push(temp)
				temp = ""
				break
			default:
				temp += line[i]
		}
	}
	ret.push(temp)
	return ret
}
function read_csv_line(line, header) {
	var header_at = 0
	var ret = {}
	var temp = ""
	for (i in line) {
		switch (line[i]) {
			case ',':
				ret[header[header_at++]] = temp
				temp = ""
				break
			default:
				temp += line[i]
		}
	}
	if (header_at < header.length) ret[header[header_at++]] = temp
	return ret
}
function read_csv(url) {
	var ret = []
	var csvdata = open_file(url)
	var csvArray = csvdata.split('\n');
	var header = read_csv_header(csvArray[0])
	for (let i = 1; i < csvArray.length; i++) {
		var linedata = read_csv_line(csvArray[i], header)
		ret[linedata.roll] = linedata
	}
	return ret
}
function merge_data(table1, table2) {
	for (i in table1) {
		for (j of Object.keys(obj)) {
			table1[i][j] = table2[i][j]
		}
	}
}