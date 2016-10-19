//set initial variable
	w = 820;
	d3scale = w/820;
	h = w;
	rheight = d3scale*20;
	padding = d3scale*10;
	
	
	var selected = [true,true,true,true],
	selectAll = true;
	
	svg = d3.select(".d3-content")
	.append("svg")
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 820 820");
	
	svgl=svg.append("g");
	
	svg.append("text") //dummytext for font-sizing
        .attr("y","-20")
	.text("dummy")
        .style("font-size","15px")
	.each(function(){
	      textheight = d3.select(this).node().getBoundingClientRect().height;
	});
	
	rScale = d3.scaleLinear()
	.domain([0, 3])
	.range([0, d3scale*3*12/2]);
	
	xScale = d3.scaleLinear()
	.domain([0, 820])
	.range([0, w]);
	
	yScale = d3.scaleLinear()
	.domain([0, 820])
	.range([10, h+10]);
	
	d3.csv("positions_circle.csv", function row(d) {
            if(d.r>2){xPos=Math.random()*w/2+w/4,yPos=Math.random()*h/2+h/4}else{xPos=Math.random()*w,yPos=Math.random()*h}
  return {
      index: +d.index,
      name: d.name,
    x: Math.random()*w,
    y: yPos,
    r: +d.r,
    won: +d.won // convert "Length" column to number
  };
},function(error,dataset) {
		draw(dataset);	
          });
	
	
	
	function setColor(value){
		switch(value){
			case 1: color="#378e43"
			break;
			case 2: color="#fdc010"
			break;
			case 3: color="#ef4437"
			break;
			default: color="#3d82c4"
		}
		
		return color;
	}
	
	var defs = svg
            .append("defs")

var filter = defs.append("filter")
            .attr("x",0)
            .attr("y",0)
            .attr("width",1)
            .attr("height",1)
            .attr("id","solid")
            
filter.append("feFlood")
.attr("flood-color","#202020")
.attr("flood-opacity",0.4)

filter.append("feComposite")
.attr("in","SourceGraphic")
		
		
	function draw(dataset){
            legend = svgl.selectAll(".legend").data(selected);
		
		legend.enter()
		.append("circle")
		.attr("class","legend")
		.attr("cx",function(d,m){return w-padding-2*m*(rScale(4)+4*d3scale)-rScale(4)})
		.attr("cy",h-padding-rScale(4))
		.attr("r",rScale(4))
		.attr("stroke",function(d,m){
			return setColor(m)
			})
		.attr("stroke-width",2)
		.attr("fill",function(d,m){
			return setColor(m)
			})
		.on("mouseover",function(){
			d3.select(this).attr("r",rScale(5));
		})
		.on("mouseout",function(){
			d3.select(this).attr("r",rScale(4));
		})
		.on("click",function(d,m){
                  console.log(m);
                  svgl.selectAll(".legend").attr("fill","#262626");
                  d3.select(this).attr("fill",setColor(m));
	        svg
		.selectAll("circle.nominated")
		.data(dataset).attr("fill","#262626").filter(function(l){return l.won==m}).attr("fill",function(l){return setColor(l.won)});
                
	        svg.selectAll("circle.won")
		.data(dataset).attr("fill","#262626").filter(function(l){return l.won==m}).attr("fill",function(l){return setColor(l.won)});
		});
                
		circle = svg
		.selectAll("circle.nominated")
		.data(dataset)
		
		circleWon = svg
		.selectAll("circle.won")
		.data(dataset)
		
		circle
		.enter()
		.append("circle")
		.attr("class","nominated")
		.attr("cx",w/2)
		.attr("cy",h/2)
		.attr("r",function(d){return rScale(+d.r)})
		.attr("fill",function(d){return setColor(+d.won)})
                .attr("stroke","white").attr("stroke-width","0px")
		.on("mouseover", function(d){
                  d3.select(this).attr("stroke-width","2px")
			var cx=Number(d3.select(this).attr("cx"));
			var cy=Number(d3.select(this).attr("cy"));
			if(selected[d.won]){
			svg
			.append("text")
			.attr("filter","url(#solid)")
			.attr("class","text")
			.attr("text-anchor","middle")
			.text(d.name)
			.style("font-size","17px")
			.attr("x", cx)
			.attr("y", cy+5)
			.style("pointer-events","none");
			}
			})
		.on("mouseout", function(d){
                  d3.select(this).attr("stroke-width","0px")
			svg.selectAll("text.text")
			.remove();
			})
		
		circleWon
		.enter()
			.append("circle")
			.attr("class","won")
			.attr("cx",w/2)
			.attr("cy",h/2)
			.attr("r",function(d){return rScale(+d.won)})
			.attr("fill",function(d){return setColor(+d.won)})
			.style("pointer-events","none")
                        
                  var simulation = d3.forceSimulation(dataset)
    .velocityDecay(0.2)
    .force("x", d3.forceX(w/2).strength(0.01))
    .force("y", d3.forceY(h/2).strength(0.01))
    .force("collide", d3.forceCollide().radius(function(d) { return rScale(d.r) + 2; }).iterations(2))
    .on("tick", ticked)
    .on("end",exportPos);
    
    svg.selectAll(".nominated").data(dataset)
    .call(d3.drag()
      .on("start",dragstarted)
      .on("drag",dragged)
      .on("end",dragended)
      );
    
    function dragstarted(d){
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    }
    
    function dragged(d){
      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }
    
    function dragended(d){
      if (!d3.event.active) simulation.alphaTarget(0);
    }
    
    function ticked() {
   svg
    .selectAll(".nominated")
    .data(dataset)
    .attr("cx",function(d){return xScale(d.x)})
	.attr("cy",function(d){return yScale(d.y)})
	.attr("r",function(d){return rScale(d.r)});
        
        svg
    .selectAll(".won")
    .data(dataset)
    .attr("cx",function(d){return xScale(d.x)})
	.attr("cy",function(d){return yScale(d.y)})
}

function exportPos(){
      var datastring=[];
      svg.selectAll(".nominated").data(dataset).each(function(d){datastring.push(d.name+","+d.x+","+d.y+","+d.r+","+d.won)});
      //console.log(datastring);
}
	}


	
        
	
	
	
	
	
	
