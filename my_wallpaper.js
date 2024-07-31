//your parameter variables go here!
let x = 130;           //position and size of cup based of these
let y = 25; 
let s =  20;

const xArray = [
  x-(2*s), x+(2*s),x+(1.5*s),x-(1.5*s),                        //0-3 cup body
  x-(2*s+s/15),x+(2*s+s/15),x+(1.5*s+s/3),x-(1.5*s+s/3),       //4-7 band
  x+(1.8*s),x-(1.8*s),x-(2*s+s/4),x+(2*s+s/4),         //8-11 cup lid bottom
  x+(1.5*s),x-(1.5*s),x-(1.8*s),x+(1.8*s)                          //12-15 cup lid top
]

const yArray = [
  y-(2*s),y-(2*s),y+(3.5*s),y+(3.5*s),                         //0-3 cup body
  y-(s),y-(s),y+(s),y+(s),                                     //4-7 cup band
  y-(2*s+0.75*s),y-(2*s+0.75*s),y-(2*s),y-(2*s),               //8-11 cup lid bottom
  y-(3*s),y-(3*s),y-(2.5*s),y-(2.5*s)                          //12-15 cup lid top
]

let dropx = x+s*3;
let dropy = y;
let dropw = s;
let droph = s*2;

let angle = 45;
let count = 0;

function draw(){
my_symbol();


}


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  angleMode(DEGREES);
  frameRate(10);
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  drawCup();
  angle += 45;
  //drawDrop();
}


function drawCup() {
  fill(220,200,160);    
  rotate(angle);
  beginShape();                               //body
  vertex(xArray[0],yArray[0]);
  vertex(xArray[1],yArray[1]);
  vertex(xArray[2],yArray[2]);
  vertex(xArray[3],yArray[3]);
  endShape(CLOSE);

  fill(180,160,100);    
  beginShape();                               //body band
  vertex(xArray[4],yArray[4]);
  vertex(xArray[5],yArray[5]);
  vertex(xArray[6],yArray[6]);
  vertex(xArray[7],yArray[7]);
  endShape(CLOSE);

  fill(255);

  beginShape();                                //lid top
  vertex(xArray[12],yArray[12]);
  vertex(xArray[13],yArray[13]);
  vertex(xArray[14],yArray[14]);
  vertex(xArray[15],yArray[15]);
  endShape(CLOSE);

  beginShape();                                 //lid bottom
  vertex(xArray[8],yArray[8]);
  vertex(xArray[9],yArray[9]);
  vertex(xArray[10],yArray[10]);
  vertex(xArray[11],yArray[11]);
  endShape(CLOSE);

}

function drawDrop(){
fill(82,47,20);
ellipse(dropx,dropy,dropw,droph);
}
