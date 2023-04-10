let mapArray,ctx,currentImgMain;
let imgMountain,imgMain,imgEnemy;
const gridLength=100;
function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for(var src in sources) {
      numImages++;
    }
    for(var src in sources) {
      images[src] = new Image();
      images[src].onload = function() {
        if(++loadedImages >= numImages) {
          callback(images);
        }
      };
      images[src].src = sources[src];
    }
}
var sources = {
    mountain: 'images/material.png',
    enemy: 'images/spriteSheet.png'
};
$(function(){
    mapArray=[
        [0,0,0,1,1,1,0,1],
        [0,0,1,1,3,1,0,1],
        [0,0,0,1,0,0,0,1],
        [0,1,1,0,0,1,1,1],
        [0,1,0,0,0,0,1,0],
        [0,0,0,0,1,0,0,0],
        [0,0,1,1,1,0,0,1],
        [3,1,1,0,0,0,0,2]
    ];
    ctx=$("#myCanvas")[0].getContext("2d");
    imgMain=new Image();
    imgMain.src="images/spriteSheet.png";
    currentImgMain={"x":0,"y":0};
    imgMain.onload=function(){
        ctx.drawImage(imgMain,0,0,48,48,currentImgMain.x+20,currentImgMain.y+15,80,85);
    };
    loadImages(sources,function(images){
        for(var x in mapArray){
            for(var y in mapArray[x]){
                if(mapArray[x][y]==1){
                    ctx.drawImage(images.mountain,32.3,192.7,32,32,y*gridLength,x*gridLength,gridLength,gridLength);
                }
                else if(mapArray[x][y]==3){
                    ctx.drawImage(images.enemy,0,192,48,48,y*gridLength,x*gridLength,gridLength,gridLength);
                }
            }
        }
    });
});
$(document).on("keydown",function(event){
    let targetImg,targetBlock,cutImagePositionX,cutImagePositionY;
    targetImg={
        "x":-1,
        "y":-1
    };
    targetBlock={
        "x":-1,
        "y":-1
    }
    event.preventDefault();
    switch(event.code){
        case"ArrowLeft":
        case"KeyA":
            targetImg.x=currentImgMain.x-gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=0;
            cutImagePositionY=48;
            break;
        case"ArrowUp":
        case"KeyW":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y-gridLength;
            cutImagePositionX=0;
            cutImagePositionY=144;
            break;
        case"ArrowRight":
        case"KeyD":
            targetImg.x=currentImgMain.x+gridLength;
            targetImg.y=currentImgMain.y;
            cutImagePositionX=0;
            cutImagePositionY=96;
            break;
        case"ArrowDown":
        case"KeyS":
            targetImg.x=currentImgMain.x;
            targetImg.y=currentImgMain.y+gridLength;
            cutImagePositionX=0;
            cutImagePositionY=0;
            break;
        default:
            return;
    }
    if(targetImg.x<=700&&targetImg.x>=0&&targetImg.y<=700&&targetImg.y>=0){
        targetBlock.x=targetImg.y/gridLength;
        targetBlock.y=targetImg.x/gridLength;
    }
    else{
        targetBlock.x=-1;
        targetBlock.y=-1;
    }
    ctx.clearRect(currentImgMain.x,currentImgMain.y,gridLength,gridLength);
    if(targetBlock.x!=-1&&targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 1://有障礙物(不可移動)
                $("#talkBox").text("有山");
                break;
            case 2://終點(可移動)
                $("#talkBox").text("抵達終點");
                currentImgMain.x=targetImg.x;
                currentImgMain.y=targetImg.y;
                break;
            case 3://敵人(不可移動)
                $("#talkBox").text("哈摟");
                break;
        }
    }
    else{
        $("#talkBox").text("邊界");
    }
    ctx.drawImage(imgMain,cutImagePositionX,cutImagePositionY,48,48,currentImgMain.x+20,currentImgMain.y+15,80,85);
});
