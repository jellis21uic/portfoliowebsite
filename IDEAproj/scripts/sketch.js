var time = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    time++;
    if(time <=1000)
    {
        fill(random(255), 255, 255);
        strokeWeight(15);
        stroke(230,18,44)
    }
    if(time >= 999)
    {
        stroke(149,0,0);
        fill(255,4,3);
        ellipse(mouseY,mouseX,200,100);

    }
    else{
        blendMode(DIFFERENCE);
        ellipse(mouseX,mouseY,50)
    }
    if(mouseIsPressed)
    {
        fill(0,255,0)
        ellipse(mouseX,mouseY,75);
    }
    else {
        stroke(149,0,0);
        noFill;
        ellipse(mouseY,mouseY,200,100);
    }
}
