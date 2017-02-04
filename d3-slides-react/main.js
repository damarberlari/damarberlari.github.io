var dataSample = d3.range(20).map(function(){return Math.random()*700});



var data = [
  { id:0, content: "This is Title", color: "#F44336", title:"DATA VISUALIZATION WITH D3", subtitle:"", 
    data:[],
    action: {
                enter:  function(){},
                update: function(){},
                exit:   function(){}
    }
  },
  { id:1, content: "This is Slide 2", color: "#202020", title:"BRING DATA TO LIFE", subtitle:"Bar Graph", 
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
  { id:2, content: "This is Slide 3", color: "#FF9800", title:"BRING DATA TO LIFE", subtitle:"Line Graph", 
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
                            d3.select("#slide-container").append("path").datum(data.graphA).attr("class","line-sample-1").attr("d",line).attr("fill","none").attr("stroke","#FF1744").attr("stroke-width",3);
                            d3.select("#slide-container").append("path").datum(data.graphB).attr("class","line-sample-2").attr("d",line).attr("fill","none").attr("stroke","#0091EA").attr("stroke-width",3);
                            
                            var totalLength1 = d3.select("#slide-container").select(".line-sample-1").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-1").attr("stroke-dasharray", function(){return totalLength1+" "+totalLength1}).attr("stroke-dashoffset", function(){return totalLength1});
                            var totalLength2 = d3.select("#slide-container").select(".line-sample-2").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-2").attr("stroke-dasharray", function(){return totalLength2+" "+totalLength2}).attr("stroke-dashoffset", function(){return totalLength2});
                        
                       },
                update: function(data){
                            d3.select("#slide-container").select(".line-sample-1").transition().ease(d3.easeLinear).duration(1500).attr("stroke-dashoffset",0);
                            d3.select("#slide-container").select(".line-sample-2").transition().ease(d3.easeLinear).duration(1500).attr("stroke-dashoffset",0);
                      },
                exit:   function(){
                            var totalLength1 = d3.select("#slide-container").select(".line-sample-1").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-1").transition().duration(0).attr("stroke-dashoffset", function(){return totalLength1});
                            var totalLength2 = d3.select("#slide-container").select(".line-sample-2").node().getTotalLength();
                            d3.select("#slide-container").select(".line-sample-2").transition().duration(0).attr("stroke-dashoffset", function(){return totalLength2});
                        
                       }
    }
  },
  { id:3, content: "This is Slide 1", color: "#2196F3", title:"BRING DATA TO LIFE", subtitle:"Circles! Circles!", 
    data:[1,2,3,4,5,6,7],
    action: {
                enter:  function(data){
                            d3.select("#slide-container").selectAll(".circle-sample").data(data).enter().append("circle").attr("class","circle-sample").attr("cx",function(d){return d*1280/(data.length+1)}).attr("cy",360).attr("r",0).attr("fill","#F44336");
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
                update: function(){
                            d3.select("#slide-container").select(".circle-sample:nth-of-type(4)").transition().duration(500).attr("r",300).transition().duration(500).attr("r",0);
                },
                exit:   function(){
                            d3.select("#slide-container").select(".circle-sample:nth-of-type(4)").transition().duration(500).attr("r",0);
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
      <rect id="rect-progress" x="0" y="717" height="3" width="0" fill="crimson"></rect>
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

ReactDOM.render(
  <App dataset={data} sliding={slide(data.length-1)}/>,
  document.getElementById('app')
);

function slide(max){
        var counter=0;
        
        return function(increment){
        counter=counter+increment;
        if(counter>max){counter=max}else if(counter<0){counter=0};
        return counter;
        }
    };