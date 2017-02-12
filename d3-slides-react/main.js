var dataSample = d3.range(20).map(function(){return Math.random()*700});



var data = [
  { id:0, content: "Title", color: "#FFC857", title:"DATA VISUALIZATION WITH D3", subtitle:"", 
    data:[],
    action: {
                enter:  function(){},
                update: function(){},
                exit:   function(){}
    }
  },
  { id:1, content: "Data Visualization", color: "#2F4C7C", title:"", subtitle:"", 
    data:[
      {country: "Italy", won: 14, nom: 31, lon: 12.0586029412373, lat: 42.9136784041319, color: "#FFC857"},
{country: "France", won: 12, nom: 39, lon: -1.34925044172771, lat: 44.3311024175147, color: "#FFCD66"},
{country: "Spain", won: 4, nom: 19, lon: -3.63611100815254, lat: 40.4259818962248, color: "#FFD784"},
{country: "Japan", won: 4, nom: 15, lon: 138.228130998681, lat: 37.9550748563406, color: "#FFD784"},
{country: "Sweden", won: 3, nom: 15, lon: 16.8311443000081, lat: 63.4319246858594, color: "#FFDC94"},
{country: "Denmark", won: 3, nom: 12, lon: 9.85077012351991, lat: 56.0759847076341, color: "#FFDC94"},
{country: "Netherlands", won: 3, nom: 7, lon: 5.49830441445574, lat: 52.3033799063646, color: "#FFDC94"},
{country: "Germany", won: 2, nom: 10, lon: 10.280876968037, lat: 51.2393416207863, color: "#FFDC94"},
{country: "Hungary", won: 2, nom: 9, lon: 19.3528552944021, lat: 47.2039343142717, color: "#FFDC94"},
{country: "Argentina", won: 2, nom: 7, lon: -65.4336777146603, lat: -36.710169098842, color: "#FFDC94"},
{country: "Switzerland", won: 2, nom: 5, lon: 8.1038191713355, lat: 46.7904858363136, color: "#FFDC94"},
{country: "Austria", won: 2, nom: 4, lon: 14.0625182968975, lat: 47.6154906740616, color: "#FFDC94"},
{country: "Poland", won: 1, nom: 10, lon: 19.2723182108479, lat: 52.2008199713429, color: "#FFE1A3"},
{country: "Canada", won: 1, nom: 7, lon: -97.0180736829745, lat: 67.9782476750077, color: "#FFE1A3"},
{country: "Russian Federation", won: 1, nom: 6, lon: 100.237671923529, lat: 64.7694069555879, color: "#FFE1A3"},
{country: "Algeria", won: 1, nom: 5, lon: 2.57377787406677, lat: 28.4422727664439, color: "#FFE1A3"},
{country: "Taiwan, Province of China", won: 1, nom: 3, lon: 120.955292266107, lat: 23.7338469141756, color: "#FFE1A3"},
{country: "Iran, Islamic Republic of", won: 1, nom: 3, lon: 54.1858902422257, lat: 32.7007380089774, color: "#FFE1A3"},
{country: "Czech Republic", won: 1, nom: 3, lon: 15.3142541466767, lat: 49.774182896175, color: "#FFE1A3"},
{country: "South Africa", won: 1, nom: 2, lon: 24.9807266448113, lat: -29.0788557970192, color: "#FFE1A3"},
{country: "Côte d'Ivoire", won: 1, nom: 1, lon: -5.63080661432827, lat: 7.55413182775637, color: "#FFE1A3"},
{country: "Bosnia and Herzegovina", won: 1, nom: 1, lon: 17.791048552889, lat: 44.181391221309, color: "#FFE1A3"},
{country: "Israel", won: 0, nom: 10, lon: 34.9895248791009, lat: 31.4904553663693, color: "#FFF0D1"},
{country: "Mexico", won: 0, nom: 8, lon: -102.773244844841, lat: 24.1700686112569, color: "#FFF0D1"},
{country: "Belgium", won: 0, nom: 7, lon: 4.56687971020034, lat: 50.648176253573, color: "#FFF0D1"},
{country: "Norway", won: 0, nom: 5, lon: 8.468946, lat: 60.472024, color: "#FFF0D1"},
{country: "Greece", won: 0, nom: 5, lon: 22.7052356957002, lat: 39.1103875134186, color: "#FFF0D1"},
{country: "Brazil", won: 0, nom: 4, lon: -53.0100555346954, lat: -11.2215725124192, color: "#FFF0D1"},
{country: "India", won: 0, nom: 3, lon: 79.594265046544, lat: 23.2418434062337, color: "#FFF0D1"},
{country: "United Kingdom", won: 0, nom: 2, lon: -2.92226940198663, lat: 54.0953890185326, color: "#FFF0D1"},
{country: "China", won: 0, nom: 2, lon: 104.188647153077, lat: 37.577133390366, color: "#FFF0D1"},
{country: "Palestinian Territory, Occupied", won: 0, nom: 2, lon: 35.2438921864398, lat: 31.9277997971315, color: "#FFF0D1"},
{country: "Hong Kong", won: 0, nom: 2, lon: 114.109497, lat: 22.396428, color: "#FFF0D1"},
{country: "Nepal", won: 0, nom: 1, lon: 83.9741876093016, lat: 28.2460874510694, color: "#FFF0D1"},
{country: "Cambodia", won: 0, nom: 1, lon: 104.86464625217, lat: 12.6790705893622, color: "#FFF0D1"},
{country: "Nicaragua", won: 0, nom: 1, lon: -85.0362200209642, lat: 12.847034817111, color: "#FFF0D1"},
{country: "Peru", won: 0, nom: 1, lon: -74.3908609135039, lat: -9.2894783122096, color: "#FFF0D1"},
{country: "Iceland", won: 0, nom: 1, lon: -18.7736635613791, lat: 65.0957081207027, color: "#FFF0D1"},
{country: "Colombia", won: 0, nom: 1, lon: -73.0946157297414, lat: 3.93771631701062, color: "#FFF0D1"},
{country: "Cuba", won: 0, nom: 1, lon: -78.9884679783013, lat: 21.6298969116728, color: "#FFF0D1"},
{country: "Finland", won: 0, nom: 1, lon: 26.2214468844272, lat: 64.9067372717463, color: "#FFF0D1"},
{country: "Georgia", won: 0, nom: 1, lon: 43.4418918562648, lat: 42.1633830238413, color: "#FFF0D1"},
{country: "Kazakhstan", won: 0, nom: 1, lon: 67.299808681699, lat: 48.4603667537948, color: "#FFF0D1"},
{country: "Uruguay", won: 0, nom: 1, lon: -56.0163393091086, lat: -32.8158124104208, color: "#FFF0D1"},
{country: "Chile", won: 0, nom: 1, lon: -71.6831973271217, lat: -41.7067943467158, color: "#FFF0D1"},
{country: "Australia", won: 0, nom: 1, lon: 134.597599145698, lat: -26.2395468431157, color: "#FFF0D1"},
{country: "Jordan", won: 0, nom: 1, lon: 36.768900772778, lat: 31.2571716931679, color: "#FFF0D1"},
{country: "Puerto Rico", won: 0, nom: 1, lon: -66.5039770380917, lat: 18.2250977936673, color: "#FFF0D1"},
{country: "Estonia", won: 0, nom: 1, lon: 25.8062554134565, lat: 58.6492433484798, color: "#FFF0D1"},
{country: "Mauritania", won: 0, nom: 1, lon: -10.3294664798403, lat: 20.2872440958102, color: "#FFF0D1"},
{country: "Macedonia, the former Yugoslav Republic of", won: 0, nom: 1, lon: 21.6878644345684, lat: 41.5993053392327, color: "#FFF0D1"},
{country: "Viet Nam", won: 0, nom: 1, lon: 106.242022610281, lat: 16.8227669815299, color: "#FFF0D1"}
    ],
    domain: d3.scaleLinear()
            .domain([1, 40])
            .range([5, 60]),
    action: {
                enter:  function(data,domain){
                        d3.select("#slide-container").append("defs")
                        .append("clipPath")
                        .attr("id","rect-path")
                        .append("rect")
                        .attr("x",0)
                        .attr("y",0)
                        .attr("width",1280)
                        .attr("height",720);
                       
                        d3.json("https://damarberlari.github.io/D3_Maps_Ramadhan/world-110m2.json", function(error, map) {
                        
                        var topology=map;
                        var   projection = d3.geoMercator()
                        .scale((1280 + 1) / 2 / Math.PI)
                        .rotate([-10,0])
                        .translate([1280 / 2, 1.2*720 / 2])
                        .precision(.1);

                        var path = d3.geoPath()
                        .projection(projection);
 
                        d3.select("#slide-container").append("g").attr("id","maps").attr("clip-path","url(#rect-path)")
                        .append("g")
                        .attr("id","lands")
                        .selectAll(".lands")
                        .data(topojson.feature(topology, topology.objects.countries).features)
                        .enter()
                        .append("path")
                        .attr("class","lands")
                        .attr("id", function(d){return d.id})
                        .attr("d", path)
                        .attr("fill","#FDFDFB")
                        .attr("stroke","#2F4C7C")
                        .attr("stroke-width",0.5)
                        .attr("opacity",0);


                        d3.select("#slide-container").select("#maps")
                        .append("g")
                        .attr("id","cities")
                        .selectAll(".cities")
                        .data(data)
                        .enter()
                        .append("g")
                        .attr("id",function(d,m){return "city-"+m})
                        .append("circle")
                        .attr("class","cities")
                        .attr("cx", function(d) {
                              return projection([d.lon, d.lat])[0];
                        })
                        .attr("cy", function(d) {
                                return projection([d.lon, d.lat])[1];
                        })
                        .attr("r", 0)
                        .attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#157A6E"}})
                        .attr("fill-opacity",0.7)
                        .attr("stroke-width",1)
                        .attr("stroke",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#7FB6AF"}})
                        .each(function(d,m){
                          d3.select("#slide-container").select("#maps").select("#cities").select("#city-"+m)
                          .append("circle")
                          .attr("class","sub-cities")
                          .data([d])
                          .attr("cx", function(d) {
                              return projection([d.lon, d.lat])[0];
                          })
                          .attr("cy", function(d) {
                                  return projection([d.lon, d.lat])[1];
                          })
                          .attr("r", 0)
                          .attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#FFC857"}})
                          .attr("fill-opacity",0.7);
                        })
                        .on("mouseover",function(d){d3.select(this).attr("fill-opacity",0.9)})
                        .on("mouseout",function(d){d3.select(this).attr("fill-opacity",0.7)});
                      });

                      
                },
                update: function(data,domain){
                        d3.select("#slide-container").select("#maps").select("#lands").selectAll(".lands").transition().duration(500).attr("opacity",1);
                        d3.select("#slide-container").select("#maps").select("#cities").selectAll(".cities").transition().duration(500).attr("r",function(d){return domain(d.nom)});
                        d3.select("#slide-container").select("#maps").select("#cities").selectAll(".sub-cities").transition().duration(500).attr("r",function(d){if(d.won>0){return domain(d.won)}else{return 0}});
                },
                exit:   function(){
                        d3.select("#slide-container").select("#maps").select("#lands").selectAll(".lands").transition().duration(500).attr("opacity",0);
                        d3.select("#slide-container").select("#maps").select("#cities").selectAll(".cities").transition().duration(500).attr("r",0);
                        d3.select("#slide-container").select("#maps").select("#cities").selectAll(".sub-cities").transition().duration(500).attr("r",0);
                }
    }
  },
  { id:2, content: "Data Visualization", color: "#100B00", title:"DATA DRIVEN DOCUMENTS/D3", subtitle:"a JavaScript frameworks that bring data to life", 
    data:dataSample,
    action: {
                enter:  function(data){
                        d3.xml("image/logoD3.svg").get(function(error, xml) {
                        if (error) throw error;
                        document.getElementById("slide-container").appendChild(xml.documentElement);
                        d3.select("#d3-logo").attr("fill-opacity",0).attr("transform","translate(-128,121) translate(640,0) scale(1.4)");
                        });
                },
                update: function(data){
                        d3.select("#d3-logo").transition().duration(500).attr("fill-opacity",1)
                             },
                exit:   function(){
                        d3.select("#d3-logo").transition().duration(0).attr("fill-opacity",0)
                            }
    }
  },
  { id:3, content: "Bring Data to Life", color: "#100B00", title:"BRING DATA TO LIFE", subtitle:"Bar Graph", 
    data:dataSample,
    action: {
                enter:  function(data){
                            d3.select("#slide-container").selectAll(".bar-sample").data(data).enter().append("rect").attr("class","bar-sample").attr("x",function(d,m){return 2+m*1280/(data.length)}).attr("y",720).attr("width",60).attr("height",0).attr("fill","#EA2B1F");
                        },
                update: function(data){
                            d3.select("#slide-container").selectAll(".bar-sample").transition().duration(500).attr("y",function(d){return 720-d}).attr("height",function(d){return d});
                        },
                exit:   function(){
                            d3.select("#slide-container").selectAll(".bar-sample").transition().duration(500).attr("y",720).attr("height",0);
                        }
    }
  },
  { id:4, content: "This is Slide 3", color: "#157A6E", title:"BRING DATA TO LIFE", subtitle:"Line Graph", 
    data:{graphA:[100,	99.7054024346296,	102.367611768916,	106.919852150128,	106.813564328663,	104.443481967709,	107.289456018745,	111.066599503263,	116.343332199716,	120.468559341424,	119.459013845256,	120.663510320249,	118.572270315852,	120.116473945209,	127.159860509979,	130.556710848136,	131.561433364078,	136.049064285135,	139.977226355556,	144.401196049582,	146.354534390723,	144.370611204971,	144.786332564982,	148.865724853722,	152.73623891775,	156.914163769485,	159.490221617129,	164.040834107145,	169.947131106245,	172.487446096183,	175.682080142697,	174.144946328165,	170.535834757623,	170.493204976428,	173.105157127414,	175.606842287953],
    graphB:[100,	103.18082958449,	105.872589411756,	106.555411990978,	107.096565804572,	109.138016879913,	111.218681832367,	115.402814604928,	115.771210929009,	116.388602540489,	116.175981913738,	117.53402432125,	116.978178118539,	118.968759580707,	121.257482932947,	123.341721149036,	127.075801346641,	128.121736645536,	129.796642998795,	129.810144111641,	130.589778681728,	132.605889405414,	136.238025875509,	136.401921587995,	138.465185717883,	138.64694982071,	140.817673015336,	142.672971081982,	144.67525729589,	148.601783009223,	153.578360078011,	156.692138151252,	163.997233979429,	169.819799293363,	174.194733595573,	176.941884460074]
    },
    domain: d3.scaleLinear()
            .domain([95, 185])
            .range([720, 0]),
    action: {
                enter:  function(data,domain){
                            var line =  d3.line()
                                        .x(function(d,m){return m*1280/(data.graphA.length-1)})
                                        .y(function(d) { return domain(d) })
                                        .curve(d3.curveMonotoneX);
                            d3.select("#slide-container").append("path").datum(data.graphA).attr("class","line-sample-1").attr("d",line).attr("fill","none").attr("stroke","#26A69A").attr("stroke-width",3);
                            d3.select("#slide-container").append("path").datum(data.graphB).attr("class","line-sample-2").attr("d",line).attr("fill","none").attr("stroke","#F7F7F7").attr("stroke-width",3);
                            
                            var totalLength1 = d3.select("#slide-container").select(".line-sample-1").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-1").attr("stroke-dasharray", function(){return totalLength1+" "+totalLength1}).attr("stroke-dashoffset", function(){return totalLength1});
                            var totalLength2 = d3.select("#slide-container").select(".line-sample-2").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-2").attr("stroke-dasharray", function(){return totalLength2+" "+totalLength2}).attr("stroke-dashoffset", function(){return totalLength2});
                        
                            d3.select("#slide-container").selectAll(".dot-sample-1").data(data.graphA).enter().append("circle").attr("class","dot-sample-1").attr("cx",function(d,m){return m*1280/(data.graphA.length-1)}).attr("cy",function(d) { return domain(d) }).attr("r",0).attr("fill","#26A69A");
                            d3.select("#slide-container").selectAll(".dot-sample-2").data(data.graphB).enter().append("circle").attr("class","dot-sample-2").attr("cx",function(d,m){return m*1280/(data.graphA.length-1)}).attr("cy",function(d) { return domain(d) }).attr("r",0).attr("fill","#E0F2F1");
                      },
                update: function(data){
                            d3.select("#slide-container").select(".line-sample-1").transition().ease(d3.easeLinear).duration(2500).attr("stroke-dashoffset",0);
                            d3.select("#slide-container").select(".line-sample-2").transition().ease(d3.easeLinear).duration(2500).attr("stroke-dashoffset",0);

                            d3.select("#slide-container").selectAll(".dot-sample-1").transition().ease(d3.easeLinear).duration(100).delay(function(d,m){return m*2500/data.graphA.length}).attr("r",5);
                            d3.select("#slide-container").selectAll(".dot-sample-2").transition().ease(d3.easeLinear).duration(100).delay(function(d,m){return m*2500/data.graphB.length}).attr("r",5);
                    },
                exit:   function(){
                            var totalLength1 = d3.select("#slide-container").select(".line-sample-1").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-1").transition().duration(0).attr("stroke-dashoffset", function(){return totalLength1});
                            var totalLength2 = d3.select("#slide-container").select(".line-sample-2").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-2").transition().duration(0).attr("stroke-dashoffset", function(){return totalLength2});

                            d3.select("#slide-container").selectAll(".dot-sample-1").transition().ease(d3.easeLinear).duration(0).attr("r",0);
                            d3.select("#slide-container").selectAll(".dot-sample-2").transition().ease(d3.easeLinear).duration(0).attr("r",0);
                       }
    }
  },
  { id:6, content: "This is Slide 1", color: "#FFC857", title:"DRAW A CIRCLE", subtitle:"", 
    data:[1],
    action: {
                enter:  function(data){
                            d3.select("#slide-container").append("g").attr("id","circles").selectAll(".circle-sample").data(data).enter().append("circle").attr("class","circle-sample").attr("cx",function(d){return d*1280/(data.length+1)}).attr("cy",360).attr("r",0).attr("fill","#EA2B1F");
                        },
                update: function(){
                            d3.select("#slide-container").selectAll(".circle-sample").transition().duration(500).delay(function(d){return d*100}).attr("r",50);
                        },
                exit:   function(){
                            d3.select("#slide-container").selectAll(".circle-sample").transition().duration(500).attr("r",0);
                        }
    }
  },
  { id:7, content: "This is The End", color: "#100B00", title:"THE END", subtitle:"Many more to come", 
    data:[],
    action: {
                enter:  function(){},
                update: function(data){
                            d3.select("#slide-container").select("#circles").selectAll(".circle-sample:nth-of-type(4)").transition().duration(500).attr("r",300).transition().duration(500).attr("r",0);
                },
                exit:   function(){
                            d3.select("#slide-container").select("#circles").selectAll(".circle-sample:nth-of-type(4)").transition().duration(500).attr("r",0);
                }
    }
  }
];

var SlideContainer = React.createClass({
  getDefaultProps: function() {
      return {counter: 0};
  },
  componentDidUpdate: function() {
    //console.log("slide container updated");
    var color=this.props.color;
    d3.select("#slide-background").transition().duration(500).attr("fill",color);
  },
  componentDidMount: function() {
    //console.log("slide container loaded");
    var color=this.props.color;
    d3.select("#slide-background").transition().duration(500).attr("fill",color);
  },
  render: function() {
    return (
      <g id="slide-container">
      <rect id="slide-background" x="0" y="0" height="720" width="1280" fill="white"></rect>
      </g>
    )
  }
}
)

var ProgressContainer = React.createClass({
  getDefaultProps: function() {
      return {counter: 0};
  },
  componentDidUpdate: function() {
    //console.log("progress updated");
    var counter=this.props.counter;
    var max=this.props.max;
    d3.select("#rect-progress").transition().duration(500).attr("width",function(){return counter/max*1280});
  },
  componentDidMount: function() {
    //console.log("progress loaded");
  },
  render: function() {
    return (
      <g id="progress-container">
      <rect id="rect-progress" x="0" y="717" height="3" width="0" fill="#FAFAFA" opacity="0.9"></rect>
      </g>
    )
  }
}
)

var TitleContainer = React.createClass({
  getDefaultProps: function() {
      return {counter: 0};
  },
  componentWillUpdate: function() {
    
  },
  drawRectBound: function(d,el){
    var bbox=d.node().getBBox();
    //console.log(bbox);
    d3.select("#text-background").select(el).attr("width",bbox.width+10).attr("height", bbox.height).attr("x", bbox.x-5).attr("y", bbox.y);
  },
  componentDidUpdate: function() {
    //console.log("title updated");
    var title=this.props.title;
    var subtitle=this.props.subtitle;
    d3.select("#title").text(title).call(this.drawRectBound,"#title-bg");
    d3.select("#subtitle").text(subtitle).call(this.drawRectBound,"#subtitle-bg");
  },
  componentDidMount: function() {
    //console.log("title loaded");
    var title=this.props.title;
    var subtitle=this.props.subtitle;
    d3.select("#title").text(title).call(this.drawRectBound,"#title-bg");
    d3.select("#subtitle").text(subtitle).call(this.drawRectBound,"#subtitle-bg");
  },
  render: function() {
    return (
      <g id="title-container">
      <g id="text-background">
      <rect id="title-bg" x="0" y="0" width="0" height="0"></rect>
      <rect id="subtitle-bg" x="0" y="0" width="0" height="0"></rect>
      </g>
      <text id="title" x="1220" y="613"></text>
      <text id="subtitle" x="1220" y="660"></text>
      </g>
    )
  }
}
)

var App = React.createClass({
  getInitialState: function() {
      return this.props.dataset[this.props.sliding(0)];
  },
  componentWillUpdate: function(){
    this.state.action.exit();
  },
  componentDidUpdate: function(){
    this.state.action.update(this.state.data,this.state.domain);
  },
  componentDidMount: function() {
    //console.log("app loaded");
    //console.log(this.props.dataset);
    this.props.dataset.map(function(obj){obj.action.enter(obj.data,obj.domain)});
    d3.select("body")
    .on("keydown", this.update);
    d3.select("#nav-next").on("click",this.increment);
    d3.select("#nav-prev").on("click",this.decrement);
  },
  update: function() {
    if(d3.event.keyCode=='39'){
    this.increment();
    }else if(d3.event.keyCode=='37'){
    this.decrement();
    }
  },
  increment: function() {
   //console.log("increment")
    this.setState(this.props.dataset[this.props.sliding(1)]);
  },
  decrement: function() {
   //console.log("decrement")
    this.setState(this.props.dataset[this.props.sliding(-1)]);
  },
  render: function() {
    return (
      <svg class="svg-master" width="100%" height="100%" viewBox="0 0 1280 720">
            <SlideContainer counter={this.state.id} color={this.state.color}/>
            <TitleContainer counter={this.state.id} title={this.state.title} subtitle={this.state.subtitle}/>
            <ProgressContainer counter={this.state.id} max={this.props.dataset.length-1}/>
            <g id="nav-container">
            <rect id="nav-next" x="640" y="0" width="640" height="720"></rect>
            <rect id="nav-prev" x="0" y="0" width="640" height="720"></rect>
            </g>
      </svg>
    )
  }
});

//setTimeout(function(){ 
ReactDOM.render(
  <App dataset={data} sliding={slide(data.length-1)}/>,
  document.getElementById('app')
);
//}, 1000);

function slide(max){
        var counter=0;
        
        return function(increment){
        counter=counter+increment;
        if(counter>max){counter=max}else if(counter<0){counter=0};
        return counter;
        }
    };
