canvas=document.getElementById("my_Canvas");
ctx=canvas.getContext("2d");
roverwide=100;
roverheight=90;
marsBackground="mars.jpg";
roverImage="rover.png";
roverX=10;
roverY=10;

function add(){
    backgroundAlpha=new Image();
    backgroundAlpha.onload=uploadBackground;
    backgroundAlpha.src=marsBackground;

    roverBravo=new Image();
    roverBravo.onload=uploadRover;
    roverBravo.src=roverImage;
} 
function uploadBackground(){
    ctx.drawImage(backgroundAlpha,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(roverBravo,roverX,roverY,roverwide,roverheight);
}
 
window.addEventListener("keydown",my_Keydown);
function my_Keydown(e){

    keypressed=e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        up();
        console.log("up");

    }

    if(keypressed=="40"){
        down();
        console.log("down");

    }

    if(keypressed=="37"){
        left();
        console.log("left");

    }

    if(keypressed=="39"){
        right();
        console.log("right");

    }
}
function up(){
    if(roverY >= 0){
        roverY= roverY-10;
        uploadBackground();
        uploadRover();
    }

    
    function down(){
        if(roverY <= 500){
            roverY= roverY+10;
            uploadBackground();
            uploadRover();
        }
    }

        function left(){
            if(roverX >= 0){
                roverX= roverX-10;
                uploadBackground();
                uploadRover();
            }
        }
            function right(){
                if(roverX >= 700){
                    roverX= roverX+10;
                    uploadBackground();
                    uploadRover();
                }
            }
}