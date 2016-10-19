//set initial variable
	w = 820;
	h = 820;
        
	svg = d3.select(".d3-leftbar")
	.append("svg")
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 820 820")
      .attr('preserveAspectRatio','xMinYMin')
      ;
	
        var nodes = d3.range(300).map(function(i) {
  return {
    x: Math.random() * w +2,
    y: Math.random() * h +2,
    r: Math.random() * 24 + 5,
    color: Math.random()
  };
});

var simulation = d3.forceSimulation(nodes)
    .velocityDecay(0.2)
    .force("x", d3.forceX(w/2).strength(0.1))
    .force("y", d3.forceY(h/2).strength(0.1))
    .force("collide", d3.forceCollide().radius(function(d) { return d.r + 2; }).iterations(2))
    .on("tick", ticked);
	
	

circle = svg
	.selectAll(".nominated")
	.data(nodes)
        .enter()
        .append("circle")
        .attr("class","nominated")
        .attr("cx",function(d){return d.x})
	.attr("cy",function(d){return d.y})
	.attr("r",function(d){return d.r})
	.attr("fill",function(d){
            if(d.color<0.3){return "crimson"}
              else{return "steelblue"}
              })
     
function ticked() {
   svg
    .selectAll(".nominated")
    .data(nodes)
    .attr("cx",function(d){return d.x})
	.attr("cy",function(d){return d.y})
	.attr("r",function(d){return d.r})
}	
	
