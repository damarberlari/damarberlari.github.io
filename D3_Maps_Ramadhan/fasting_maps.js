var dataset =
[
{country: "Iceland", city: "Akureyri", start: 1.53333333333333, end: 0.283333333333333, duration: 22.75, lat: 65.68, lon: -18.11},
{country: "Iceland", city: "Reykjavik", start: 2.08333333333333, end: 23.8166666666667, duration: 21.7333333333333, lat: 64.13, lon: -21.89},
{country: "Sweden", city: "Stockholm", start: 1.86666666666667, end: 21.9833333333333, duration: 20.1166666666667, lat: 59.33, lon: 18.06},
{country: "Russia", city: "Moscow", start: 1.75, end: 21.1833333333333, duration: 19.4333333333333, lat: 55.75, lon: 37.62},
{country: "Netherlands", city: "Amsterdam", start: 3.06666666666667, end: 22, duration: 18.9333333333333, lat: 52.37, lon: 4.89},
{country: "France", city: "Paris", start: 3.35, end: 21.8666666666667, duration: 18.5166666666667, lat: 48.85, lon: 2.35},
{country: "Romania", city: "Bucharest", start: 3.1, end: 20.9833333333333, duration: 17.8833333333333, lat: 44.43, lon: 26.12},
{country: "Turkey", city: "Istanbul", start: 3.43333333333333, end: 20.5833333333333, duration: 17.15, lat: 41.01, lon: 28.97},
{country: "China", city: "Beijing", start: 2.75, end: 19.6833333333333, duration: 16.9333333333333, lat: 39.9, lon: 116.4},
{country: "Japan", city: "Osaka", start: 2.76666666666667, end: 19.1166666666667, duration: 16.35, lat: 34.69, lon: 135.5},
{country: "Pakistan", city: "Islamabad", start: 3.25, end: 19.2833333333333, duration: 16.0333333333333, lat: 33.72, lon: 73.06},
{country: "Egypt", city: "Cairo", start: 3.3, end: 18.9166666666667, duration: 15.6166666666667, lat: 30.06, lon: 31.25},
{country: "United Arab Emirates", city: "Abu Dhabi", start: 4.1, end: 19.1833333333333, duration: 15.0833333333333, lat: 24.47, lon: 54.37},
{country: "India", city: "Mumbai", start: 4.63333333333333, end: 19.2666666666667, duration: 14.6333333333333, lat: 19.01, lon: 72.85},
{country: "Cambodia", city: "Phnom Penh", start: 4.3, end: 18.4, duration: 14.1, lat: 11.56, lon: 104.92},
{country: "Nigeria", city: "Lagos", start: 5.25, end: 19.0166666666667, duration: 13.7666666666667, lat: 6.44, lon: 3.42},
{country: "Malaysia", city: "Kuala Lumpur", start: 5.8, end: 19.35, duration: 13.55, lat: 3.23, lon: 101.7},
{country: "Kenya", city: "Nairobi", start: 5.26666666666667, end: 18.5666666666667, duration: 13.3, lat: -1.27, lon: 36.81},
{country: "Indonesia", city: "Jakarta", start: 4.73333333333333, end: 17.75, duration: 13.0166666666667, lat: -6.21, lon: 106.84},
{country: "Zambia", city: "Lusaka", start: 5.21666666666667, end: 17.7166666666667, duration: 12.5, lat: -15.41, lon: 28.28},
{country: "Madagascar", city: "Toamasina", start: 4.88333333333333, end: 17.2333333333333, duration: 12.35, lat: -18.15, lon: 49.4},
{country: "Mozambique", city: "Chibuto", start: 5.08333333333333, end: 17.0833333333333, duration: 12, lat: -24.68, lon: 33.53},
{country: "Australia", city: "Perth", start: 5.75, end: 17.3333333333333, duration: 11.5833333333333, lat: -31.9, lon: 115.86},
{country: "Australia", city: "Hobart", start: 5.93333333333333, end: 16.7333333333333, duration: 10.8, lat: -42.88, lon: 147.33}
]

var width = 1.12*d3.select(".post-content").node().getBoundingClientRect().width,
    height = 720/1280*width
    padding = width/1280*15;

var barColor = ["#FFC107", "#FEB70A", "#FDAD0E", "#FCA311", "#FB9A15", "#FA9019", "#F9861C", "#F97D20", "#F87323", "#F76927", "#F6602B", "#F5562E", "#F44C32", "#F44336"];
var barScale = d3.scale.linear()
    .range([0, 0.42*width-2*padding])
    .domain([0,24]);

var xAxis = d3.svg.axis()
	.scale(barScale)
	.orient("bottom")
        .tickValues(d3.range(0, 25, 3))
	.tickFormat(d3.format("1"))
	.tickPadding(padding/2)
        .innerTickSize(-0.9*height+3*padding);

var projection = d3.geo.mercator()
    .scale((width + 1) / 2 / Math.PI)
    .rotate([210,0])
    .translate([width / 2, 1.15*height / 2])
    .precision(.1);   

var svg = d3.select('.post-content').append('svg')
    .attr('width', width)
    .attr('height', height);
    
svg.append("text") //dummytext for font-sizing
        .attr("y","-20")
	.text("Osaka")
        .style("font-size","13px")
	.each(function(){
	      textheight = d3.select(this).node().getBoundingClientRect().height;
	});
        
var barHeight = (0.9*height-3*padding)/dataset.length-padding/8;
var fontSize = barHeight/textheight*14;

var path = d3.geo.path()
    .projection(projection);
    
var svgm = svg.append('g').attr('id','maps');
var svgc = svg.append('g').attr('id','dots');
var svgr = svg.append('g').attr('id','rect');
var svgb = svg.append('g').attr('id','bars');
var svga = svg.append('g').attr('id','axis');
var svgt = svg.append('g').attr('id','text');

svga.attr("class", "axis")
	.attr("transform","translate("+(0.55*width+padding)+" "+(0.95*height-2*padding)+")")
	.call(xAxis);

svgt.append("text")
.attr("x",0)
            .attr("y",0)
            .attr("transform","translate("+(0.95*width+padding)+" "+(0.95*height-2.5*padding)+")")
            .attr("font-size", fontSize)
            .attr("opacity", 0.7)
            .attr("text-anchor","end")
            .attr("alignment-baseline","bottom")
            .text("Durasi Puasa (jam)");
        
svga.selectAll("text").attr("font-size", 0.9*fontSize);

// load and display the World
d3.json("http://damarberlari.github.io/D3_Maps_Ramadhan/world-110m2.json", function(error, topology) {
    svgm.selectAll("path")
      .data(topojson.object(topology, topology.objects.countries)
          .geometries)
    .enter()
      .append("path")
      .attr("d", path) 
});

svgc.selectAll("circle.dotbase")
           .data(dataset)
           .enter()
           .append("circle")
           .attr("cx", function(d) {
                   return projection([d.lon, d.lat])[0];
           })
           .attr("cy", function(d) {
                   return projection([d.lon, d.lat])[1];
           })
           .attr("r", 5)
           .attr("class","dotbase")
           .attr("id",function(d,m){return "dotbase_"+m})
           .style("fill-opacity",0)
           .attr('stroke', function(d){return barColor[Math.round(d.duration)-10]})
           .attr('stroke-width',0)

        svgc.selectAll("circle.dot")
           .data(dataset)
           .enter()
           .append("circle")
           .attr("cx", function(d) {
                   return projection([d.lon, d.lat])[0];
           })
           .attr("cy", function(d) {
                   return projection([d.lon, d.lat])[1];
           })
           .attr("r", 5)
           .attr("class","dot")
           .attr("id",function(d,m){return "dot_"+m})
           .style("opacity",0.7)
           .attr('fill', function(d){return barColor[Math.round(d.duration)-10]})
           .attr('cursor','pointer')
           .on("mouseover",function(d,m){
            mouseover(d,m);
            })
           .on("mouseout",function(d,m){
            mouseout(d,m);
            });

svgr
.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", 0.45*width-0.05*height)
.attr("height",0.9*height)
.attr("fill","black")
.attr("fill-opacity",0.2)
.attr("transform","translate("+0.55*width+" "+0.05*height+")")

//var barBase = svgb.selectAll('.barbase')
//            .data(dataset)
//            .enter().append('rect')
//            .attr('class','barbase')
//            .attr('x', padding)
//            .attr('y', function(d,m){return m*(barHeight+padding/8)+padding})
//            .attr('width', function(d){return barScale(24)+'px'})
//            .attr('height', barHeight+'px')
//            .attr('fill','dimgray')
//            .style('opacity',0.2)
//            .attr("transform","translate("+0.55*width+" "+0.25*height+")")

var bar = svgb.selectAll('.bar')
            .data(dataset)
            .enter().append('rect')
            .attr('class','bar')
            .attr('id', function(d,m){return "bar_"+m})
            .attr('x', padding)
            .attr('y', function(d,m){return m*(barHeight+padding/8)+padding})
            .attr('width', function(d){return barScale(d.duration)+'px'})
            .attr('height', barHeight+'px')
            .attr('fill', function(d){return barColor[Math.round(d.duration)-10]})
            .attr('opacity',0.7)
            .attr("transform","translate("+0.55*width+" "+0.05*height+")")
            .attr('cursor','pointer')
            .on("mouseover",function(d,m){
              mouseover(d,m);
              })
            .on("mouseout",function(d,m){
              mouseout(d,m);
              });

var city = svgt.selectAll('.city')
            .data(dataset)
            .enter().append('text')
            .attr('class', 'city')
            .attr('id',function(d,m){return 'city_'+m})
            .attr("x",function(d){return padding*1.5})
            .attr("y",function(d,m){return m*(barHeight+padding/8)+padding+barHeight/2})
            .attr("transform","translate("+0.55*width+" "+0.05*height+")")
            .attr("font-size", fontSize)
            .attr("opacity", 0.7)
            .attr("text-anchor","start")
            .attr("alignment-baseline","central")
            .text(function(d){return d.city});

var mouseover = function(d,m) {
              svgb.select("#bar_"+m).attr("opacity", 1);
              svgc.select("#dot_"+m).attr("r",7).style("opacity",1);
              svgt.select("#city_"+m).attr("opacity", 1);
              svgc.select("#dotbase_"+m)
              .attr("r",15)
              .attr("stroke-width",1);
              
              svgt.append("text")
              .attr("id","duration_"+m)
              .attr("x",padding*1.2+barScale(d.duration))
              .attr("y",m*(barHeight+padding/8)+padding+barHeight/2)
              .attr("transform","translate("+0.55*width+" "+0.05*height+")")
              .attr("font-size", 0.9*fontSize)
              .attr("opacity", 1)
              .attr("text-anchor","start")
              .attr("alignment-baseline","central")
              .text(Math.round(d.duration*100)/100);
              
           //   svgt.append("text")
           //   .attr("id","country_"+m)
           //   .attr("x", function() {
           //        return projection([d.lon, d.lat])[0];
           //})
           //.attr("y", function() {
           //        return projection([d.lon, d.lat])[1] - 2*padding;
           //})
           //   .attr("font-size", fontSize)
           //   .attr("opacity", 1)
           //   .attr("text-anchor","middle")
           //   .attr("alignment-baseline","central")
           //   .text(d.city+", "+d.country);
};

var mouseout = function(d,m) {
              svgb.select("#bar_"+m).attr("opacity", 0.7)
              svgc.select("#dot_"+m).attr("r",5).style("opacity",0.7);
              svgt.select("#city_"+m).attr("opacity", 0.7)
              svgc.select("#dotbase_"+m)
              .attr("r",0)
              .attr("stroke-width",0);
              svgt.select("#duration_"+m).remove();
              //svgt.select("#country_"+m).remove();
}