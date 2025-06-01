let images = [];
let currentIndex = 0;
let totalImages = 20;
let resetTimer;
let resetInterval = 60000; // 60 seconds in milliseconds

function preload() {
  for (let i = 1; i <= totalImages; i++) {
    images.push(loadImage(`images/image${i}.jpg`));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textFont('Arial');
  textSize(24);
  fill(255);
  resetTimer = millis();
}

function draw() {
  background(0);

  // Show current image
  if (images.length > 0) {
    let img = images[currentIndex];
    let scale = min(width / img.width, height / img.height);
    image(img, width / 2, height / 2, img.width * scale, img.height * scale);
  }

  // Draw countdown timer
  let timeLeft = max(0, resetInterval - (millis() - resetTimer));
  let secondsLeft = Math.ceil(timeLeft / 1000);
  fill(255);
  noStroke();
  textAlign(RIGHT, TOP);
  text(`Reset in: ${secondsLeft}s`, width - 20, 20);

  // Reset image index if time is up
  if (timeLeft <= 0) {
    currentIndex = 0;
    resetTimer = millis(); // restart the timer
  }
}

function mousePressed() {
  currentIndex = (currentIndex + 1) % images.length;
}
