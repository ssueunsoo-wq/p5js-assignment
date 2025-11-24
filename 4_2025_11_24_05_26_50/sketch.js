
    function setup() {
      const c = createCanvas(720, 420);
      canvasElem = c.canvas; // 실제 HTMLCanvasElement 저장
      
      // HSB 컬러 모드를 사용하여 펄스 점의 색상 변경을 더 쉽게 만듭니다.
      colorMode(HSB, 360, 100, 100);
    }

    function draw() {
      background("#fffaf0");

      // --- 레이어 배경을 파스텔 컬러로 ---
      noStroke();
      fill("#e6f7ff"); rect(0, 50, width, 60);
      fill("#fff0f5"); rect(0, 160, width, 48);
      fill("#f0fff0"); rect(0, 260, width, 80);
      fill("#fefee0"); rect(0, 340, width, 44);

      // --- 오선 느낌 선들 ---
      stroke("#444"); strokeWeight(1.5);
      line(60,120,660,120);
      line(90,136,630,136);
      line(50,152,610,152);
      line(70,168,680,168);
      line(110,184,640,184);

      // --- 보조 수평선(컬러) ---
      stroke("#66b3ff"); strokeWeight(2);
      line(120,220,560,220);
      stroke("#ff99cc"); strokeWeight(1);
      line(160,236,520,236);
      stroke("#99cc99"); strokeWeight(1.5);
      line(100,252,540,252);

      // --- 세로선(마디선 느낌) ---
      stroke("#9966ff"); strokeWeight(3);
      line(200,114,200,190);
      line(360,114,360,190);
      line(520,114,520,190);

      // --- 겹치는 레이어는 반투명 컬러 ---
      noStroke();
      fill(color(255,255,255,90)); circle(420,210,160);
      fill(color(255,200,200,120)); rect(90,205,140,24);
      fill(color(200,255,200,140)); rect(480,140,120,18);

      // --- 아크 (곡선) ---
      noFill(); stroke("#ff7f50"); strokeWeight(2);
      arc(290,110,160,60,PI,TWO_PI);
      stroke("#ffcc00");
      arc(470,200,200,70,PI,TWO_PI);
      stroke("#00ced1");
      arc(610,310,120,40,PI,TWO_PI);

      // --- 점 패턴 (다양한 컬러) ---
      strokeWeight(6);
      stroke("#ff6347");
      point(150,132); point(190,148); point(230,132);
      stroke("#ff69b4");
      point(310,148); point(350,132); point(390,148);

      strokeWeight(4);
      stroke("#ffa500");
      point(250,224); point(290,224); point(330,224); point(370,224);

      strokeWeight(5);
      stroke("#66cdaa");
      point(180,262); point(220,262); point(260,262); point(300,262); point(340,262);

      strokeWeight(3);
      stroke("#1e90ff");
      point(460,236); point(490,236); point(520,236); point(550,236);

      strokeWeight(5);
      stroke("#ba55d3");
      point(440,172); point(480,172); point(520,172);

      // --- 기호 같은 짧은 선들 ---
      stroke("#ff4500"); strokeWeight(2);
      line(620,126,640,132);
      line(620,132,640,126);
      stroke("#20b2aa");
      line(80,186,98,186);
      line(82,182,96,190);

      // --- 타원(음표머리 느낌) ---
      noStroke();
      fill("#ff8c00"); ellipse(240,168,18,12);
      fill("#32cd32"); ellipse(320,152,18,12);
      fill("#ff1493"); ellipse(400,136,18,12);
      fill("#1e90ff"); ellipse(480,168,18,12);

      // --- 알록달록 포인트/악센트 ---
      fill("#ff0000"); circle(360,286,14);
      fill("#ff69b4"); circle(610,320,10);
      fill("#00ced1"); circle(140,132,8);
      fill("#ffa500"); circle(520,172,10);

      fill("#ff4500"); circle(260,118,6);
      fill("#ff6347"); circle(280,118,6);
      fill("#ff69b4"); circle(300,118,6);
      fill("#ffcc00"); circle(320,118,6);

      stroke("#ff1493"); strokeWeight(3);
      line(430,145,450,155);
      line(445,155,465,165);
      stroke("#00bfff");
      line(455,305,475,315);
      line(475,315,495,325);

      noStroke();
      fill("#d00000"); rect(610,320,4,46,2);
      fill("#ff7f50"); rect(176,242,8,28,2);

      noFill(); stroke("#ff69b4"); strokeWeight(2);
      arc(360,286,44,44,PI/6,5*PI/4);
      stroke("#ff6347");
      arc(140,132,24,24,0,PI);

      // --- 하이라이트 ---
      stroke(255,255,255,140); strokeWeight(1);
      line(100,208,225,208);
      line(470,144,590,144);

      // 움직이는 코드 (기존 오선)
      stroke(0, 0, 0, 70);
      strokeWeight(2);
      for (let i = 0; i < 5; i++) {
        let baseY = 120 + i * 16;
        let wave = sin(frameCount * 0.04 + i) * 6;
        line(60, baseY + wave, 660, baseY + wave);
      }

      // ==========================================================
      // 🔥 기존 점(point) 좌표 기반으로 '펄스 점' 효과
      // ==========================================================
      const existingPoints = [
        [150,132],[190,148],[230,132],
        [310,148],[350,132],[390,148],
        [250,224],[290,224],[330,224],[370,224],
        [180,262],[220,262],[260,262],[300,262],[340,262],
        [460,236],[490,236],[520,236],[550,236],
        [440,172],[480,172],[520,172]
      ];

      noStroke();
      for (let i = 0; i < existingPoints.length; i++) {
        let [x, y] = existingPoints[i];
        let pulse = 4 + sin(frameCount * 0.1 + i) * 3;
        fill((frameCount * 4 + i * 20) % 360, 90, 90);
        circle(x, y, pulse);
      }
      
      // 기본 RGB 모드로 되돌립니다.
      colorMode(RGB, 255);


      // ==========================================================
      // 🔥 기존 아크 위치에 연동된 아크를 ‘진동’시키기
      // ==========================================================
      noFill();
      stroke("#ff7f50");
      strokeWeight(3);
      arc(290, 110 + sin(frameCount * 0.03)*6, 160, 60, PI, TWO_PI);

      stroke("#ffcc00");
      arc(470, 200 + cos(frameCount * 0.03)*6, 200, 70, PI, TWO_PI);

      stroke("#00ced1");
      arc(610, 310 + sin(frameCount * 0.04)*4, 120, 40, PI, TWO_PI);


      // ==========================================================
      // 🔥 기존 원(circle, ellipse) 자리에서 회전 + 크기 진동
      // ==========================================================
      push();
      translate(360, 286);
      rotate(frameCount * 0.03);
      stroke("#ff0000");
      strokeWeight(4);
      noFill();
      circle(0, 0, 14 + sin(frameCount * 0.1)*6);
      pop();

      push();
      translate(610, 320);
      rotate(frameCount * 0.04);
      stroke("#ff69b4");
      strokeWeight(3);
      noFill();
      ellipse(0, 0, 14 + cos(frameCount*0.1)*6, 
                    10 + sin(frameCount*0.1)*4);
      pop();


      // ==========================================================
      // 🔥 기존 직선 장식(line) 위에 "흔들리는 선" 덧그리기
      // ==========================================================
      stroke("#ff1493");
      strokeWeight(3);
      let shake = sin(frameCount * 0.05) * 5;
      line(430, 145+shake, 450, 155+shake);
      line(445, 155+shake, 465, 165+shake);

      stroke("#00bfff");
      let shake2 = cos(frameCount * 0.05) * 5;
      line(455, 305+shake2, 475, 315+shake2);
      line(475, 315+shake2, 495, 325+shake2);


      // ==========================================================
      // 🔥 기존 세로선(마디) 흔들림 효과
      // ==========================================================
      stroke("#9966ff");
      strokeWeight(4);
      let vmove = sin(frameCount * 0.03) * 6;
      line(200, 114, 200, 190 + vmove);
      line(360, 114, 360, 190 - vmove);
      line(520, 114, 520, 190 + vmove);}