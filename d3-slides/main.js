var maxSlides = drawSlides();
var sliding=slide(maxSlides);
var drawProgress=progressBar(maxSlides);

function slide(max){
        var counter=0;
        
        return function(increment){
        counter=counter+increment;
        if(counter>max){counter=max}else if(counter<0){counter=0};
        return counter;
        }
    };

function progressBar(max){
    return function(counter){
    d3.select("#progress-bar").transition().duration(500).attr("width",function(){return (counter/max*1280)});
    }
}

drawSlides(0);

d3.select("body")
    .on("keydown", function(){
        if(d3.event.keyCode=='39'||d3.event.keyCode=='37'){
        if(d3.event.keyCode=='39'){cursorPointer=sliding(1)}else if(d3.event.keyCode=='37'){cursorPointer=sliding(-1)};
        //console.log(cursorPointer);
        drawSlides(cursorPointer);
        drawProgress(cursorPointer);
        }
    })
    
    d3.select(".nav-next")
    .on("click",function(){
        cursorPointer=sliding(1);
        drawSlides(cursorPointer);
        drawProgress(cursorPointer);
    });
    
    d3.select(".nav-prev")
    .on("click",function(){
        cursorPointer=sliding(-1);
        drawSlides(cursorPointer);
        drawProgress(cursorPointer);
    });

function drawSlides(drawCounter) {
    var feature = {
        transition: d3.transition()
                    .duration(500),
        drawSVG: function(){
            d3.select("#d3-content").append('svg')
            .attr("class","svg-master")
            .attr("id","svg-master")
            .attr('width', '100%')
            .attr('height', '100%') 
            .attr('viewBox',"0 0 1280 720");
            
            d3.select("svg").append("rect").attr("class","background").attr("x",0).attr("y",0).attr("width",1280).attr("height","720");
            d3.select("svg").append("circle").attr("class","circle").attr("cx",10).attr("cy",360).attr("r",0).attr("fill","#FF1744");
            
            d3.xml("image/logoD3.svg").get(function(error, xml) {
                        if (error) throw error;
                        document.getElementById("svg-master").appendChild(xml.documentElement);
                        d3.select("#d3-logo").attr("fill-opacity",0).attr("transform","translate(-128,121) translate(640,0) scale(1.4)");
                });
            
            
            var defs = d3.select("svg")
            .append("defs");
            
            var filter = defs.append("filter")
            .attr("x",0)
            .attr("y",0)
            .attr("width",1)
            .attr("height",1)
            .attr("id","title-main-bg")
            
                filter.append("feFlood")
                .attr("flood-color","#202020")
        
                filter.append("feComposite")
                .attr("in","SourceGraphic")
                
            var filter2 = defs.append("filter")
            .attr("x",0)
            .attr("y",0)
            .attr("width",1)
            .attr("height",1)
            .attr("id","title-side-bg")
            
                filter2.append("feFlood")
                .attr("flood-color","white")
        
                filter2.append("feComposite")
                .attr("in","SourceGraphic")
            
            var x = d3.scaleLinear()
            .domain([0, 19])
            .range([0, 1280]);
            
            var xBand = d3.scaleBand()
            .domain(d3.range(20))
            .range([0, 1280])
            .paddingInner(0.2);
            
            
            var y = d3.scaleLinear()
            .domain([0, 1])
            .range([620, 100]);
            
            var line = d3.line()
            .x(function(d,m) { return x(m); })
            .y(function(d) { return y(d); })
            .curve(d3.curveCardinal);
            
            
            var path = d3.select(".svg-master").append("path")
            .datum(d3.range(20).map(function(){return Math.random()}))
            .attr("class","line")
            .attr("d",line)
            .attr("fill","none")
            .attr("stroke","#A7FFEB")
            .attr("stroke-width",3);
            
            
            
            
            
            d3.select("svg").selectAll(".bar")
            .data(d3.range(20).map(function(){return Math.random()}))
            .enter()
            .append("rect")
            .attr("class","bar")
            .attr("x",function(d,m){return xBand(m)})
            .attr("width",function(d,m){return xBand.bandwidth()})
            .attr("height",0)
            .attr("fill","#FF1744");
            
            //console.log(xBand())
            //var totalLength = path.node().getTotalLength();
            //console.log(totalLength);
            
            path
            .attr("stroke-dasharray", "5000 5000")
            .attr("stroke-dashoffset", "5000");
              
            d3.select("#svg-master")
            .selectAll(".circles")
            .data(d3.range(240))
            .enter()
            .append("circle")
            .attr("class","circles")
            .attr("cx",function(d,m){return (m % 20)*64+32})
            .attr("cy",function(d,m){return Math.floor(m/20)*60+30})
            .attr("r",0)
            .attr("fill","#FF1744");
            
            
            d3.select(".svg-master").append("text").attr("class","title-main").attr("x",1220).attr("y",613)
            .attr("filter","url(#title-main-bg)")
            .attr("text-anchor","end");
            
            d3.select(".svg-master").append("text").attr("class","title-side").attr("x",1220).attr("y",660)
            .attr("filter","url(#title-side-bg)")
            .attr("text-anchor","end");
            
            d3.select("svg").append("rect").attr("id","progress-bar-base").attr("x",0).attr("y",717).attr("width",1280).attr("height",3);
            d3.select("svg").append("rect").attr("id","progress-bar").attr("x",0).attr("y",717).attr("width",0).attr("height",3);
            
            d3.select("svg").append("rect").attr("class","nav nav-next").attr("x",640).attr("y",0).attr("width",640).attr("height",720);
            d3.select("svg").append("rect").attr("class","nav nav-prev").attr("x",0).attr("y",0).attr("width",640).attr("height",720);
            
            
            
            this.resetSVG();
        },
        resetSVG: function(){
                d3.selectAll(".circle").transition(feature.transition).attr("r",0);
                d3.selectAll(".circles").transition(feature.transition).attr("r",0);
                d3.select(".background").transition().duration(1000).attr("fill","#2196F3");
                d3.select(".line").transition().duration(0).attr("stroke-dashoffset", "5000");
                d3.selectAll(".bar").transition(feature.transition).attr("y",720).attr("height",0);
                d3.select("#d3-logo").transition(feature.transition).attr("fill-opacity",0);
        },
        drawTitle: function(){
            
            d3.select(".title-main")
            .text("DATA VISUALIZATION WITH SVG AND D3.JS");
            
            d3.select(".title-side")
            .text("(Use keyboard arrow or tap the screen to navigate)");
            
            d3.select(".circle").transition(feature.transition).attr("cx",10).attr("r",0);
            },
        drawSlide1: function(){
            
            d3.select(".title-main")
            .text(" DATA DRIVEN DOCUMENTS (D3)");
            
            d3.select(".title-side")
            .text("A JavaScript library for manipulating documents based on data");
            
            d3.select(".background").transition().duration(1000).attr("fill","#212121");
            d3.select("#d3-logo").transition(feature.transition).attr("fill-opacity",1);
            
            //console.log(d3.select(".title-side").node().getBBox());
            },
        drawSlide2: function(){
            d3.select(".title-main")
            .text("BRING DATA TO LIFE");
            
            d3.select(".title-side")
            .text("");  
            
            d3.select(".background").transition().duration(750).attr("fill","#009688");
            d3.select(".line").transition().duration(5000).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
            },
        drawSlide3: function(){
            var y = d3.scaleLinear()
            .domain([0, 1])
            .range([0, 650]);
            
            d3.select(".title-main")
            .text("BRING DATA TO LIFE");
            
            d3.select(".title-side")
            .text("");
            
            d3.select(".background").transition().duration(750).attr("fill","#212121");
            d3.selectAll(".bar").data(d3.range(20).map(function(){return Math.random()})).attr("y",720).transition(feature.transition).attr("y", function(d){return 720-y(d)}).attr("height",function(d){return y(d)}); 
            },
        drawSlide4: function(){
            d3.select(".title-main")
            .text("BRING DATA TO LIFE");
            
            d3.select(".title-side")
            .text(""); 
            
            d3.select(".background").transition().duration(750).attr("fill","#FFC107");
            d3.selectAll(".circles").transition(feature.transition).attr("r",20); 
            },
        drawSlideEnd: function(){
            d3.select(".title-main")
            .text("THE END");
            
            d3.select(".title-side")
            .text("");
            d3.select(".background").transition().duration(750).attr("fill","#FFC107").transition().duration(1000).attr("fill","#212121");
            d3.select(".circle").transition(feature.transition).attr("cx",640).attr("r",250).transition().duration(1000).attr("r",0); 
            }
    };

    var slides = [
        feature.drawTitle,
        feature.drawSlide1,
        feature.drawSlide2,
        feature.drawSlide3,
        feature.drawSlide4,
        feature.drawSlideEnd
    ];
    
    if(drawCounter!= null){
        feature.resetSVG();
        return slides[drawCounter]();
    }else{
        //console.log("initiation");
        feature.drawSVG();
        return slides.length-1;
    }
};


