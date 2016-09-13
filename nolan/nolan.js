dataset = [
            {
               "name" : "Memento",
               "year" : 2000,
               "budget" : 9,
               "revenue" : 39.7,
               "rating" : 92
            },{
               "name" : "Insomnia",
               "year" : 2002,
               "budget" : 42,
               "revenue" : 113.7,
               "rating" : 92
            },{
               "name" : "Batman Begins",
               "year" : 2005,
               "budget" : 150,
               "revenue" : 374.2,
               "rating" : 85
            },{
               "name" : "The Prestige",
               "year" : 2006,
               "budget" : 40,
               "revenue" : 109.7,
               "rating" : 76
            },{
               "name" : "The Dark Knight",
               "year" : 2008,
               "budget" : 185,
               "revenue" : 1004.5,
               "rating" : 94
            },{
               "name" : "Inception",
               "year" : 2010,
               "budget" : 160,
               "revenue" : 825.5,
               "rating" : 86
            },{
               "name" : "The Dark Knight Rises",
               "year" : 2012,
               "budget" : 250,
               "revenue" : 1084.4,
               "rating" : 88
            },{
               "name" : "Interstellar",
               "year" : 2014,
               "budget" : 165,
               "revenue" : 675,
               "rating" : 71
            }
            ];
            
            var svg = d3.select('.box').append('svg')
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 1280 720")
      .attr('preserveAspectRatio',"xMidYMid meet");
            
            var w = 1280;
            var h = 720;
            
            var xScale = d3.scaleLinear()
                     .domain([0,dataset.length-1])
                     .range([150, w-150]);
                     
                     
            var yScale = d3.scaleLinear()
                     .domain([0, 1090])
                     .range([0, h-160]);
                        
            
            var movTriangle = svg.selectAll("polygon")
            .data(dataset)
            .enter()
            .append("polygon")
            .attr("points", function(d,m) {return xScale(m)+","+(h-80)+
                  " "+xScale(m)+","+(h-80)+
                  " "+xScale(m)+","+(h-80)
                  })
            .attr("fill", function(d){return "rgb(255, "+(230-d.rating)+", 80)"})
            .attr("fill-opacity", 0.8);
            
            movTriangle
            .transition()
            .ease(d3.easeQuad)
            .duration(1000)
            .delay(function(d,m){return m*50})
            .attr("points", function(d,m) {return xScale(m)+","+(h-yScale(d.revenue)-80)+
                  " "+(xScale(m)-yScale(d.budget))+","+(h-80)+
                  " "+(xScale(m)+yScale(d.budget))+","+(h-80)
                  })
            .attr("cursor","pointer")
            .each(function(d,m){
                
             var movLayout = svg.append("polygon")
            .attr("points", function() {return xScale(m)+","+(h-80)+
                  " "+xScale(m)+","+(h-80)+
                  " "+xScale(m)+","+(h-80)
                  })
            .attr("fill", function(){return "rgb(255, "+(230-d.rating)+", 80)"})
            .attr("fill-opacity", 0.8)
            .attr("pointer-events","none");
            
            movLayout
            .transition()
            .ease(d3.easeQuad)
            .duration(1000)
            .delay(function(){return m*50})
            .attr("points", function() {return xScale(m)+","+(h-yScale(d.revenue)-80)+
                  " "+(xScale(m)-yScale(d.budget))+","+(h-80)+
                  " "+(xScale(m))+","+(h-80)
                  })
            });
            
            movTriangle
            .on("mouseover", function(d,k) {
                d3.select(this)
                .attr("stroke", "white")
                .attr("stroke-width",3);
                
                movTriangle
                .on("mousemove", function(d,k) {
                d3.selectAll("#rev").remove();
                svg
                .append("text")
                .attr("id","rev")
                .attr("x", d3.mouse(this)[0])
                .attr("y", d3.mouse(this)[1]-20)
                .attr("font-size", "11px")
                .attr("fill","black")
                .attr("text-anchor","middle")
                .text(d.revenue);
                });
                
                })
            .on("mouseout", function() {
                d3.select(this)
                .attr("stroke-width",0);
                d3.selectAll("#rev").remove();
                });

            