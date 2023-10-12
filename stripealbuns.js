let img;

// Base Colors
let bg = '#F2F2F2';

function setup() {
    createCanvas(500, 500);
    noLoop();  // Pause the draw loop until the user clicks "Start".
}

function draw() {
    background(bg);

    let tilesX = 50 + frameCount % 100;
    let aspectRatio = height / width;
    let tilesY = aspectRatio * tilesX;
    let tileSize = width / tilesX;

    let brightColor = color('#FFFF33'); // Neon Yellow
    let darkColor1 = color('#FF66FF');  // Neon Pink
    let darkColor2 = color('#0066FF');  // Neon Blue

    for (let y = 0; y < img.height; y += tileSize) {
        for (let x = 0; x < img.width; x += tileSize) {
            let index = 4 * (Math.floor(y) * img.width + Math.floor(x));
            if (index >= 0 && index < img.pixels.length - 4) {
                let r = img.pixels[index];
                let g = img.pixels[index + 1];
                let b = img.pixels[index + 2];
                let a = img.pixels[index + 3];
                let c = color(r, g, b, a);
                let br = brightness(c);

                push();
                translate(width/2 - 250, height/2 - 250);
                translate(x, y);

                if (br > 80) {
                    fill(bg);
                    noStroke();
                    ellipse(0, 0, tileSize * 0.5, tileSize * 0.5);
                } else {
                    noStroke();

                    let stripeWidth = map(br, 0, 80, tileSize * 0.9, tileSize * 0.1);

                    if (stripeWidth < tileSize * 0.3) {
                        fill(darkColor1);
                    } else {
                        fill(darkColor2);
                    }

                    rect(0, -tileSize/2, stripeWidth, tileSize);
                }

                pop();
            }
        }
    }
}
