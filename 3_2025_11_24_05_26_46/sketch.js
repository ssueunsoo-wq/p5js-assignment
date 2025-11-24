

const skin = [247, 224, 206];
const hair = [20, 20, 22];
const eyeWhite = [250, 250, 252];
const eyeBlack = [18, 18, 20];
const glassesStroke = [40, 40, 42];
const lipColor = [180, 68, 86];

let W = 600, H = 800;
let danceMode = false;
let waveHand = false;

function setup() {
  createCanvas(W, H);
  frameRate(60);
  noStroke();
}

function draw() {
  background(220, 200, 255); 
  const cx = W / 2;
  const cy = H / 2 + 50; 
  const t = frameCount * 0.05;

  let sway = sin(t) * (danceMode ? 25 : 10);
  let headTilt = sin(t * 1.3) * 0.1;

  push();
  translate(cx + sway, cy);
  scale(0.8);
  drawBody(0, 0, t);
  drawHead(0, -200, headTilt, t);
  pop();
}


function drawBody(x, y, t) {
  const shirt = [235, 238, 255];
  const collar = [215, 220, 250];
  const seam = [190, 195, 230];

  // 목
  fill(skin);
  rect(x - 40, y - 140, 80, 70, 20); 

  // 셔츠
  fill(shirt);
  arc(x, y - 40, 280, 150, PI, 0);
  rect(x - 130, y - 115, 260, 200, 16);

  fill(collar);
  quad(x - 15, y - 180, x - 90, y - 120, x - 60, y - 105, x - 2, y - 145);
  quad(x + 15, y - 180, x + 90, y - 120, x + 60, y - 105, x + 2, y - 145);

  stroke(seam);
  strokeWeight(2);
  line(x, y - 115, x, y + 40);
  noStroke();
  fill(210);
  for (let i = 0; i < 4; i++) ellipse(x, y - 100 + i * 35, 8, 8);

  // 포켓
  fill(collar);
  rect(x + 50, y - 100, 55, 50, 6);
  stroke(seam);
  line(x + 50, y - 80, x + 105, y - 80);
  noStroke();

  // 팔 
  let armAngle = sin(t * 1.5) * (danceMode ? 20 : 8);

  // 왼팔
  push();
  translate(x - 100, y - 50);
  rotate(radians(-40 + armAngle));
  fill(skin);
  ellipse(0, 0, 45, 100);
  pop();

  // 오른팔
  push();
  translate(x + 100, y - 50);
  rotate(radians(40 - armAngle));
  if (waveHand) rotate(radians(-90 + 10 * sin(frameCount * 0.4)));
  fill(skin);
  ellipse(0, 0, 45, 100);
  pop();
}

function drawHead(x, y, tilt, t) {
  push();
  translate(x, y);
  rotate(tilt);

  // 머리 (뒤)
  fill(hair);
  arc(0, 80, 310, 490, PI, 0);
  rect(-150, 10, 70, 280, 30);
  rect(80, 10, 70, 280, 30);

  // 머리삔
  fill(230);
  rect(-25, -100, 44, 10, 5);
  fill(205, 160, 255);
  rect(-22, -98, 38, 6, 3);

  // 얼굴
  fill(skin);
  stroke(50, 0, 0, 18);
  ellipse(0, 0, 220, 260);
  noStroke();

  // 귀
  fill(skin);
  ellipse(-108, 10, 32, 48);
  ellipse(108, 10, 32, 48);
  fill(245);
  ellipse(-108, 32, 12, 12);
  ellipse(108, 32, 12, 12);

  // 눈
  const eyeY = -20;
  const eyeDX = 50;
  fill(eyeWhite);
  ellipse(-eyeDX, eyeY, 42, 28);
  ellipse(eyeDX, eyeY, 42, 28);
  fill(eyeBlack);
  ellipse(-eyeDX, eyeY, 13, 13);
  ellipse(eyeDX, eyeY, 13, 13);

  // 안경
  noFill();
  stroke(glassesStroke);
  strokeWeight(3);
  ellipse(-eyeDX, eyeY, 60, 60);
  ellipse(eyeDX, eyeY, 60, 60);
  line(-eyeDX + 30, eyeY, eyeDX - 30, eyeY);
  noStroke();

  // 코
  stroke(120, 100);
  strokeWeight(1.8);
  noFill();
  line(0, eyeY - 4, -4, eyeY + 20);
  arc(-1, eyeY + 22, 14, 8, 0, PI);
  noStroke();

  // 입 
  fill(255, 186, 195);
  arc(0, 55, 46, 20 + 3 * sin(t), 0, PI);
  fill(lipColor);
  arc(0, 53, 46, 16 + 3 * sin(t), 0, PI);

  // 볼터치
  fill(255, 120, 140, 30);
  ellipse(-60, 28, 34, 18);
  ellipse(60, 28, 34, 18);

  pop();
}

// 마우스 클릭 → 손 흔들기
function mousePressed() {
  waveHand = !waveHand;
}

// 키보드 D → 댄스
function keyPressed() {
  if (key === 'd' || key === 'D') {
    danceMode = !danceMode;
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}
