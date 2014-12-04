var delayData_0 = [];

d3.csv("data/2011-2013_Median_Summary_Rounded.csv", function(error, data) {
	delayData_0 = d3.nest().key(function(d) { return d.AIRPORT;}).key(function(d) { return d.YEAR;}).key(function(d) { return d.MONTH;}).entries(data);

	var selectAirport = d3.select("#airportCode").append("select").attr("id", "airport-list");

	selectAirport.selectAll("option").data(delayData_0).enter().append("option")
	  .attr("value", function(d) { return d.key; })
	  .text(function(d) { return d.key; });
	  
	var selectYear = d3.select("#year").append("select").attr("id", "yearValue").on("change",updateDay);

	selectYear.selectAll("option").data(delayData_0[0].values).enter().append("option")
	  .attr("value", function(d) { return d.key; })
	  .text(function(d) { return d.key; });	 

	var selectMonth = d3.select("#month").append("select").attr("id", "monthValue").on("change",updateDay);

	selectMonth.selectAll("option").data(delayData_0[0].values[0].values).enter().append("option")
	  .attr("value", function(d) { return d.key; })
	  .text(function(d) { return d.key; });	  
	
	updateDay();
	

});

function updateDay(){

d3.select("#dayValue").remove();

var yearNumber = getYear();
var monthNumber = getMonth();	

var selectMonth = d3.select("#day").append("select").attr("id", "dayValue");

selectMonth.selectAll("option").data(delayData_0[0].values[yearNumber-2011].values[monthNumber-1].values).enter().append("option")
  .attr("value", function(d) { return d.DAY_OF_MONTH; })
  .text(function(d) { return d.DAY_OF_MONTH; });	 

};	 


function getYear(){
  var node = document.getElementById("yearValue")
  return node.options[node.selectedIndex].value
}

function getMonth(){
  var node = document.getElementById("monthValue")
  return node.options[node.selectedIndex].value
}

function getDay(){
  var node = document.getElementById("dayValue")
  return node.options[node.selectedIndex].value
}
