//your parameter variables go here!
let x = 140;           //position and size of cup based of these
let y = 80; 
let x2 = 140;
let y2 = 80;
let s =  15;
let bx = 50;
let by = 75;

const xArray = [
  x-(2*s), x+(2*s),x+(1.5*s),x-(1.5*s),                        //0-3 cup body
  x-(2*s+s/15),x+(2*s+s/15),x+(1.5*s+s/3),x-(1.5*s+s/3),       //4-7 band
  x2+(1.8*s),x2-(1.8*s),x2-(2*s+s/4),x2+(2*s+s/4),         //8-11 cup lid bottom
  x2+(1.5*s),x2-(1.5*s),x2-(1.8*s),x2+(1.8*s)                          //12-15 cup lid top
]

const yArray = [
  y-(2*s),y-(2*s),y+(3.5*s),y+(3.5*s),                         //0-3 cup body
  y-(s),y-(s),y+(s),y+(s),                                     //4-7 cup band
  y2-(2*s+0.75*s),y2-(2*s+0.75*s),y2-(2*s),y2-(2*s),               //8-11 cup lid bottom
  y2-(3*s),y2-(3*s),y2-(2.5*s),y2-(2.5*s)                          //12-15 cup lid top
]

let dropX = x+s*3;
let dropY = y;
let dropW = s;
let dropH = s*2;

let angleBody = 0;
let angleLid = 0;

let a =15;

let lid = true;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
  angleMode(DEGREES);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(250, 244, 202); 

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  drawBean(15);
  drawBean(-20);
  drawCup();
  if(angleBody>=0 && angleBody<45){
  angleBody += a;
  }else if(angleBody >= 45){
  angleBody=0;
  }
  if(angleBody == 15){
    lid = true;
    for(let i = 8;i<16;i++){      //lid for cup 1
      Xn = xArray[i];
      Yn = yArray[i];
      xArray[i] = Xn -15;
      yArray[i] = Yn +20;
    }
   
  }else if (angleBody==30){
    lid = true;
    
    for(let i = 8;i<16;i++){      //lid cup 4
      Xn = xArray[i];
      Yn = yArray[i];
      xArray[i] = Xn -15;
      yArray[i] = Yn +20;
    }
    dropX = xArray[1] - 15;
    dropY = yArray[1] + 55;
    

  }else if (angleBody==45){
    lid = true;
    for(let i = 8;i<16;i++){      //lid cup 2
      Xn = xArray[i];
      Yn = yArray[i];
      xArray[i] = Xn -35;
      yArray[i] = Yn +25;
    }
    
    
  }else if (angleBody==0){
    lid = false;
     for(let i = 8;i<16;i++){
      Xn = xArray[i];
      Yn = yArray[i];
      xArray[i] = Xn +65;
      yArray[i] = Yn -65;
    }
    dropX = xArray[1] - 75;
    dropY = yArray[1] + 130;
    drawDrop(dropX,dropY,dropW,dropH);
  }
  
}


function drawCup() {
  if(angleBody==0){
    drawDrop(dropX+50,dropY-125,dropW,dropH);
  }
  fill(220,200,160);   
  push(); 
  rotate(angleBody);
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

  fill(150,130,70);
  ellipse(xArray[4]+(0.5*(xArray[5]-xArray[4])),yArray[5]+(0.5*(yArray[6]-yArray[5])),s,s/2);
  pop();

  if(lid == true){
  fill(255);
  push();
  rotate(angleLid)
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
  pop();
  }

}

function drawDrop(dX,dY,dW,dH){
fill(97, 64, 22);
ellipse(dX,dY,dW,dH);

}

function drawBean(bean){
  push();
  rotate(bean);
  fill(115, 68, 32,200);
  ellipse(bx,by,30,40);
  fill(72,37,20);
  rect(bx,by-20,1,40,200);
  pop();
}
