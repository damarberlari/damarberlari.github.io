var dataset = [];
var centering = false,
    center,
    alpha = .2;

for (i=0;i<50;i++) {
    dataset.push({x:i,y:Math.random()});
}


var svg = d3.select('.d3-content').append('svg')
      .attr("class","svg-master")
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 1280 720");
      
    
var x = d3.scaleLinear()
    .domain([0, 49])
    .range([50, 1230]);
    
var y = d3.scaleLinear()
    .domain([0, 1])
    .range([650, 600]);
    
var line = d3.line()
    .curve(d3.curveMonotoneX)
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); });

   
var brush = d3.brushX()
    .extent([[40, 590], [1240, 660]])
    .handleSize(0)

svg.append("defs").append("clipPath")
    .attr("id", "clip")
  .append("rect")
    .attr("x",50)
    .attr("y",50)
    .attr("width", 1180)
    .attr("height", 200);
   
svg.selectAll('.dots')
.data(dataset)
.enter()
.append("circle")
.attr("class","dots")
.attr("cx",function(d){return x(d.x)})
.attr("cy",function(d){return y(d.y)})
.attr("r",2);

svg.append("path")
    .datum(dataset)
    .attr("class", "line")
    .attr("d", line);
    
var gBrush = svg.append("g")
      .attr("class", "brush")
      .call(brush)
      .call(brush.move,[40,140]);

gBrush.select(".overlay").on("mousedown.brush",brushcenter);
//gBrush.select(".selection").on("mousedown.brush",brushcenter);
      
function brushstart(){
    d3.event.stopPropagation();
    target=d3.event.target;
    console.log(d3.select(".brush").select(".selection").attr("x"));
    gBrush.call(brush.move,[d3.mouse(target)[0]-50,d3.mouse(target)[0]+50]);
}

function brushcenter() {
  var self = d3.select(window),
      target = d3.event.target,
      size = 100,
      range = x.range(),
      x0 = range[0] + size / 2,
      x1 = range[1] - size / 2;

  recenter(true);
  brushmove();

  if (d3.event.changedTouches) {
    self.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
  } else {
    self.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
  }

  function brushmove() {
    d3.event.stopPropagation();
    center = Math.max(x0, Math.min(x1, d3.mouse(target)[0]));
    recenter(false);
  }

  function brushend() {
    brushmove();
    self.on(".brush", null);
  }
}

function recenter(smooth) {
  if (centering) return; // timer is active and already tweening
  if (!smooth) return void tween(1); // instantaneous jump
  centering = true;

  function tween(alpha) {
    var size = 100,
    selectionX = +d3.select(".brush").select(".selection").attr("x"),
    center1 = center * alpha + (selectionX + 50) * (1 - alpha);

    gBrush
        .call(brush.move,[center1 - size / 2, center1 + size / 2]);
    return !(centering = Math.abs(center1 - center) > 0.1);
  }

  var t = d3.timer(function(elapsed) {
    var twe = tween(alpha);
    console.log(elapsed);
    if(twe) t.stop();
  });
}



    
