//Based on Stephen Few's 9 color-palette  http://www.mulinblog.com/a-color-palette-optimized-for-data-visualization/
function colorSFewParent(){
	var color = ["#4D4D4D","#5DA5DA","#FAA43A","#60BD68","#F17CB0","#B2912F","#B276B2","#DECF3F","#F15854"];
return color;
};

//Create "division" number of gradually changing colors based on a given color with given "min" and "max" brightness 
function colorChildrenDisc(colorParent,min,max,division){
	var colorChildren = [];
	colorChildren[0] = d3.rgb(colorParent).darker([min]);
	for (var i=1;i<=division-2;i++) {
		colorChildren[i] = d3.rgb(colorChildren[i-1]).darker([(max-min)/division]);
	};
    colorChildren[division-1] = d3.rgb(colorParent).darker([max]);
	return colorChildren;
};