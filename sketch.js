function setup() {
	let cnv=createCanvas(windowWidth, windowHeight);
	cnv.position(0,0);
	background(0);
	angleMode(DEGREES)
	colorMode(HSB)
	cw = width / 2
	ch = height / 2
	w = width
	h = height
	// frameRate(1)
}

function draw() {
	blendMode(OVERLAY)
	circle(mouseX, mouseY, 20);
	// for (var x = 0; x < width; x += random(5, 30)) {
	// 	for (var y = 0; y < height; y += random(5, 30)) {
	// 		// fill(random(255))
	// 		noFill()
	// 		stroke(random(20, 50), 50, 40)
	// 		rect(x, y, random(5, 300 - mouseX), random(5, 300 - mouseY))
	// 	}
	// }
	background(0, 10);
	// let sw=mouseX/10
	// strokeWeight(random(sw))
	let sf = map(mouseX, 0, width, 0, 255)
	for (var x = 0; x < width; x += random(5, 30)) {
		for (var y = 0; y < height; y += random(5, 30)) {
			// fill(random(255))
			noFill()
			stroke(random(200, 360), 50, 40)
			rect(x, y, random(5, 300 - mouseX), random(5, 300 - mouseY))
		}
		blendMode(SCREEN)

		for (var x = 0; x < width; x += random(5, 30)) {
			cw = lerp(cw, mouseX, 0.004)
			ch = lerp(ch, mouseY, 0.004)
			let a = mouseX
			let b = mouseY
			let si = dist(cw, ch, a, b);
			let siMax = dist(cw, ch, w, h);
			let siz = map(si, 0, siMax, 0, 1000)
			let siv = map(si, 0, siMax, 50, 0)
			circle(cw, ch, siz);
			circle(cw, ch, siv);
		}
		blendMode(BLEND)
	}
}