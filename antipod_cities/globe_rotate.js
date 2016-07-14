var diameter = 900,
    radius = diameter >> 1,
    velocity = .02,
    then = Date.now()
    landColor = ['#1B5E20','#4CAF50'];

var projection = d3.geo.orthographic()
    .scale(radius - 2)
    .translate([radius, radius])
    .clipAngle(90)
    .precision(0);

var canvas = d3.select(".d3-content").selectAll("canvas")
    .data(d3.range(2))
  .enter().append("canvas")
    .attr("width", diameter)
    .attr("height", diameter);

var path = d3.geo.path()
    .projection(projection);

d3.json("world-110m.json", function(error, world) {
  if (error) throw error;

  var land = topojson.feature(world, world.objects.land),
      globe = {type: "Sphere"};

  d3.timer(function() {
    var angle = velocity * (Date.now() - then);
    canvas.each(function(i) {
      context = this.getContext("2d");
      if(i==0){
      context.save();
      context.translate(this.width,0);
      context.scale(-1,1);
      }
      if(i==0){rotate = [angle,0]}else{rotate = [angle+180,0]};
      projection.rotate(rotate);
      context.clearRect(0, 0, diameter, diameter);
      context.beginPath(), path.context(context)(globe);
      if(i==0){context.fillStyle = 'black', context.fill()};
      context.beginPath(), path(land),context.fillStyle = landColor[i], context.fill();
      if(i==0){
      context.beginPath(), context.moveTo(projection([0,30])[0],projection([0,30])[1]),context.lineTo(projection([180,0])[0],projection([180,0])[1]);
      context.lineWidth = 2;
      context.strokeStyle = '#424242';
      context.stroke();
      context.beginPath(),context.arc(projection([0,30])[0],projection([0,30])[1],10, 2 * Math.PI, false),context.fillStyle = 'crimson', context.fill();
      context.beginPath(),context.arc(projection([180,-150])[0],projection([180,-150])[1],10, 2 * Math.PI, false),context.fillStyle = 'gold', context.fill();}
      if(i==0){context.restore()};
    });
  });
});