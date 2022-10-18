//to change our image slide by slide

var mainimg=document.getElementById("mainimg");
var smallimg=document.getElementsByClassName("small-img");

// if anyone click on our small image then first small source file transfer to main image
smallimg[0].onclick = function(){
    mainimg.src=smallimg[0].src;
}
smallimg[1].onclick = function(){
    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick = function(){
    mainimg.src=smallimg[2].src;
}
smallimg[3].onclick = function(){
    mainimg.src=smallimg[3].src;
}