let isBroken = false;

function drawPencil(p5, x, y, width, height){

let pencilTopRight = [x + width * 0.2, y + height * 0.3];
let pencilTopLeft = [x + width * 0.15, y + height * 0.375];
let leftLineTop = [x + width * 0.16666, y + height * 0.35];
let rightLineTop = [x + width * 0.18333, y + height * 0.325];
let pencilBottomRight = [x + width * 0.8, y + height * 0.6];
let pencilBottomLeft = [x + width * 0.75, y + height * 0.675];
let leftLineBottom = [x + width * 0.76666, y + height * 0.65];
let rightLineBottom = [x + width * 0.78333, y + height * 0.625];

let rightPencilTip =  [x + width * 0.85294, y + height * 0.67058];
let leftPencilTip = [x + width * 0.83823, y + height * 0.69264];
let pencilTip = [x + width * 0.875, y + height * 0.7];

//pencil tip
p5.stroke(255, 255, 100)
p5.strokeWeight(3)
p5.fill(255, 255, 150)
p5.triangle(pencilBottomLeft[0], pencilBottomLeft[1], 
    pencilBottomRight[0], pencilBottomRight[1],
    pencilTip[0], pencilTip [1])

//pencil body
p5.stroke(255, 180, 0)
p5.strokeWeight(4)
p5.line(pencilTopRight[0], pencilTopRight[1], pencilBottomRight[0], pencilBottomRight[1]);
p5.line(pencilTopLeft[0], pencilTopLeft[1], pencilBottomLeft[0], pencilBottomLeft[1]);
p5.line(pencilBottomLeft[0], pencilBottomLeft[1], pencilBottomRight[0], pencilBottomRight[1]);
p5.fill(85)

//pencil ridges
p5.stroke(255, 200, 0)
p5.strokeWeight(2)
p5.line(rightLineTop[0], rightLineTop[1], rightLineBottom[0], rightLineBottom[1]);
p5.line(leftLineTop[0], leftLineTop[1], leftLineBottom[0], leftLineBottom[1]);

//pencil lead
p5.stroke(85)
p5.strokeWeight(2.75)
p5.fill(85)
if (isBroken){
    p5.stroke(252)
    p5.fill(252)
}
p5.triangle(rightPencilTip[0], rightPencilTip[1],
    leftPencilTip[0], leftPencilTip[1], 
    pencilTip[0], pencilTip[1])

//new pencil lead
if (isBroken){
    let newRightPencilTip =  [p5.mouseX - 13.263, p5.mouseY - 17.652];
    let newLeftPencilTip = [p5.mouseX - 22.062, p5.mouseY - 4.416];
    let newPencilTip = [p5.mouseX, p5.mouseY]

    p5.stroke(85)
    p5.strokeWeight(2.75)
    p5.fill(85)
    p5.triangle(newLeftPencilTip[0], newLeftPencilTip[1], 
        newRightPencilTip[0], newRightPencilTip [1],
        newPencilTip[0], newPencilTip[1])
}
}

function drawEx(p5, x, y, width, height){
p5.stroke(10)
p5.strokeWeight(10)
p5.line(x + width * 0.2, y + height * 0.62, x + width * 0.275, y + height * 0.695)
p5.line(x + width * 0.2, y + height * 0.695, x + width * 0.275, y + height * 0.62)
}

const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
        }

    p5.draw = () => {
        p5.background(252)

        drawEx(p5, 0, -28, 650, 650)

        p5.line(p5.width * 0.35, p5.height * 0.725, 
            p5.width, p5. height * 0.725)

            if(isBroken){
                //O
                p5.noFill()
                p5.strokeWeight(2)
                p5.stroke(85)
                p5.ellipse(p5.width * 0.26, p5.height * 0.15, 
                        p5.width * 0.1, p5.height * 0.2);
                //H        
                p5.line(p5.width * 0.33, p5. height * 0.05, 
                        p5.width * 0.33, p5. height * 0.25);
                p5.line(p5.width * 0.43, p5. height * 0.05,
                        p5.width * 0.43, p5. height * 0.25);
                p5.line(p5.width * 0.33, p5.height * 0.15,
                        p5.width * 0.43, p5.height * 0.15);
                //S 
                p5.arc(p5.width * 0.53, p5.height * 0.1, 
                    p5.width * 0.1, p5.height * 0.1,
                    Math.PI * 0.5, Math.PI * 1.75);
                p5.arc(p5.width * 0.53, p5.height * 0.2, 
                    p5.width * 0.1, p5.height * 0.1,
                    Math.PI * 1.5, Math.PI * 0.75);
                //N
                p5.line(p5.width * 0.60, p5.height * 0.05,
                        p5.width * 0.60, p5.height * 0.25);
                p5.line(p5.width * 0.60, p5.height * 0.05,
                        p5.width * 0.70, p5.height * 0.25);
                p5.line(p5.width * 0.70, p5.height * 0.05,
                        p5.width * 0.70, p5.height * 0.25);
                //A
                p5.line(p5.width * 0.72, p5.height * 0.25,
                        p5.width * 0.77, p5.height * 0.05);
                p5.line(p5.width * 0.77, p5.height * 0.05,
                        p5.width * 0.82, p5.height * 0.25);
                p5.line(p5.width * 0.745, p5.height * 0.15,
                        p5.width * 0.795, p5.height * 0.15);
                //P
                p5.line(p5.width * 0.84, p5.height * 0.05,
                        p5.width * 0.84, p5.height * 0.25);
                p5.arc(p5.width * 0.89, p5.height * 0.1,
                        p5.width * 0.1, p5.height * 0.1,
                    Math.PI * 1.5, Math.PI * 0.5);
                p5.line(p5.width * 0.84, p5.height * 0.05,
                        p5.width * 0.89, p5.height * 0.05);
                p5.line(p5.width * 0.84, p5.height * 0.15,
                        p5.width * 0.89, p5.height * 0.15);
                //!
                p5.line(p5.width * 0.96, p5.height * 0.05,
                        p5.width * 0.96, p5.height * 0.2);
                p5.circle(p5.width * 0.96, p5.height * 0.245, 
                        p5.height * 0.01);
            }  

        drawPencil(p5, -395, -110, 700, 700)
}


p5.mousePressed = () => {
        console.log("Mouse Pressed!")
        isBroken = !isBroken;
        }
}

new p5(drawing);
