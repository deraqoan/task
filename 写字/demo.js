var canvasWidth = 800;
var canvasHeight = canvasWidth;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var isMouseDown = false;
var strokeColor = "black";
var lastLoc = {x:0,y:0};
var lastTimestamp = 0;
var lastLineWidth = -1;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
$("#controller").css("width",canvasWidth+"px");
drawGrid();
$("#clear_btn").click(
    function(e){
        context.clearRect( 0 , 0 , canvasWidth, canvasHeight );
        drawGrid();
    }
);
$(".color_btn").click(
    function(e){
        $(".color_btn").removeClass("color_btn_selected");
        $(this).addClass("color_btn_selected");
        strokeColor = $(this).css("background-color");
    }
);
canvas.onmousedown = function  (e) {
	e.preventDefault();
	isMouseDown = true;
	lastLoc = windowToCanvas(e.clientX,e.clientY);
	lastTimestamp = new Date().getTime();
};
canvas.onmouseup = canvas.onmouseout = function  (e) {
	e.preventDefault();
	isMouseDown = false;
};
canvas.onmousemove = function  (e) {
	e.preventDefault();
	if(isMouseDown){
		//draw
		var curLoc = windowToCanvas(e.clientX,e.clientY);
		var curTimestamp = new Date().getTime();
		var s = Math.sqrt((curLoc.x-lastLoc.x)*(curLoc.x-lastLoc.x)-(curLoc.y-lastLoc.y)*(curLoc.y-lastLoc.y));
		var t = curTimestamp - lastTimestamp;
		var lineWidth = calcLineWidth( t , s );
		context.beginPath();
		context.moveTo(lastLoc.x,lastLoc.y);
		context.lineTo(curLoc.x,curLoc.y);
		context.strokeStyle = strokeColor;
		context.lineWidth = lineWidth;
		context.lineCap = "round";
		context.lineJoin = "round";
		context.closePath();
		context.stroke();
		lastLoc = curLoc;
		lastTimestamp = curTimestamp;
		lastLineWidth = lineWidth;
	}
};

function calcLineWidth( t , s ){
    var v = s / t;

    var resultLineWidth;
    if( v <= 0.1 )
        resultLineWidth = 30;
    else if ( v >= 10 )
        resultLineWidth = 5;
    else{
        resultLineWidth = 31 - 2.6*v;
    }
    if( lastLineWidth == -1 ){
        return 20;}
    return resultLineWidth;
}
function windowToCanvas (x,y) {
	var bbox = canvas.getBoundingClientRect();
	return {x:Math.round(x-bbox.left) , y:Math.round(y-bbox.top)};
}
function drawGrid( )  {
context.strokeStyle = 'rgb(230,11,9';
context.beginPath();
context.moveTo(3,3);
context.lineTo(canvasWidth-3,3);
context.lineTo(canvasWidth-3,canvasHeight-3);
context.lineTo(3,canvasHeight-3);
context.closePath();
context.lineWidth = 6;
context.stroke();
context.beginPath();
context.moveTo(0,0);
context.lineTo(canvasWidth,canvasHeight);
context.moveTo(0,canvasHeight);
context.lineTo(canvasWidth,0);
context.moveTo(0,canvasHeight/2);
context.lineTo(canvasWidth,canvasHeight/2);
context.moveTo(canvasWidth/2,0);
context.lineTo(canvasWidth/2,canvasHeight);
context.lineWidth = 1;
context.stroke();
context.restore();
}