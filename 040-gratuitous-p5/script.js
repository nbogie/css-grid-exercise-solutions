function setup() {
    const canvas = createCanvas(300, 150);
    canvas.parent("canvasContainer");
}

function draw() {
    stroke(0, 50);
    fill(255, 50);
    const animSpeed = 0.01;
    // background(255, 10);

    const x = width * noise(frameCount * animSpeed);
    const y = height * noise(2000 + frameCount * animSpeed);
    const diameter = map(noise(3000 + frameCount * animSpeed), 0, 1, 20, 60);

    circle(x, y, diameter);
}
