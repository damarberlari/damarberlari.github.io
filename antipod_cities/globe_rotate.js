var diameter = 900,
    radius = diameter >> 1,
    velocity = .02,
    then = Date.now()
    landColor = ['#1B5E20','#4CAF50'];

var projection = d3.geo.orthographic()
    .scale(0.8*radius - 2)
    .translate([radius, radius])
    .clipAngle(90)
    .precision(0);

var canvas = d3.select(".d3-content").selectAll("canvas")
    .data(d3.range(2))
  .enter().append("canvas")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("id",function(d,m){return "canvas_"+m});

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
      context.beginPath();
      context.moveTo(projection([101.44,0.51])[0],projection([101.44,0.51])[1]),context.lineTo(projection([-78.56,-0.51])[0],projection([-78.56,-0.51])[1]);
      context.moveTo(projection([176.29,-40.42])[0],projection([176.29,-40.42])[1]),context.lineTo(projection([-3.7,40.42])[0],projection([-3.7,40.42])[1]);
      context.moveTo(projection([114.11,22.39])[0],projection([114.11,22.39])[1]),context.lineTo(projection([-65.89,-22.39])[0],projection([-65.89,-22.39])[1]);
      context.moveTo(projection([174.57,-36.13])[0],projection([174.57,-36.13])[1]),context.lineTo(projection([-5.42,36.13])[0],projection([-5.42,36.13])[1]);
      context.lineWidth = 1;
      context.strokeStyle = 'white';
      context.stroke();
      };
      if(i==1){
      //sample: pekanbaru ecuador
      if((rotate[0]-90+101.44)%360>180){
      context.beginPath(),context.arc(projection([101.44,0.51])[0],projection([101.44,0.51])[1],7, 2 * Math.PI, false),context.fillStyle = 'crimson', context.fill();
      }
      if((rotate[0]-90+-78.56)%360>180){
      context.beginPath(),context.arc(projection([-78.56,-0.51])[0],projection([-78.56,-0.51])[1],7, 2 * Math.PI, false),context.fillStyle = 'gold', context.fill();
      }
      //sample: madrid weber
      if((rotate[0]-90+176.29)%360>180){
      context.beginPath(),context.arc(projection([176.29,-40.42])[0],projection([176.29,-40.42])[1],7, 2 * Math.PI, false),context.fillStyle = 'crimson', context.fill();
      }
      if((rotate[0]-90-3.7)%360>180){
      context.beginPath(),context.arc(projection([-3.7,40.42])[0],projection([-3.7,40.42])[1],7, 2 * Math.PI, false),context.fillStyle = 'gold', context.fill();
      }
      //sample: hongkong yujuj
      if((rotate[0]-90+114.11)%360>180){
      context.beginPath(),context.arc(projection([114.11,22.39])[0],projection([114.11,22.39])[1],7, 2 * Math.PI, false),context.fillStyle = 'crimson', context.fill();
      }
      if((rotate[0]-90-65.89)%360>180){
      context.beginPath(),context.arc(projection([-65.89,-22.39])[0],projection([-65.89,-22.39])[1],7, 2 * Math.PI, false),context.fillStyle = 'gold', context.fill();
      }
      //sample: mangawhai gibraltar
      if((rotate[0]-90+174.57)%360>180){
      context.beginPath(),context.arc(projection([174.57,-36.13])[0],projection([174.57,-36.13])[1],7, 2 * Math.PI, false),context.fillStyle = 'crimson', context.fill();
      }
      if((rotate[0]-90-5.42)%360>180){
      context.beginPath(),context.arc(projection([-5.42,36.13])[0],projection([-5.42,36.13])[1],7, 2 * Math.PI, false),context.fillStyle = 'gold', context.fill();
      }
      context.beginPath(), path.context(context)(globe);
      context.lineWidth = 10;
      context.strokeStyle = 'white';
      context.stroke();
      }
      if(i==0){context.restore()};
    });
  });
});