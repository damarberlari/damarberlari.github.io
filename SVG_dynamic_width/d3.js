svg = d3.select('.d3-content').append('svg')
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 1280 720")
      .attr('preserveAspectRatio',"xMidYMid meet")
      
svg.append("rect")
    .attr('x','2.8125%')
    .attr('y','5%')
    .attr("width", '94.375%')
    .attr("height", '90%')
    .attr("fill","steelblue")
    .attr("fill-opacity",0.7)
    .on('mouseover',function(){
      d3.select(this).attr("fill-opacity",1)
    })
    .on('mouseout',function(){
      d3.select(this).attr("fill-opacity",0.7)
    })
    
svg.append("circle")
    .attr('cx','50%')
    .attr('cy','50%')
    .attr("r", '5%')
    .attr("fill","crimson")
    .attr("fill-opacity",0.7)
    .on('mouseover',function(){
      d3.select(this).attr("fill-opacity",1).attr("r", '10%')
    })
    .on('mouseout',function(){
      d3.select(this).attr("fill-opacity",0.7).attr("r", '5%')
    })
