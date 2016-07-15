var width = 1000,
    height = 1000,
    initialAngle = 0,
    then = Date.now();
    
var phi = d3.scale.linear()
    .domain([0, width])
    .range([-180, 180]);

    
var projection = projection_template([100,0],width / 2, height / 2);
var projection2 = projection_template([-80,0],width / 2, height / 2);

var path_0 = d3.geo.path()
    .projection(projection);
    
var path_1 = d3.geo.path()
    .projection(projection2);

var svg = d3.select('.d3-content').append('svg')
	.attr('width', '100%')
	.attr('height', '100%') 
	.attr('viewBox',"0 0 1000 1000");


   
svg.append("circle").attr("cx",width/2).attr("cy",height/2).attr("r",475).attr("fill","black")

d3.json("world-50m.json", function(error, world) {
  if (error) throw error;
  var land = topojson.feature(world, world.objects.land);
  
  svg.insert("path", ".graticule")
      .datum(land)
      .attr("class", "land_0")
      .attr("d", path_0)
      .attr("transform","scale(-1,1) translate(-1000)");
      
  svg.insert("path", ".graticule")
      .datum(land)
      .attr("class", "land_1")
      .attr("d", path_1)
});
d3.timer(rotate);
d3.select(self.frameElement).style("height", height + "px");
//d3.timer(function(){rotate(0.01)})

function projection_template(rotation,xLoc,yLoc) {
    return d3.geo.orthographic()
    .scale(475,-475)
    .translate([xLoc,yLoc])
    .clipAngle(90)
    .precision(.1)
    .rotate(rotation);
}

function rotate() {
    rotateAngle=.05 * (Date.now() - then);
    projection.rotate([rotateAngle,0]);
    projection2.rotate([-(180-rotateAngle),0]);
    svg.select(".land_0").attr("d",path_0);
    svg.select(".land_1").attr("d",path_1);
}