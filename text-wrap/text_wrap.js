dataset = [
{id:0, class: "fpl", title:"Reward Pemerintah"},
{id:1, class: "fpl", title:"Tunjangan Profesi"}
];

var dataset_links = [
    {"source": 0, "target": 1}
]

var width = 1280,
    height = 720,
    radius = 60,
    linkDistance = 20;
    
var xScale =    d3.scaleLinear()
                .domain([radius, width-radius])
                .range([radius, width-radius])
                .clamp(true);
                
var yScale =    d3.scaleLinear()
                .domain([radius, height-radius])
                .range([radius, height-radius])
                .clamp(true);
    
var svg = d3.select(".d3-content").append('svg')
      .attr("class","svg-master")
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 1280 720");
      
svg.append('g').attr('class', 'mind-map');

d3.selectAll(".mind-map").append("defs")
    .append("marker")
    .attr("id", "marker")
    .attr("viewBox", "0 -3 6 6")
    .attr("refX", 17)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-3L5,0L0,3");

var simulation = d3.forceSimulation(dataset)
      .force("link", d3.forceLink(dataset_links).distance(linkDistance).strength(0.1))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(+radius+linkDistance).strength(0.2))
      .on("tick", ticked);

    d3.selectAll(".mind-map").selectAll(".links")
    .data(dataset_links)
    .enter()
    .append("path")
    .attr("class","links")
    .attr("marker-end", "url(#marker)");

    d3.selectAll(".mind-map").selectAll(".nodes")
    .data(dataset)
.enter()
.append("circle")
.attr("class",function(d){return "nodes "+d.class})
.attr("r",0)
.attr("fill",function(d){return d.color})
.each(function(d,i) {return d3.selectAll(".mind-map").append("text").text("test");})
    .call(d3.drag()
        .on("start", dragstart)
        .on("drag", dragged)
        .on("end", dragended)
        );

function ticked(){
    d3.selectAll(".mind-map").selectAll(".nodes")
    .data(dataset)
    .attr("r",radius);
    
    d3.selectAll(".mind-map").selectAll(".nodes")
    .data(dataset)
    .attr("cx",function(d){return xScale(d.x)})
    .attr("cy",function(d){return yScale(d.y)});
    
    d3.selectAll(".mind-map").selectAll(".links")
    .data(dataset_links)
    .attr("d",function(d){return "M"+xScale(d.source.x)+","+yScale(d.source.y)+"L"+xScale(d.target.x)+","+yScale(d.target.y);})
    
}

function dragstart() {
    
}

function dragged(d) {
    simulation.alpha(0.001);
    simulation.restart();
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended() {
    
}