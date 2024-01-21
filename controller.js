const controller = document.querySelectorAll("input");
controller[0].oninput = function() {
    detail = Number(this.value);
    renderGraph();
}
controller[1].oninput = function() {
    rangeX = Number(this.value);
    renderGraph();
}
controller[2].oninput = function() {
    rangeY = Number(this.value);
    renderGraph();
}
controller[3].oninput = function() {
    thickness = Number(this.value);
    renderGraph();
}
const inputGraph = document.getElementById("inputGraph");
inputGraph.addEventListener("input",function() {
    graph = this.value;
    renderGraph();
});