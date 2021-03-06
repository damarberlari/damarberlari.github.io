var diameter = 650,
    radius = diameter >> 1,
    dotRadius = diameter/150,
    velocity = .02,
    then = Date.now()
    landColor = ['#009688','#00695C']
    
var dataCity = [
    {index:0,long:176.29,lat:-40.42,color:'crimson',city:"Weber",country:"New Zealand"},
    {index:1,long:-3.7,lat:40.42,color:'gold',city:"Madrid",country:"Spain"},
    {index:2,long:114.11,lat:22.39,color:'crimson',city:"Hong Kong",country:"China"},
    {index:3,long:-65.89,lat:-22.39,color:'gold',city:"La Quiaca",country:"Argentina"},
    {index:4,long:100.42,lat:-0.95,color:'crimson',city:"Padang",country:"Indonesia"},
    {index:5,long:-79.58,lat:0.95,color:'gold',city:"Esmeraldas",country:"Ecuador"},
    {index:6,long:178.06,lat:-17.71,color:'crimson',city:"Navosa",country:"Fiji"},
    {index:7,long:-1.94,lat:17.71,color:'gold',city:"Tombouctu",country:"Mali"},
    {index:8,long:106.63,lat:10.82,color:'crimson',city:"Ho Chi Minh City",country:"Vietnam"},
    {index:9,long:-73.37,lat:-10.82,color:'gold',city:"Ucayali",country:"Peru"},
    {index:10,long:107.61,lat:51.82,color:'crimson',city:"Ulan Ude",country:"Russia"},
    {index:11,long:-72.39,lat:-51.82,color:'gold',city:"Puerto Natales",country:"Chile"},
    {index:12,long:70.65,lat:27.11,color:'crimson',city:"Desert National Park",country:"India"},
    {index:13,long:-109.35,lat:-27.11,color:'gold',city:"Easter Island",country:"Chile"}
];

var antipodPair = [
    {index:0,from:0,to:1},
    {index:1,from:2,to:3},
    {index:2,from:4,to:5},
    {index:3,from:6,to:7},
    {index:4,from:8,to:9},
    {index:5,from:10,to:11},
    {index:6,from:12,to:13}
]

//var antipodeSelected = antipodPair[0];
var antipodeSelected = antipodeSelector();

//svg = d3.select('.list').append('svg')
//      .attr('width', '100%')
//      .attr('height', '100%') 
//      .attr('viewBox',"0 0 350 350");
//
//svg.selectAll(".antipodes")
//.data(antipodPair)
//.enter()
//.append("text")
//.attr("class","antipodes")
//.attr("x", 0)
//.attr("y",function(d,m){return (m+1)*20})
//.text("test test")

var stest = d3.select('.list').selectAll(".antipodes")
.data(antipodPair)
.enter()

stest
.append("p")
.attr("class",function(d){if(d==antipodeSelected()){return "antipodes_selected act"}else{return "antipodes hide"}})
.html(function(d){return dataCity[d.from].city+", "+dataCity[d.from].country+" - "+ dataCity[d.to].city+", "+dataCity[d.to].country})
.on("click",antipodeSelected);

d3.select('.antipodes_header').on("click",antipodeMenu);
d3.select('.act').on('click',antipodeMenu);

var projection = d3.geo.orthographic()
    .scale(radius - 7)
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
    var dotColor, dotAlpha;
    var angle = velocity * (Date.now() - then);
    var dotRadiusAnimated = angle%20;
    canvas.each(function(i) {
      context = this.getContext("2d");
      path.context(context);
      context.clearRect(0, 0, diameter, diameter);
      if(i==0){
      context.save();
      context.translate(this.width,0);
      context.scale(-1,1);
      rotate = [angle,0];
      context.beginPath(), path(globe);
      context.fillStyle = '#00BCD4', context.fill()
      }
      else{
      rotate = [angle+180,0]
      }
      projection.rotate(rotate);
      context.globalAlpha = 1;
      context.beginPath(), path(land),context.fillStyle = landColor[i], context.fill();
      if(i==0){
      //draw lines on 1st layer
      context.beginPath();
      antipodPair.filter(function(d){return d==antipodeSelected()}).forEach(function(d){
	var fromLoc = projection([dataCity[d.from].long,dataCity[d.from].lat]);
	var toLoc = projection([dataCity[d.to].long,dataCity[d.to].lat]);
	context.moveTo(fromLoc[0],fromLoc[1]),context.lineTo(toLoc[0],toLoc[1]);
	context.lineWidth = 2;
	context.globalAlpha = 0.6;
      context.strokeStyle = 'white';
      context.stroke();
      })
      }else{
      //draw outer circle
      context.beginPath(), path.context(context)(globe);
      context.lineWidth = dotRadius*2.2;
      context.strokeStyle = '#111111';
      context.stroke();
      
      //draw city point on 2nd layer
      //sample: pekanbaru ecuador606060
      dataCity.filter(function(d){return (rotate[0]-90+d.long)%360>180}).forEach(function(d){
      var loc = projection([d.long,d.lat]);
      if(d.index==antipodeSelected().from||d.index==antipodeSelected().to){dotColor=d.color,dotAlpha=0.5}else{dotColor='#9E9E9E',dotAlpha=0}
      context.beginPath(),context.arc(loc[0],loc[1],dotRadiusAnimated, 2 * Math.PI, false),context.globalAlpha = dotAlpha,context.fillStyle = dotColor, context.fill();
      context.beginPath(),context.arc(loc[0],loc[1],dotRadius, 2 * Math.PI, false),context.globalAlpha = 1,context.fillStyle = dotColor, context.fill();
      });
      
      }
      if(i==0){context.restore()};
    });
  });
});

function antipodeFilter(d){
	antipodeSelected = d;
	d3.selectAll(".antipodes_selected").attr("class","antipodes");
	d3.select(this).attr("class","antipodes_selected");
};

function antipodeSelector() {
	var activeAntipode=antipodPair[0];
	function selected(obj) {
		if (obj) {
			activeAntipode=obj;
            d3.select('.list').selectAll("p").data(antipodPair).attr("class",function(d){if(d==activeAntipode){return "antipodes_selected act"}else{return "antipodes hide"}}).on("click",antipodeSelected);
            d3.select('.antipodes_header').attr('class','antipodes_header compact');
	    d3.select('.act').on('click',antipodeMenu);
	    return activeAntipode;
		}
		else {
			return activeAntipode;
		}
	};
	return selected;
};

function antipodeMenu() {
    var menu = d3.select(this);
    var list = d3.select('.list').selectAll('p').data(antipodPair);
    if(menu.attr("class")=="antipodes_header expand"){
        menu.attr("class","antipodes_header compact");
        list.attr("class",function(d){if(d==antipodeSelected()){return "antipodes_selected act"}else{return "antipodes hide"}}).on("click",antipodeSelected);
	d3.select('.act').on('click',antipodeMenu);
    }else{
        d3.select(".antipodes_header").attr("class","antipodes_header expand");
        list.attr("class",function(d){if(d==antipodeSelected()){return "antipodes_selected"}else{return "antipodes"}}).on("click",antipodeSelected);
    }
    
}
