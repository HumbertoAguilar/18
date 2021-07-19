var satelitte, satelitteImg;
var earth, earthImg;
var groundStationLeft, groundStationRight;
var groundStationLeftImg, groundStationRightImg;
var upLinkLeft, upLinkLeftImg;
var downLinkLeft,downLinkleftImg;
var upLinkRight,upLinkRightImg
var downLinkRight, downLinkRightImg;
var text1,text2,text3,text4;

function preload(){
  satelitteImg=loadImage("satellite.png")
  
  
  
  
  
  
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  satelitte=createSprite(350,height-400,50,50)
  satelitte.addImage("satelite",satelitteImg)
  
  groundStationLeft=createSprite(width-480,450,130,50)
  groundStationRight=createSprite(width-140,450,130,50)
  upLinkRight=createSprite(width-195,300,20,300)
  upLinkRight.shapeColor="red"
  upLinkRight.visible=false
  upLinkLeft=createSprite(width-425,300,20,300);
  upLinkLeft.shapeColor="red"
  upLinkLeft.visible=false
  
  downLinkLeft=createSprite(width-425,300,20,300);
  downLinkLeft.visible=false
  downLinkLeft.shapeColor="blue"
  downLinkRight=createSprite(width-195,300,20,300);
  downLinkRight.shapeColor="blue"
  downLinkRight.visible=false
  fill("white")
  
   
  
 
  
  
}

function draw(){
  background("black")
  textSize(15)
  fill("white")
  text("Presiona las teclas L & R",20,20)
  text("-para solicitar datos al satélite",20,40)
  text("Presiona las flechas Izquierda y Derecha",20,60)
  
  

  
  if(keyDown("L")){
    upLinkLeft.visible=true
    downLinkLeft.visible=false
    text("Solicitando datos del satélite",10,300)
    
  }
  
  if(keyDown("R")){
    upLinkRight.visible=true
    downLinkRight.visible=false
    text("Solicitando datos del satélite", 270,300)
    
  }
  
  if(keyDown("left")){
    downLinkLeft.visible=true
    upLinkLeft.visible=false
    text("Transfiriendo datos",10,300)
    text(" a la estación Izquierda",10,320);
  }
  
  if(keyDown("right")){
    downLinkRight.visible=true
    upLinkRight.visible=false
    text("Transfiriendo datos",490,300)
    text("a la estación Derecha",490,320)
  }
  
  
  drawSprites();
}