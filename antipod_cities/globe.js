var dataset =
[
    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16
]


var	width = 1000,
   	height = 1000,
	padding = 20,
	fontSize = 12;


var     svg = d3.select('.d3-content').append('svg')
	.attr('width', '100%')
	.attr('height', '100%') 
	.attr('viewBox',"0 0 1000 1000");

var   	svgm = svg.append('g').attr('id','maps');
var	svgm2 = svg.append('g').attr('id','maps');
var	svgg = svg.append('g').attr('id','maps');


var projection = d3.geoOrthographic()
    .scale(500)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .precision(0);
    
var projection2 = d3.geoOrthographic()
    .scale(500)
    .translate([width / 2, height / 2])
    .clipAngle(90)
    .precision(0);

var path = d3.geoPath()
    .projection(projection);
    
var path2 = d3.geoPath()
    .projection(projection2.rotate([-80,0]));
    
var graticule = d3.geoGraticule();

svgg.append("defs").append("path")
    .datum({type: "Sphere"})
    .attr("id", "sphere")
    .attr("d", path);

svgg.append("use")
    .attr("class", "stroke")
    .attr("xlink:href", "#sphere");

svgg.append("use")
    .attr("class", "fill")
    .attr("xlink:href", "#sphere");

svgg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

    
d3.json("world-50m.json", function(error, world) {
  if (error) throw error;

svgm.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land")
      .attr("d", path);
      
svgm2.insert("path", ".graticule")
      .datum(topojson.feature(world, world.objects.land))
      .attr("class", "land2")
      .attr("d", path2);
      
svgm.attr('transform','translate(1000 0) scale(-1,1)');
});

//d3.select(self.frameElement).style("height", height + "px");