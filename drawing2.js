const drawing = p5 => {

    p5.setup = () => {
        p5.createCanvas(600, 600);
    }

    p5.draw = () => {
        p5.background(230, 230, 230)

let p1 = [p5.width * 0.2, p5.height * 0.3];
let p2 = [p5.width * 0.15, p5.height * 0.375];
let p3 = [p5.width * 0.175, p5.height * 0.3375];
let p4 = [p5.width * 0.8, p5.height * 0.6];
let p6 = [p5.width * 0.75, p5.height * 0.675];
let p7 = [p5.width * 0.775, p5.height * 0.6375];
let p8 = [p5.width * 0.875, p5.height * 0.7];

p5.line(p1[0], p1[1], p4[0], p4[1])
p5.line(p2[0], p2[1], p6[0], p6[1])
p5.line(p3[0], p3[1], p7[0], p7[1])
p5.line(p6[0], p6[1], p4[0], p4[1])
p5.line(p2[0], p2[1], p1[0], p1[1])
p5.line(p1[0], p1[1], p4[0], p4[1])
p5.line(p4[0], p4[1], p8[0], p8[1])
p5.line(p6[0], p6[1], p8[0], p8[1])
    }



    p5.mousePressed = () => {
        console.log("Mouse Pressed!");
    }
}

new p5(drawing);