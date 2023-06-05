let tempvolume;
let turn=0;
$(function(){
    $("#myVideo").attr("src","sample-mp4-file.mp4");
    $("#playBtn").on("click",function(){
        $("#volumeDisplay").text($("#myVideo")[0].volume.toFixed(2));
        $("#progressBar")[0].max =$("#myVideo")[0].duration;
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#playBtn").text("Pause");
        }
        else{
            $("#myVideo")[0].pause();
            $("#playBtn").text("Play");
        }
    });
    $("#fullBtn").on("click",function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn").on("click", downVolume);
    $("#higherVolumeBtn").on("click", upVolume);
    $("#nomusicBtn").on("click", closeVolume);
    $("#musicBtn").on("click", openVolume);
    $("#turnBtn").on("click", turnvideo);
    $("#speedBtn").on("click", speedup);
    $("#normalBtn").on("click", speeddown);
    $("#myVideo").on("timeupdate",updateProgress);
    $("#progressBar").on("change",changeProgress);
});
function downVolume() {
    var myVideo=$("#myVideo")[0];
    if(myVideo.volume==0) {

    } 
    else if(myVideo.volume<0.1) {
        myVideo.volume=0;
    } 
    else{
        myVideo.volume=myVideo.volume-0.1;
    }
    tempvolume=myVideo.volume;
    volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
}
function upVolume() {
    var myVideo=$("#myVideo")[0];
    if(myVideo.volume==1) {

    } 
    else if(myVideo.volume>0.9) {
        myVideo.volume=1;
    } 
    else{
        myVideo.volume=myVideo.volume+0.1;
    }
    tempvolume=myVideo.volume;
    volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
}
function closeVolume() {
    var myVideo=$("#myVideo")[0];
    if(myVideo.volume!=0)
        tempvolume=myVideo.volume;
    myVideo.volume=0;
    volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
}
function openVolume() {
    var myVideo=$("#myVideo")[0];
    myVideo.volume=tempvolume;
    volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
}

function updateProgress(){
    $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
    $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
    $("#progressBar")[0].value =$("#myVideo")[0].currentTime;
}
function changeProgress(){
    $("#myVideo")[0].currentTime=$("#progressBar")[0].value;
}
function turnvideo(){
    if(turn==0){
        $("#myVideo").attr("src","007.mp4");
        $("#progressBar")[0].max =$("#myVideo")[0].duration;
        turn=1;
    }
    else{
        $("#myVideo").attr("src","sample-mp4-file.mp4");
        $("#progressBar")[0].max =$("#myVideo")[0].duration;
        turn=0;
    }
    $("#myVideo")[0].pause();
    $("#playBtn").text("Play");
}
function speedup(){
    document.querySelector("#myVideo").playbackRate=4.0;   
}
function speeddown(){
    document.querySelector("#myVideo").playbackRate=1.0;   
}
let videoChannel=[
    "sample-mp4-file.mp4",
    "007.mp4"
]
