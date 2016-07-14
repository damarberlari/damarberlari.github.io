var dataset =
[
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
]


var	width = 1000,
   	height = 1000,
	padding = 20,
	fontSize = 12;

var   	barColor = ["#FFC107", "#FEB70A", "#FDAD0E", "#FCA311", "#FB9A15", "#FA9019", "#F9861C", "#F97D20", "#F87323", "#F76927", "#F6602B", "#F5562E", "#F44C32", "#F44336"];
 
var     svg = d3.select('.d3-content').append('svg')
	.attr('width', '100%')
	.attr('height', '100%') 
	.attr('viewBox',"0 0 1000 1000");
	
var color = d3.scaleOrdinal(d3.schemeCategory20);

var   	svgg = svg.append('g').attr('id','gradient').append("defs");
var   	svgl = svg.append('g').attr('id','line');
var   	svgc = svg.append('g').attr('id','dots');
var   	svgt = svg.append('g').attr('id','text');

var 	gradient = 	svgg
			.append("linearGradient")
			.attr("id", 'gradient')
			.attr('gradientUnits',"userSpaceOnUse")
			.attr('x1','0%')
			.attr('y1','0%')
			.attr('x2','0%')
			.attr('y2','100%')
			.attr("spreadMethod", "pad");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", 'steelblue')
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", 'crimson')
    .attr("stop-opacity", 1);

var 	cities_a =	svgc
			.selectAll('.cities_a')
			.data(dataset)
			.enter()
			.append('circle')
			.attr('class','cities_a')
			.attr('cx',function(d,m) {return width/2 + Math.sin(m/dataset.length*Math.PI)*400 })
			.attr('cy',function(d,m) {return height/2 - Math.cos(m/dataset.length*Math.PI)*400 })
			.attr('r',20)
			.attr('fill','steelblue')
			.attr('stroke-width',2);
			
var 	cities_b =	svgc
			.selectAll('.cities_b')
			.data(dataset)
			.enter()
			.append('circle')
			.attr('class','cities_b')
			.attr('cx',function(d,m) {return width/2 - Math.sin(m/dataset.length*Math.PI)*400 })
			.attr('cy',function(d,m) {return height/2 + Math.cos(m/dataset.length*Math.PI)*400 })
			.attr('r',20)
			.attr('fill','crimson')
			.attr('stroke-width',2);
			
var 	line	 =	svgl
			.selectAll('.line')
			.data(dataset)
			.enter()
			.append('line')
			.attr('class','line')
			.attr('x1',function(d,m) {return width/2 + Math.sin(m/dataset.length*Math.PI)*400 })
			.attr('y1',function(d,m) {return height/2 - Math.cos(m/dataset.length*Math.PI)*400 })
			.attr('x2',function(d,m) {return width/2 - Math.sin(m/dataset.length*Math.PI)*400 })
			.attr('y2',function(d,m) {return height/2 + Math.cos(m/dataset.length*Math.PI)*400 })
			.attr('stroke','url(#gradient)')
			.attr('stroke-width',2)
			