var hypnotic_ball, database, position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnotic_ball = createSprite(250,250,10,10);
    hypnotic_ball.shapeColor = "red";
    var hypnotic_ballposition = database.ref("ball/position");
    hypnotic_ballposition.on("value",readposition, showError);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
        "x": position.x + x, 
        "y": position.y +y,

    })
}

function readposition(data)
{
    position = data.val();
    hypnotic_ball.x = position.x;
    hypnotic_ball.y = position.y;
}

function showError()
{
    console.log("Show Error if any")
}


