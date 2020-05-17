var div = document.createElement('div')

var pages = document.getElementsByClassName('outer_page')
for (var i = 0; i < pages.length; i++) {
	let canvas = pages[i].getElementsByClassName('inner_page')[0]
	let image = new Image();
	image.src = canvas.toDataURL('image/png')
	div.appendChild(image)
}

document.head.innerHTML = ""
document.body.innerHTML = ""
document.body.appendChild(div)
