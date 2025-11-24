

const skin = [247, 224, 206];
const hair = [20, 20, 22];
const eyeWhite = [250, 250, 252];
const eyeBlack  = [18, 18, 20];
const glassesStroke = [40, 40, 42];
const lipColor = [180, 68, 86];

let W = 600, H = 400;

function setup(){
  createCanvas(W, H);
  noLoop();
}

function draw(){
  background(220, 200, 255); // 연보라 배경

  const cx = W/2;
  const cy = H/2 - 20;

  // 목
  noStroke();
  fill(skin);
  rect(cx-30, cy+50, 60, 40, 10);

  // 셔츠(어깨+몸통)
  const shirt = [235, 238, 255];
  const collar = [215, 220, 250];
  const seam = [190, 195, 230];
  fill(shirt);
  arc(cx, cy+110, 200, 120, PI, 0);
  rect(cx-90, cy+90, 180, 110, 12);

  // 카라
  fill(collar);
  quad(cx-10, cy+70, cx-60, cy+100, cx-40, cy+115, cx-2, cy+85);
  quad(cx+10, cy+70, cx+60, cy+100, cx+40, cy+115, cx+2, cy+85);

  // 버튼 라인
  stroke(seam); strokeWeight(1.5);
  line(cx, cy+90, cx, cy+180);
  noStroke(); fill(210);
  for(let i=0;i<3;i++) ellipse(cx, cy+95+i*28, 6, 6);

  // 포켓
  fill(collar);
  rect(cx+35, cy+95, 35, 35, 6);
  stroke(seam); line(cx+35, cy+110, cx+70, cy+110); noStroke();

  // 머리 (뒤)
  fill(hair);
  arc(cx, cy, 230, 320, PI, 0);
  rect(cx-120, cy-10, 55, 200, 20);
  rect(cx+65, cy-10, 55, 200, 20);

  // 얼굴
  fill(skin);
  stroke(0,0,0,15);
  ellipse(cx, cy, 150, 190);
  noStroke();

  // 귀
  fill(skin);
  ellipse(cx-80, cy, 25, 40);
  ellipse(cx+80, cy, 25, 40);

  // 귀걸이
  fill(245);
  ellipse(cx-80, cy+18, 10, 10);
  ellipse(cx+80, cy+18, 10, 10);

  // 머리삔
  drawHairPin(cx-70, cy-80);

  // 눈
  const eyeY = cy - 10;
  const eyeDX = 40;
  fill(eyeWhite);
  ellipse(cx-eyeDX, eyeY, 32, 20);
  ellipse(cx+eyeDX, eyeY, 32, 20);
  fill(eyeBlack);
  ellipse(cx-eyeDX, eyeY, 10, 10);
  ellipse(cx+eyeDX, eyeY, 10, 10);
  fill(255);
  ellipse(cx-eyeDX-3, eyeY-3, 4, 4);
  ellipse(cx+eyeDX-3, eyeY-3, 4, 4);

  // 안경
  noFill(); stroke(glassesStroke); strokeWeight(2.5);
  ellipse(cx-eyeDX, eyeY, 46, 46);
  ellipse(cx+eyeDX, eyeY, 46, 46);
  line(cx-eyeDX+23, eyeY, cx+eyeDX-23, eyeY);

  // 코
  stroke(120, 100); strokeWeight(1.5); noFill();
  line(cx, eyeY-3, cx-3, eyeY+15);
  arc(cx-1, eyeY+18, 10, 6, 0, PI);

  // 입
  noStroke(); fill(255, 186, 195);
  arc(cx, cy+38, 36, 16, 0, PI);
  fill(lipColor);
  arc(cx, cy+37, 36, 14, 0, PI);

  // 볼터치
  fill(255, 120, 140, 40);
  ellipse(cx-40, cy+15, 22, 12);
  ellipse(cx+40, cy+15, 22, 12);
}

function drawHairPin(x, y){
  push();
  fill(230); noStroke();
  rect(x-14, y-3, 28, 6, 3);
  fill(255, 60, 80);
  rect(x-12, y-2, 24, 4, 2);
  pop();
}