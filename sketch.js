var capture;

var factor = 1;

//var ballA = false;

//var ballB = false;

function setup() {
  
createCanvas(640, 480);

capture = createCapture(VIDEO);

capture.size(640, 480);

capture.hide();

}

function draw() {
    
background(255);
 
var myImg  = capture.loadPixels();
  
  for (var x = 10; x < width; x += 10) {
    for (var y = 10; y < height; y += 10) {

      var myPixel = myImg.get(x, y);
      var valueB = brightness(myPixel);
      //var distance = dist(x, y, 150, 150);
      //console.log(distance);
      fill(myPixel);
      noStroke();
      var radius = 40 * valueB / 255 * factor;
      ellipse(x, y, radius);
      if (x == 150 && y == 150 && radius < 5) {
        fill(255, 0, 0);
        ellipse(150, 150, 50, 50);
//        ballA = false;
//      }else{
//        ballA = true;
      }
        
      if (x == 490 && y == 150 && radius < 5) {
        fill(255, 0, 0);
        ellipse(490, 150, 50, 50);
//        ballB = false;
//      }else{
//        ballB = true; 
      }
    
//      if(ballA && ballB){
//        fill(220);
//        ellipse(320, 150, 50, 50);
//      }else{
//        fill(255, 0, 0);
//        ellipse(320, 150, 50, 50); 
//      }

  }
  }
    fill(255);
    rect(150,30,340,70);  
    textAlign(CENTER);
    textSize(15);
    fill(0, 0, 150);
    text("Press 1 or 2 to adjust the display", 320, 50);
    text("Make sure you can see the two balls", 320, 70); 
    text("Then hands up and try to catch the balls", 320, 90);
}

function keyReleased() {
if (key == '1') {
    factor -= 0.2;
  }
if (key == '2') {
    factor += 0.2;
  }
 }
