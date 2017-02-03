var data = [
  {id:0, content: "This is Title", color: "#F44336", title:"DATA VISUALIZATION WITH D3", subtitle:""},
  {id:1, content: "This is Slide 1", color: "#9C27B0", title:"DATA DRIVEN DOCUMENTS", subtitle:"D3"},
  {id:2, content: "This is Slide 2", color: "#2196F3", title:"BRING DATA TO LIFE", subtitle:"Sample 1"},
  {id:3, content: "This is Slide 3", color: "#009688", title:"BRING DATA TO LIFE", subtitle:"Sample 2"},
  {id:4, content: "This is Last Slide", color: "#FFC107", title:"BRING DATA TO LIFE", subtitle:"Sample 3"}
]

var sliding=slide(data.length-1);

var Progress = React.createClass({
  getDefaultProps: function() {
      return {counter: 0};
  },
  render: function() {
    return (
      <div>
      <hr/>
      This is slide {this.props.counter} out of {this.props.max}
      <hr />
      </div>
    )
  }
}
)

var SlideContainer = React.createClass({
  getDefaultProps: function() {
      return {counter: 0};
  },
  componentWillUpdate: function() {
    //console.log("old state is: "+this.props.counter);
  },
  componentDidUpdate: function() {
    var color=this.props.color;
    d3.select("#slide-background").transition().duration(500).attr("fill",color);
  },
  componentDidMount: function() {
    var color=this.props.color;
    d3.select("#slide-background").transition().duration(500).attr("fill",color);
  },
  render: function() {
    return (
      <g>
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
    //console.log("old state is: "+this.props.counter);
    d3.select("#circle").transition().duration(500).attr("r",0);
  },
  componentDidUpdate: function() {
    var counter=this.props.counter;
    var max=this.props.max;
    d3.select("#rect-progress").transition().duration(500).attr("width",function(){return counter/max*1280});
  },
  componentDidMount: function() {
    d3.select("#circle").transition().duration(10000).attr("r",100);
  },
  render: function() {
    return (
      <g>
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
    console.log(bbox);
    d3.select("#text-background").select(el).attr("width",bbox.width+10).attr("height", bbox.height).attr("x", bbox.x-5).attr("y", bbox.y);
  },
  componentDidUpdate: function() {
    var title=this.props.title;
    var subtitle=this.props.subtitle;
    d3.select("#title").text(title).call(this.drawRectBound,"#title-bg");
    d3.select("#subtitle").text(subtitle).call(this.drawRectBound,"#subtitle-bg");
  },
  componentDidMount: function() {
    var title=this.props.title;
    var subtitle=this.props.subtitle;
    d3.select("#title").text(title).call(this.drawRectBound,"#title-bg");
    d3.select("#subtitle").text(subtitle).call(this.drawRectBound,"#subtitle-bg");
  },
  render: function() {
    return (
      <g>
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
      return data[sliding(0)];
  },
  componentWillMount: function() {
    d3.select("body")
    .on("keydown", this.update)
  },
  componentDidMount: function() {
    //console.log("loaded");
  },
  update: function() {
   // console.log("OK")
    if(d3.event.keyCode=='39'){
    this.setState(data[sliding(1)]);
    }else if(d3.event.keyCode=='37'){
    this.setState(data[sliding(-1)]);
    }
  },
  reset: function() {
    this.setState({id: 0});
  },
  render: function() {
    return (
      <svg class="svg-master" width="100%" height="100%" viewBox="0 0 1280 720">
            <SlideContainer counter={this.state.id} color={this.state.color}/>
            <ProgressContainer counter={this.state.id} max={data.length-1}/>
            <TitleContainer counter={this.state.id} title={this.state.title} subtitle={this.state.subtitle}/>
      </svg>
    )
  }
});

ReactDOM.render(
  <App />,
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