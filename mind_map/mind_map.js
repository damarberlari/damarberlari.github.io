dataset = [
{id:0, class: "fpl", title:"Tidak Adanya Reward dari Pemerintah"},
{id:1, class: "fpl", title:"Belum Tersalurkannya Tunjangan Profesi untuk Guru"},
{id:2, class: "fpl", title:"Tidak Ada Wadah Berkarya dan Berkompetisi"},
{id:3, class: "fpl", title:"Terbatasnya Dana Pemda untuk Pelatihan"},
{id:4, class: "fpl", title:"Forum Antar Guru"},
{id:5, class: "fpl", title:"Forum Murid Guru"},
{id:6, class: "fpl", title:"Ekonomi Orangtua"},
{id:7, class: "fpl", title:"Guru BK"},
{id:8, class: "fpl", title:"Jam BK"},
{id:9, class: "fp", title:"Penunjukan kepala sekolah yang tidak sesuai prosedur"},
{id:10, class: "fp", title:"Penunjukan secara kekerabatan dalam diklat"},
{id:11, class: "fp", title:"Belum ada transparansi dari dinas terkait tunjangan"},
{id:12, class: "fp", title:"Kurangnya Fasilitas Pengembangan Diri"},
{id:13, class: "fp", title:"Kurangnya Penguasaan IT"},
{id:14, class: "fp", title:"Kurangnya Motivasi untuk Berkembang"},
{id:15, class: "fp", title:"Kurangnya Pelatihan dan Diklat untuk Guru"},
{id:16, class: "fp", title:"Sarana Penunjang"},
{id:17, class: "fp", title:"Adat dan Budaya"},
{id:18, class: "fp", title:"Partisipasi Orangtua"},
{id:19, class: "fp", title:"Role Model"},
{id:20, class: "fp", title:"Pendampingan BK"},
{id:21, class: "fp", title:"Info Pendidikan Lanjut"},
{id:22, class: "fu", title:"Belum Sesuainya Peraturan Dinas dan Pelaksanaan di Lapangan"},
{id:23, class: "fu", title:"Mutu Guru"},
{id:24, class: "fu", title:"Motivasi Siswa"}
];

var dataset_links = [
    {"source": 0, "target": 14},
    {"source": 1, "target": 14},
    {"source": 2, "target": 14},
    {"source": 3, "target": 15},
    {"source": 4, "target": 15},
    {"source": 5, "target": 18},
    {"source": 6, "target": 18},
    {"source": 7, "target": 20},
    {"source": 8, "target": 20},
    {"source": 9, "target": 22},
    {"source": 10, "target": 22},
    {"source": 11, "target": 22},
    {"source": 12, "target": 23},
    {"source": 13, "target": 23},
    {"source": 14, "target": 23},
    {"source": 15, "target": 23},
    {"source": 16, "target": 24},
    {"source": 17, "target": 24},
    {"source": 18, "target": 24},
    {"source": 19, "target": 24},
    {"source": 20, "target": 24},
    {"source": 21, "target": 24}
]

var width = 1280,
    height = 720,
    radius = 55,
    linkDistance = 20;
    
var xScale =    d3.scaleLinear()
                .domain([radius, width-radius])
                .range([radius, width-radius])
                .clamp(true);
                
var yScale =    d3.scaleLinear()
                .domain([radius, height-radius])
                .range([radius, height-radius])
                .clamp(true);
    
var svg = d3.select(".d3-content").append('svg')
      .attr("class","svg-master")
      .attr('width', '100%')
      .attr('height', '100%') 
      .attr('viewBox',"0 0 1280 720");
      
svg.append('g').attr('class', 'mind-map');

d3.selectAll(".mind-map").append("defs")
    .append("marker")
    .attr("id", "marker")
    .attr("viewBox", "0 -3 6 6")
    .attr("refX", 25)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-3L5,0L0,3");

var simulation = d3.forceSimulation(dataset)
      .force("link", d3.forceLink(dataset_links).distance(linkDistance).strength(0.1))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide(+radius+linkDistance).strength(0.2))
      .on("tick", ticked);

    d3.selectAll(".mind-map").selectAll(".links")
    .data(dataset_links)
    .enter()
    .append("path")
    .attr("class","links")
    .attr("marker-end", "url(#marker)");

    d3.selectAll(".mind-map").selectAll(".nodes")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("class",function(d){return "nodes "+d.class})
    .attr("r",0)
    .attr("fill",function(d){return d.color})
    .each(
        function(d){d3.select(".mind-map")
                        .append("text")
                        .attr("class","text")
                        .attr("font-size", 4)
                        .attr("text-anchor","middle")
                        .attr("dy",3)
                        .text(function(){return d.title})
                        .call(wrapText,20,5)
        }
    )
    .call(d3.drag()
        .on("start", dragstart)
        .on("drag", dragged)
        .on("end", dragended)
        );


function ticked(){
    d3.selectAll(".mind-map").selectAll(".nodes")
    .data(dataset)
    .attr("r",radius);
    
    d3.selectAll(".mind-map").selectAll(".nodes")
    .data(dataset)
    .attr("cx",function(d){return xScale(d.x)})
    .attr("cy",function(d){return yScale(d.y)});
    
    d3.selectAll(".mind-map").selectAll(".links")
    .data(dataset_links)
    .attr("d",function(d){return "M"+xScale(d.source.x)+","+yScale(d.source.y)+"L"+xScale(d.target.x)+","+yScale(d.target.y);})
    
    d3.selectAll(".mind-map").selectAll(".text")
    .data(dataset)
    .attr("x",function(d){return d.x})
    .attr("y",function(d){return d.y-27})
    .each(function(d){d3.select(this).selectAll("tspan").attr("x",d.x)})
    
}

function dragstart() {
    
}

function dragged(d) {
    simulation.alpha(0.001);
    simulation.restart();
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended() {
    
}

function wrapText(selection, width, maxLine) {
    
    selection.each(function() {
                            var text = d3.select(this),
                            words = text.text().split(/\s+/).reverse(),
                            word,
                            line = [],
                            lineNumber = 1, // ems
                            x = text.attr("x")
                            y = text.attr("y"),
                            dy = parseFloat(text.attr("dy")),
                            tspan = text.text(null).append("tspan").attr("x", x).attr("y", y);
                            
                            while (word = words.pop()) {
                            line.push(word);
                            tspan.text(line.join(" "));
                            if (tspan.node().getComputedTextLength() > width) {
                                line.pop();
                                tspan.text(line.join(" "));
                                line = [word];
                                if(lineNumber<maxLine) {tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", dy).text(word)};
                                }
                            }
                        });
}