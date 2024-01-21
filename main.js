const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

function f(x) {
    return eval(graph);
}

function setCanvasAutosize() {
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
}
setCanvasAutosize();


let graph = "Math.sin(x)"
let rangeX = 100;
let rangeY = 30;
let jumpX = 0;
let detail = 500;
let thickness = 2;

function clearGraph() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = 'gray';
    ctx.fillRect(0,canvas.height/2,canvas.width,2);
    ctx.fillRect(canvas.width/2, 0, 2, canvas.height);
}

function renderGraph() {
    clearGraph();
    for(let i=-rangeX/2; i<=rangeX/2; i += 1/detail) {
        let y = f(i);
        ctx.fillStyle = 'white';
        ctx.fillRect(jumpX, (canvas.height / 2) - y*rangeY, thickness, thickness);
        jumpX += (canvas.width / rangeX) / detail;
    }
    jumpX = 0;
}
renderGraph();
