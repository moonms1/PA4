Template.draw.events({
	"click #drawIt": function(event){
		drawBox();
		window.requestAnimationFrame(drawStuff);
	}
})

function drawBox() {
	drawContext = drawSpace.getContext("2d");
	drawContext.strokeStyle="	#00008B"; // or green or "#fff"
	drawContext.moveTo(100,100);
	drawContext.lineTo(150,100);
  	drawContext.lineTo(150,50);
	drawContext.lineTo(100,50);
	drawContext.lineTo(100,100);
	drawContext.stroke();
}
