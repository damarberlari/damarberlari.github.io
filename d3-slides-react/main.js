var dataSample = d3.range(20).map(function(){return Math.random()*700});



var data = [
  { id:0, content: "Title", color: "#009688", title:"DATA VISUALIZATION WITH D3", subtitle:"", 
    data:[],
    action: {
                enter:  function(){},
                update: function(){},
                exit:   function(){}
    }
  },
  { id:1, content: "Data Visualization", color: "#009688", title:"DATA VISUALIZATION", subtitle:"a storytelling medium", 
    data:dataSample,
    action: {
                enter:  function(){},
                update: function(){},
                exit:   function(){}
    }
  },
  { id:1, content: "Data Visualization", color: "#424242", title:"DATA DRIVEN DOCUMENTS/D3", subtitle:"a JavaScript frameworks that bring data to life", 
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
  { id:1, content: "Bring Data to Life", color: "#202020", title:"BRING DATA TO LIFE", subtitle:"Bar Graph", 
    data:dataSample,
    action: {
                enter:  function(data){
                            d3.select("#slide-container").selectAll(".bar-sample").data(data).enter().append("rect").attr("class","bar-sample").attr("x",function(d,m){return 2+m*1280/(data.length)}).attr("y",720).attr("width",60).attr("height",0).attr("fill","#F44336");
                        },
                update: function(data){
                            d3.select("#slide-container").selectAll(".bar-sample").data(data).transition().duration(500).attr("y",function(d){return 720-d}).attr("height",function(d){return d});
                        },
                exit:   function(){
                            d3.select("#slide-container").selectAll(".bar-sample").transition().duration(500).attr("y",720).attr("height",0);
                        }
    }
  },
  { id:2, content: "This is Slide 3", color: "#009688", title:"BRING DATA TO LIFE", subtitle:"Line Graph", 
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
                            d3.select("#slide-container").append("path").datum(data.graphB).attr("class","line-sample-2").attr("d",line).attr("fill","none").attr("stroke","#E0F2F1").attr("stroke-width",3);
                            
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
  { id:2, content: "This is Slide 3", color: "#009688", title:"BRING DATA TO LIFE", subtitle:"Scatter Plot", 
    data:[{id:"MEX", gdp: 16957.69746, gini:0.457},	{id:"TUR", gdp: 20549.293089, gini:0.402},	{id:"LVA", gdp: 21223.718421, gini:0.347},	{id:"HUN", gdp: 22997.744927, gini:0.289},	{id:"POL", gdp: 23541.52617, gini:0.298},	{id:"GRC", gdp: 25284.405782, gini:0.34},	{id:"EST", gdp: 25973.313576, gini:0.338},	{id:"PRT", gdp: 26454.226847, gini:0.338},	{id:"SVK", gdp: 26654.008792, gini:0.25},	{id:"SVN", gdp: 28847.362659, gini:0.25},	{id:"CZE", gdp: 29051.390424, gini:0.256},	{id:"ISR", gdp: 31763.867463, gini:0.371},	{id:"ESP", gdp: 31991.051808, gini:0.335},	{id:"KOR", gdp: 32222.880455, gini:0.307},	{id:"NZL", gdp: 32991.255639, gini:0.333},	{id:"JPN", gdp: 35738.275135, gini:0.33},	{id:"ITA", gdp: 35757.0229, gini:0.331},	{id:"GBR", gdp: 37475.045871, gini:0.351},	{id:"FRA", gdp: 37671.028181, gini:0.308},	{id:"ISL", gdp: 40486.432961, gini:0.256},	{id:"FIN", gdp: 40619.937023, gini:0.26},	{id:"CAN", gdp: 42143.975015, gini:0.321},	{id:"BEL", gdp: 42639.076623, gini:0.268},	{id:"AUS", gdp: 43169.929137, gini:0.326},	{id:"DEU", gdp: 43564.07389, gini:0.289},	{id:"SWE", gdp: 44724.851249, gini:0.274},	{id:"DNK", gdp: 44808.543206, gini:0.249},	{id:"AUT", gdp: 46253.60764, gini:0.276},	{id:"IRL", gdp: 46519.442937, gini:0.304},	{id:"NLD", gdp: 46715.500984, gini:0.281},	{id:"NOR", gdp: 65374.680731, gini:0.253},	{id:"LUX", gdp: 91096.924499, gini:0.301}
    ],
    domain: {y:d3.scaleLinear()
            .domain([0.2, 0.5])
            .range([720, 0]),
            x:d3.scaleLinear()
            .domain([20000, 95000])
            .range([100, 1180])
            }, 
    action: {
                enter:  function(data,domain){
                            d3.select("#slide-container").selectAll(".scatter-sample").data(data).enter().append("circle").attr("class","scatter-sample").attr("cx",function(d){return domain.x(d.gdp)}).attr("cy",function(d) { return domain.y(d.gini) }).attr("r",0).attr("fill","#E0F2F1");
                        },
                update: function(data){
                            d3.select("#slide-container").selectAll(".scatter-sample").data(data).transition().duration(500).delay(function(d,m){return m*100}).attr("r",5);
                        },
                exit:   function(){
                            d3.select("#slide-container").selectAll(".scatter-sample").transition().duration(500).attr("r",0);
                        }
    }
  },
  { id:3, content: "This is Slide 1", color: "#2196F3", title:"BRING DATA TO LIFE", subtitle:"Circles! Circles!", 
    data:[1,2,3,4,5,6,7],
    action: {
                enter:  function(data){
                            d3.select("#slide-container").append("g").attr("id","circles").selectAll(".circle-sample").data(data).enter().append("circle").attr("class","circle-sample").attr("cx",function(d){return d*1280/(data.length+1)}).attr("cy",360).attr("r",0).attr("fill","#F44336");
                        },
                update: function(){
                            d3.select("#slide-container").selectAll(".circle-sample").transition().duration(500).delay(function(d){return d*100}).attr("r",50);
                        },
                exit:   function(){
                            d3.select("#slide-container").selectAll(".circle-sample").transition().duration(500).attr("r",0);
                        }
    }
  },
  { id:4, content: "This is The End", color: "#212121", title:"THE END", subtitle:"Many more to come", 
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