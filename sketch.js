var canvas,bg;
var tom,tomimg1,tomimg2;
var jerry,jerryimg1,jerryimg2;
var together;



function preload() {
    //load the images here
bg=loadImage("images/garden.png")
tomimg1=loadAnimation("images/cat1.png")
tomimg2=loadAnimation("images/cat2.png","images/cat3,png")
tomimg3=loadAnimation("images/cat4.png")
jerryimg1=loadAnimation("images/mouse1.png")
jerryimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
jerryimg3=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites her
tom=createSprite(870,600);
tom.addAnimation("tomsleeping",tomimg1)
tom.scale=0.2

jerry=createSprite(870,600);
jerry.addAnimation("jerrystanding",jerryimg1)
jerry.scale=0.15





}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x-jerry.x< (tom.width-jerry.width)/2){
    tom.velocityX=0;
    tom.addAnimation("tomlastimg",tomimg3);
    tom.x=300
    tom.scale=0.2
tom.changeAnimation("tomlastimg")
jerry.addAnimation("jerrylastimg",jerryimg3)
jerry.scale=0.15
jerry.changeAnimation("jerrylastimg")

}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
{
    tom.velocityX=-5;
    tom.addAnimation("tomrunning",tomimg2)
    tom.changeAnimation("tomrunning")
jerry.addAnimation("jerryteasing",jerryimg2)
jerry.frameDelay=25;
jerry.changeAnimation("jerryteasing")


}

}
