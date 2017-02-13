var dataset =
  { content: "Data Visualization", color: "#2F4C7C", 
    data:[
        {country: "France", won: 12, nom: 39, lon: -1.34925044172771, lat: 44.3311024175147, continent: "Europe"},
        {country: "Italy", won: 14, nom: 31, lon: 12.0586029412373, lat: 42.9136784041319, continent: "Europe"},
        {country: "Spain", won: 4, nom: 19, lon: -3.63611100815254, lat: 40.4259818962248, continent: "Europe"},
        {country: "Japan", won: 4, nom: 15, lon: 138.228130998681, lat: 37.9550748563406, continent: "Asia"},
        {country: "Sweden", won: 3, nom: 15, lon: 16.8311443000081, lat: 63.4319246858594, continent: "Europe"},
        {country: "Denmark", won: 3, nom: 12, lon: 9.85077012351991, lat: 56.0759847076341, continent: "Europe"},
        {country: "Germany", won: 2, nom: 10, lon: 10.280876968037, lat: 51.2393416207863, continent: "Europe"},
        {country: "Poland", won: 1, nom: 10, lon: 19.2723182108479, lat: 52.2008199713429, continent: "Europe"},
        {country: "Israel", won: 0, nom: 10, lon: 34.9895248791009, lat: 31.4904553663693, continent: "Middle East"},
        {country: "Hungary", won: 2, nom: 9, lon: 19.3528552944021, lat: 47.2039343142717, continent: "Europe"},
        {country: "Mexico", won: 0, nom: 8, lon: -102.773244844841, lat: 24.1700686112569, continent: "Latin America"},
        {country: "Netherlands", won: 3, nom: 7, lon: 5.49830441445574, lat: 52.3033799063646, continent: "Europe"},
        {country: "Argentina", won: 2, nom: 7, lon: -65.4336777146603, lat: -36.710169098842, continent: "Latin America"},
        {country: "Canada", won: 1, nom: 7, lon: -97.0180736829745, lat: 67.9782476750077, continent: "North America"},
        {country: "Belgium", won: 0, nom: 7, lon: 4.56687971020034, lat: 50.648176253573, continent: "Europe"},
        {country: "Russian Federation", won: 1, nom: 6, lon: 100.237671923529, lat: 64.7694069555879, continent: "Europe"},
        {country: "Switzerland", won: 2, nom: 5, lon: 8.1038191713355, lat: 46.7904858363136, continent: "Europe"},
        {country: "Algeria", won: 1, nom: 5, lon: 2.57377787406677, lat: 28.4422727664439, continent: "Africa"},
        {country: "Norway", won: 0, nom: 5, lon: 8.468946, lat: 60.472024, continent: "Europe"},
        {country: "Greece", won: 0, nom: 5, lon: 22.7052356957002, lat: 39.1103875134186, continent: "Europe"},
        {country: "Austria", won: 2, nom: 4, lon: 14.0625182968975, lat: 47.6154906740616, continent: "Europe"},
        {country: "Brazil", won: 0, nom: 4, lon: -53.0100555346954, lat: -11.2215725124192, continent: "Latin America"},
        {country: "Taiwan, Province of China", won: 1, nom: 3, lon: 120.955292266107, lat: 23.7338469141756, continent: "Asia"},
        {country: "Iran, Islamic Republic of", won: 1, nom: 3, lon: 54.1858902422257, lat: 32.7007380089774, continent: "Middle East"},
        {country: "Czech Republic", won: 1, nom: 3, lon: 15.3142541466767, lat: 49.774182896175, continent: "Europe"},
        {country: "India", won: 0, nom: 3, lon: 79.594265046544, lat: 23.2418434062337, continent: "Asia"},
        {country: "South Africa", won: 1, nom: 2, lon: 24.9807266448113, lat: -29.0788557970192, continent: "Africa"},
        {country: "United Kingdom", won: 0, nom: 2, lon: -2.92226940198663, lat: 54.0953890185326, continent: "Europe"},
        {country: "China", won: 0, nom: 2, lon: 104.188647153077, lat: 37.577133390366, continent: "Asia"},
        {country: "Palestinian Territory, Occupied", won: 0, nom: 2, lon: 35.2438921864398, lat: 31.9277997971315, continent: "Middle East"},
        {country: "Hong Kong", won: 0, nom: 2, lon: 114.109497, lat: 22.396428, continent: "Asia"},
        {country: "Côte d'Ivoire", won: 1, nom: 1, lon: -5.63080661432827, lat: 7.55413182775637, continent: "Africa"},
        {country: "Bosnia and Herzegovina", won: 1, nom: 1, lon: 17.791048552889, lat: 44.181391221309, continent: "Europe"},
        {country: "Nepal", won: 0, nom: 1, lon: 83.9741876093016, lat: 28.2460874510694, continent: "Asia"},
        {country: "Cambodia", won: 0, nom: 1, lon: 104.86464625217, lat: 12.6790705893622, continent: "South East Asia"},
        {country: "Nicaragua", won: 0, nom: 1, lon: -85.0362200209642, lat: 12.847034817111, continent: "Latin America"},
        {country: "Peru", won: 0, nom: 1, lon: -74.3908609135039, lat: -9.2894783122096, continent: "Latin America"},
        {country: "Iceland", won: 0, nom: 1, lon: -18.7736635613791, lat: 65.0957081207027, continent: "Europe"},
        {country: "Colombia", won: 0, nom: 1, lon: -73.0946157297414, lat: 3.93771631701062, continent: "Latin America"},
        {country: "Cuba", won: 0, nom: 1, lon: -78.9884679783013, lat: 21.6298969116728, continent: "Latin America"},
        {country: "Finland", won: 0, nom: 1, lon: 26.2214468844272, lat: 64.9067372717463, continent: "Europe"},
        {country: "Georgia", won: 0, nom: 1, lon: 43.4418918562648, lat: 42.1633830238413, continent: "Europe"},
        {country: "Kazakhstan", won: 0, nom: 1, lon: 67.299808681699, lat: 48.4603667537948, continent: "Asia"},
        {country: "Uruguay", won: 0, nom: 1, lon: -56.0163393091086, lat: -32.8158124104208, continent: "Latin America"},
        {country: "Chile", won: 0, nom: 1, lon: -71.6831973271217, lat: -41.7067943467158, continent: "Latin America"},
        {country: "Australia", won: 0, nom: 1, lon: 134.597599145698, lat: -26.2395468431157, continent: "Australia"},
        {country: "Jordan", won: 0, nom: 1, lon: 36.768900772778, lat: 31.2571716931679, continent: "Middle East"},
        {country: "Puerto Rico", won: 0, nom: 1, lon: -66.5039770380917, lat: 18.2250977936673, continent: "Latin America"},
        {country: "Estonia", won: 0, nom: 1, lon: 25.8062554134565, lat: 58.6492433484798, continent: "Europe"},
        {country: "Mauritania", won: 0, nom: 1, lon: -10.3294664798403, lat: 20.2872440958102, continent: "Africa"},
        {country: "Macedonia, the former Yugoslav Republic of", won: 0, nom: 1, lon: 21.6878644345684, lat: 41.5993053392327, continent: "Europe"},
        {country: "Viet Nam", won: 0, nom: 1, lon: 106.242022610281, lat: 16.8227669815299, continent: "South East Asia"}
    ],
    domain: d3.scaleLinear()
            .domain([1, 40])
            .range([5, 60]),
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
                        .rotate([-5,0])
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
                        .attr("opacity",1);


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
                          .attr("fill-opacity",0.7)
                          .attr("stroke","#D1A448")
                          .attr("pointer-events","none")
                          //.transition().duration(500).attr("r",function(d){if(d.won>0){return domain(d.won)}else{return 0}})
                          ;
                        })
                        .on("mouseover",function(d){d3.select(this).attr("fill-opacity",0.9).attr("fill","#52AA5E")})
                        .on("mouseout",function(d){d3.select(this).attr("fill-opacity",0.7).attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#157A6E"}})})
                      });      
          }
};

var slideData = [
  {
    id:0, title:"INTRODUCTION", subtitle:"",
    x:"25", y:"480", align:"anchor-start",
    text: [
          "This visualization shows the countries that",
          "have nominations for or won the Academy",
          "Awards Best Foreign Films.",
          " ",
          "Use keyboard arrow or click on the section",
          "below to navigate."
    ],
    update:function(){
          d3.select("#maps").select("#cities").selectAll(".cities").transition().duration(1000).attr("r",0);
    },
    exit: function(){
      
    }
  },
  {
    id:1, title:"THE NOMINEES", subtitle:"THE NOMINEES",
    x:"550", y:"275", align:"anchor-end",
    text: [
          "Currently there",
          "are several.."
    ],
    update:function(data,domain){
          d3.select("#maps").select("#cities").selectAll(".cities").transition().duration(1000).attr("r",function(d){return domain(d.nom)}).attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#157A6E"}}).attr("stroke",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#7FB6AF"}});
    },
    exit: function(){
      
    }
  },
  {
    id:2, title:"THE WINNERS", subtitle:"THE WINNERS",
    x:"550", y:"275", align:"anchor-end",
    text: [
          "Only handful",
          "of countries",
          "won..."
    ],
    update:function(data,domain){
          d3.select("#maps").select("#cities").selectAll(".cities").transition().duration(1000).attr("r",function(d){if(d.won>0){return domain(d.won)}else{return 0}}).attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#FFC857"}}).attr("stroke","#D1A448");
    },
    exit: function(data,domain){
          
    }
  },
  {
    id:3, title:"EXPLORE", subtitle:"",
    x:"25", y:"480", align:"anchor-end",
    text: [
          ""
    ],
    update:function(data,domain){
          d3.select("#maps").select("#cities").selectAll(".cities").transition().duration(1000).attr("r",function(d){return domain(d.nom)}).attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#157A6E"}}).attr("stroke",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#7FB6AF"}});
          d3.select("#maps").select("#cities").selectAll(".sub-cities").transition().duration(0).attr("r",function(d){if(d.won>0){return domain(d.won)}else{return 0}}).attr("fill",function(d){if(d.country=="Uruguay"){return "#EF645C"}else{return "#FFC857"}}).attr("stroke","#D1A448");

    },
    exit: function(data,domain){
          d3.select("#maps").select("#cities").selectAll(".sub-cities").transition().duration(0).delay(1000).attr("r",0);
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
  componentWillUpdate: function() {
    d3.selectAll(".button-progress").transition().duration(500).attr("opacity",0.2);
  },
  componentDidUpdate: function() {
    //console.log("progress updated");
    var counter=this.props.counter;
    var max=this.props.max;
    d3.select("#rect-progress").transition().duration(500).attr("x",function(){return (counter/max*1280)});
    d3.selectAll(".button-progress")
    .on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1)})
    .on("mouseout",function(d){d3.select(this).filter(function(d){return d.id!=counter}).transition().duration(500).attr("opacity",0.2)})
    .filter(function(d){return d.id==counter}).transition().duration(500).attr("opacity",1);
  },
  componentDidMount: function() {
    //console.log("progress loaded");
    var counter=this.props.counter;
    var data=this.props.data;
    d3.selectAll(".button-progress").data(data).filter(function(d){return d.id==counter}).attr("opacity",1);
    d3.selectAll(".button-progress")
    .on("mouseover",function(){d3.select(this).transition().duration(500).attr("opacity",1)})
    .on("mouseout",function(d){d3.select(this).filter(function(d){return d.id!=counter}).transition().duration(500).attr("opacity",0.2)})
    .filter(function(d){return d.id==counter}).transition().duration(500).attr("opacity",1);
  },
  render: function() {
    var length=this.props.data.length;
    return (
      <g id="progress-container">
      {this.props.data.map(function(d){
            return (<g className="button-progress" opacity="0.2">
            <rect className="bg-progress" x={(d.id)*1280/length} y="680" width={1280/length} height="40" fill="none">{d.title}</rect>       
            <text className="text-progress" x={(d.id+1)*1280/length-5} y="710">{d.title}</text>
            </g>)
      },length)}
      <rect id="rect-progress" x="0" y="718" height="2" width={1/this.props.max*1280} fill="#FAFAFA" opacity="0.9"></rect>
      </g>
    )
  }
}
)

var TextContainer = React.createClass({
  getDefaultProps: function() {
      return {text: "", x:"0", y:"0", align:"start"};
  },
  componentWillUpdate: function(){
      d3.select("#section-text").transition().duration(0).attr("opacity",0);
      d3.select("#section-title").transition().duration(0).attr("opacity",0);
  },
  componentDidUpdate: function(){
      d3.select("#section-text").transition().duration(1500).attr("opacity",1);
      d3.select("#section-title").transition().duration(1000).attr("opacity",1);
  },
  render: function() {
    var xPos=this.props.x;
    console.log(this.props.align)
    return (
      <g id="text-container">
        <text id="section-title" x={this.props.x} y={this.props.y-7} className={this.props.align}>{this.props.subtitle}</text>
        <text id="section-text" x={this.props.x} y={this.props.y} className={this.props.align}>
          {
            this.props.text.map(function(obj){
                return <tspan x={xPos} dy="14">
                  {obj}
                </tspan>
          })}
        </text>
      </g>
    )
  }
}
)

var VisualizationTitle = React.createClass({
  getDefaultProps: function() {
      return {title: ""};
  },
  componentDidMount: function() {
    //console.log("progress loaded");
    console.log(this.props.title)
  },
  render: function() {
    return (
      <g id="visualization-title">
      <text id="v-title" x="25" y="405">
      {this.props.title.map(function(obj){return <tspan x="20" dy="28">{obj}</tspan>})}
      </text>
      </g>
    )
  }
}
)

var App = React.createClass({
  getInitialState: function() {
      return {dataset:this.props.dataset, slideData: this.props.slideData[this.props.sliding(0)], slide:this.props.sliding(0)};
  },
  componentWillUpdate: function(){
    this.state.slideData.exit(this.state.dataset.data,this.state.dataset.domain);
    //console.log("oldstate: "+this.state.slide);
  },
  componentDidUpdate: function(){
    this.state.slideData.update(this.state.dataset.data,this.state.dataset.domain);
    console.log("newstate: "+this.state.slide);
  },
  componentDidMount: function() {
    //console.log("app loaded");
    //console.log(this.props.sliding());
    var slideStatus=this.state.slide;
    this.state.dataset.enter(this.state.dataset.data,this.state.dataset.domain);
    d3.select("body")
    .on("keydown", this.update);
    d3.selectAll(".button-progress").on("click", this.jump)
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
    this.setState({slideData: this.props.slideData[this.props.sliding(this.props.sliding()+1)], slide:this.props.sliding()});
  },
  decrement: function() {
   //console.log("decrement")
    this.setState({slideData: this.props.slideData[this.props.sliding(this.props.sliding()-1)], slide:this.props.sliding()});
  },
  jump: function(d) {
    this.setState({slideData: this.props.slideData[this.props.sliding(d.id)], slide:this.props.sliding()});
  },
  render: function() {
    return (
      <svg class="svg-master" width="100%" height="100%" viewBox="0 0 1280 720">
            <SlideContainer counter={this.state.dataset.id} color={this.state.dataset.color}/>
            <TextContainer title={this.state.slideData.title} subtitle={this.state.slideData.subtitle} text={this.state.slideData.text} x={this.state.slideData.x} y={this.state.slideData.y} align={this.state.slideData.align}/>
            <VisualizationTitle title={["THE ACADEMY AWARDS","BEST FOREIGN FILMS"]}/>
            <ProgressContainer data={this.props.slideData} counter={this.state.slide} max={this.props.slideData.length}/>
      </svg>
    )
  }
});

//setTimeout(function(){ 
ReactDOM.render(
  <App dataset={dataset} slideData={slideData} sliding={slide(slideData.length-1)}/>,
  document.getElementById('app')
);
//}, 1000);

function slide(max){
        var counter=0;
        
        return function(jump){
        if(jump!=undefined){counter=jump};
        if(counter>max){counter=max}else if(counter<0){counter=0};
        return counter;
        }
    };
