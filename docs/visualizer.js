var csv = "county,forfeitures completed,amount disbursed,population,amount disbursed per capita,per capita income,white,black,american indian or alaskan native,asian,native hawaiian or pacific islander,hispanic or latino,other race,multiracial\nalameda,316,2601248.92,1638215,1.5878556355545517,34937,46.2,12.5,0.5,26.2,0.8,22.2,8.8,5.0\nalpine,0,0.00,1110,0,29576,66.1,0.0,20.3,3.3,1.8,7.0,5.3,3.2\namador,14,299853.81,37001,8.10393800167563,28030,87.5,2.3,2.3,1.4,0.2,12.2,3.7,2.6\nbutte,37,441786.17,225411,1.9599139793532703,23431,75.2,1.5,1.5,4.2,0.2,14.1,3.4,5.6\ncalaveras,1,4000.00,44828,0.0892299455697332,28667,91.0,1.1,1.2,1.3,0.0,10.2,,2.9\ncolusa,7,69399.00,21482,3.2305651242901035,21271,68.0,1.0,1.4,1.2,0.2,53.8,23.0,5.3\ncontra costa,121,1105556.72,1126745,0.9811951417578955,38141,63.2,9.1,0.4,14.3,0.5,23.9,7.7,4.8\ndel norte,0,0.00,27254,0,19247,72.8,3.3,5.5,3.1,0.9,17.5,8.2,6.1\nel dorado,10,354011.83,184452,1.9192626265912,34385,87.8,0.8,1.0,3.5,0.1,11.8,3.5,3.4\nfresno,0,0.00,974861,0,20638,60.0,5.1,1.0,9.5,0.1,49.8,20.4,3.9\nglenn,3,131596.00,28017,4.697005389584895,21254,78.3,0.9,2.7,2.3,0.0,36.6,12.3,3.4\nhumboldt,80,1644534.50,135727,12.116487508012407,24209,82.7,1.2,5.8,2.3,0.3,9.6,3.0,4.7\nimperial,14,672996.50,180191,3.7349062938770525,16593,67.4,3.5,1.8,1.6,0.0,79.6,22.5,3.2\ninyo,0,0.00,18260,0,27532,77.7,1.1,10.0,1.5,0.4,18.7,7.4,1.9\nkern,35,491324.94,882176,0.5569466183618689,20167,69.0,5.7,1.1,4.0,0.1,48.5,16.5,3.6\nkings,7,117077.56,150965,0.7755278375782466,18296,72.0,7.2,1.3,3.8,0.2,50.2,11.7,3.8\nlake,47,385630.70,64591,5.970347262002447,22238,84.6,2.2,3.2,1.1,0.2,16.7,5.3,3.3\nlassen,3,25000.00,31345,0.7975753708725475,19339,70.0,8.7,3.7,1.3,0.5,17.4,12.8,3.0\nlos angeles,390,6984310.05,10170292,0.6867364329362421,27954,52.4,8.6,0.5,13.8,0.3,47.5,21.1,3.4\nmadera,20,166410.00,154998,1.0736267564742772,18817,80.9,3.3,1.7,2.0,0.5,52.8,8.1,3.5\nmarin,10,266588.00,261221,1.0205458213543321,54605,79.9,3.0,0.3,5.6,0.2,14.9,7.7,3.3\nmariposa,0,0.00,17531,0,27209,89.4,1.0,1.8,1.1,0.3,9.4,2.5,3.9\nmendocino,105,1232727.16,87649,14.06436080274732,23585,82.9,1.1,4.9,1.8,0.2,21.7,5.9,3.2\nmerced,21,569060.00,268455,2.119759363766739,18304,67.1,3.9,1.0,7.5,0.2,54.4,17.3,3.0\nmodoc,0,0.00,8965,0,20769,87.5,1.1,3.4,0.8,0.1,13.5,4.1,3.0\nmono,0,0.00,13909,0,28789,80.7,1.3,4.5,0.6,0.3,25.8,10.4,2.2\nmonterey,1,9477.90,433898,0.0218436130150404,25508,72.0,3.1,0.9,6.2,0.5,54.6,13.7,3.6\nnapa,26,213203.16,142456,1.4966246419947211,35309,81.3,2.0,0.7,6.8,0.3,31.5,5.7,3.2\nnevada,9,458534.00,98877,4.63741820645853,31607,92.4,0.5,1.2,1.4,0.2,8.3,1.8,2.5\norange,193,1863047.78,3169776,0.5877537655657687,34416,62.0,1.7,0.4,17.8,0.3,33.3,14.9,2.9\nplacer,46,423157.60,375391,1.127244925957202,35583,84.7,1.3,0.8,6.0,0.2,12.6,3.3,3.7\nplumas,4,2357.31,18409,0.12805203976315932,28104,91.5,1.4,2.8,1.0,0.1,8.0,0.9,2.4\nriverside,106,1384764.50,2361026,0.5865096360649988,24516,66.0,6.3,1.0,5.9,0.3,45.0,16.7,3.8\nsacramento,526,7282047.91,1501335,4.850381766894131,27180,60.0,10.2,0.9,14.3,1.0,21.2,7.9,5.6\nsan benito,0,0.00,58792,0,26300,76.2,1.3,1.3,2.4,0.0,55.6,14.4,4.4\nsan bernardino,119,4072603.99,2128133,1.9136980583450378,21932,61.3,8.7,1.0,6.3,0.3,48.6,18.0,4.4\nsan diego,76,2671266.05,3299521,0.8095920741222741,30955,71.3,5.0,0.7,10.9,0.5,31.6,7.2,4.4\nsan francisco,172,1009665.83,864816,1.167492079239977,46777,48.5,6.1,0.5,33.3,0.4,15.1,6.6,4.7\nsan joaquin,91,2361168.30,726106,3.251823149788047,22857,59.3,7.4,1.0,14.4,0.5,38.3,11.6,5.8\nsan luis obispo,11,51316.17,281401,0.18235958649756043,30204,83.9,2.2,1.0,3.2,0.1,20.4,6.2,3.3\nsan mateo,89,902980.58,765135,1.1801585079757166,45346,59.6,2.9,0.3,24.6,1.5,24.9,6.7,4.4\nsanta barbara,0,0.00,444769,0,30330,76.4,1.8,1.0,5.0,0.2,41.9,11.9,3.7\nsanta clara,57,2467646.48,1918044,1.2865432075593677,40698,50.9,2.6,0.6,31.8,0.4,26.6,9.7,4.1\nsanta cruz,9,77591.73,274146,0.28303068437985596,32975,82.6,1.0,0.5,4.2,0.2,31.4,7.7,3.9\nshasta,54,707598.10,179533,3.9413261071780674,23691,87.9,0.9,2.2,2.6,0.2,8.3,1.9,4.3\nsierra,0,0.00,2967,0,26137,92.5,1.2,0.3,0.1,0.0,7.5,5.5,0.5\nsiskiyou,20,261201.22,43554,5.997180970748955,22335,87.1,1.2,2.9,1.3,0.3,10.2,1.2,6.1\nsolano,88,307430.39,436092,0.7049668189281161,29367,52.1,14.6,0.6,14.4,0.8,23.6,10.5,7.1\nsonoma,55,2067224.29,502146,4.116779362974115,33119,81.6,1.5,1.2,4.0,0.3,24.3,7.9,3.4\nstanislaus,40,266672.25,538388,0.4953161103144944,21820,76.4,2.9,1.0,5.2,0.7,41.3,9.6,4.2\nsutter,18,367388.86,96463,3.808598737339705,22464,65.8,1.9,1.5,13.8,0.3,28.3,10.9,5.8\ntehama,20,375469.76,63308,5.930842231629494,20689,85.1,0.7,2.3,1.2,0.1,21.4,6.6,4.0\ntrinity,13,700361.63,13069,53.589534776953094,22551,89.0,0.4,1.7,1.2,0.3,6.7,0.9,6.5\ntulare,30,603370.61,459863,1.3120660066150136,17986,78.7,1.6,1.3,3.5,0.1,59.8,11.6,3.2\ntuolumne,7,62089.96,53709,1.1560438660187307,26084,87.0,2.1,1.8,1.1,0.1,10.5,4.1,3.8\nventura,80,781441.35,850536,0.9187634033127345,32740,70.9,1.8,1.1,6.9,0.2,39.7,15.2,4.0\nyolo,16,71388.00,213016,0.33512975551132307,28631,66.7,2.5,1.2,12.9,0.6,29.8,10.3,5.7\nyuba,13,155843.68,74492,2.0920861300542337,20046,69.7,2.6,2.0,7.0,0.3,24.6,11.5,6.9".split("\n");

function midAngle(d){
  return d.startAngle + (d.endAngle - d.startAngle)/2;
}

function getCountyName(i){
  var line = csv[i + 1];
  line = line.split(",")[0];
  return line;
}

function getNumForfeitures(i){
  var line = csv[i + 1];
  line = line.split(",")[1];
  return parseInt(line);
}

function getAmountTaken(i){
  var line = csv[i + 1];
  line = line.split(",")[2];
  return parseFloat(line);
}

function getAmountPerCapita(i){
  var line = csv[i + 1];
  line = line.split(",")[4];
  return parseFloat(line);
}

function getPerCapitaIncome(i){
  var line = csv[i + 1];
  line = line.split(",")[5];
  return parseInt(line);
}

function getPopulation(i){
  var line = csv[i + 1];
  line = line.split(",")[3];
  return parseInt(line);
}

function getDemographics(i){
  var line = csv[i + 1].split(",");
  var demographics = {
    white: Math.max(0.01, parseFloat(line[6])),
    black: Math.max(0.01, parseFloat(line[7])),
    aioan: Math.max(0.01, parseFloat(line[8])),
    asian: Math.max(0.01, parseFloat(line[9])),
    pacific: Math.max(0.01, parseFloat(line[10])),
    hispanic: Math.max(0.01, parseFloat(line[11])),
    other: Math.max(0.01, parseFloat(line[12])),
    multi: Math.max(0.01, parseFloat(line[13])),
  };
  return demographics;
}

function addSuffix(i){
  var j = i % 10,
  k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}

function getCountyIndexFromName(countyName){
  for(var j = 0; j < csv.length - 1; j++){
    if(countyName === getCountyName(j)){ //This is the county we want
      return j;
    }
  }
  return -1;
}

var tooltip = d3.select("#tooltip");

//Click handler
function clicked(d,i) {

}

var width, height, projection, path, svg, features, zoom;

//Zoom handler
function zoomed() {
  //features.attr("transform", "translate(" + zoom.translate() + ")scale(" + zoom.scale() + ")").selectAll("path").style("stroke-width", 1 / zoom.scale() + "px" );
  features.attr("transform", d3.event.transform); //.selectAll("path").style("stroke-width", 1 / zoom.scale() + "px" );
}

//Position of the tooltip relative to the cursor
var tooltipOffset = {x: 5, y: -25};

//Create a tooltip, hidden at the start
function showTooltip(d) {
  moveTooltip();

  var j = getCountyIndexFromName(d.properties.name.toLowerCase());

  var textToDisplay;

  if(getNumForfeitures(j) != 0) {
    textToDisplay = "<strong>" + d.properties.name + " County</strong><br>" + "<i>Total Forfeitures Initiated:</i> " + getNumForfeitures(j).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "<br><i>Total Amount Seized:</i> $" + getAmountTaken(j).toFixed().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "<br>" + "<i>Amount Seized Per Capita:</i> $" + getAmountPerCapita(j).toFixed(2) + "<br><i>Per Capita Income:</i> $" + getPerCapitaIncome(j).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "<br><i>Population</i>: " + getPopulation(j).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " people";

  }
  else {
    textToDisplay = "<strong>" + d.properties.name + " County</strong><br>No asset forfeiture data from this county";
    d3.select("#pieChart").html("");
  }

  var demographics = getDemographics(j);

  d3.select("#pieChart").html("");
  var pie = new d3pie("pieChart", {
    "header": {
      "title": {
        "text": "RACE",
        "font": "Francois",
        "fontSize": 24
      },
      "subtitle": {
        "color": "#999999",
        "fontSize": 12,
        "font": "open sans"
      },
      "location": "pie-center",
      "titleSubtitlePadding": 9
    },
    "footer": {
      "color": "#999999",
      "fontSize": 10,
      "font": "open sans",
      "location": "bottom-left"
    },
    "size": {
      "canvasWidth": 500,
      "canvasHeight": 400,
      "pieInnerRadius": "60%",
      "pieOuterRadius": "80%"
    },
    "data": {
      "sortOrder": "value-asc",
      "content": [
        {
          "label": "White",
          "value": demographics.white,
          "color": "#E4F1FE"
        },
        {
          "label": "Black",
          "value": demographics.black,
          "color": "#3A539B"
        },
        {
          "label": "Asian",
          "value": demographics.asian,
          "color": "#C5EFF7"
        },
        {
          "label": "Hispanic or Latino",
          "value": demographics.hispanic,
          "color": "#81CFE0"
        },
        {
          "label": "Pacific Islander",
          "value": demographics.pacific,
          "color": "#59ABE3"
        },
        {
          "label": "Native American",
          "value": demographics.aioan,
          "color": "#19B5FE"
        },
        {
          "label": "Two or more races",
          "value": demographics.multi,
          "color": "#5C97BF"
        },
        {
          "label": "Other",
          "value": demographics.other,
          "color": "#4B77BE"
        }
      ]
    },
    "labels": {
      "outer": {
        "pieDistance": 10
      },
      "inner": {
        "format": "value",
        "hideWhenLessThanPercentage": 3,
      },
      "mainLabel": {
        "fontSize": 12,
        "font": "Didact"
      },
      "value": {
        "color": "#000000",
        "decimalPlaces": 0,
        "fontSize": 14,
        "font": "Francois"
      },
      "lines": {
        "enabled": true,
        "style": "straight",
      },
      "truncation": {
        "enabled": true
      }
    },
    "effects": {
      "load": {
			"speed": 0
		  },
      "pullOutSegmentOnClick": {
        "effect": "linear",
        "speed": 400,
        "size": 8
      },
      "highlightSegmentOnMouseover": false,
      "highlightLuminosity": -0.5
    },
    "misc": {
      "gradient": {
        "enabled": false,
        "percentage": 100
      }
    }
  });

  //tooltip.style("display","block");

  d3.select("#textbox").html("<p>" + textToDisplay + "</p>");
}

//Move the tooltip to track the mouse
function moveTooltip() {
  /*if(d3.event.pageY > $(document).height() - 550){
    tooltip.style("top",(d3.event.pageY-550-tooltipOffset.y)+"px")
        .style("left",(d3.event.pageX+tooltipOffset.x)+"px");
  }
  else{
  tooltip.style("top",(d3.event.pageY+tooltipOffset.y)+"px")
      .style("left",(d3.event.pageX+tooltipOffset.x)+"px");
    }*/
}

//Create a tooltip, hidden at the start
function hideTooltip() {
  $("#textbox").html("");
  $("#pieChart").html("");
}

$(document).ready(function(){
  width = 517;
  height = 600;

  projection = d3.geoMercator().scale(2736.048409006535).center([-119.269965,37.42153709065973]).translate([width/2,height/2]);
  path = d3.geoPath().projection(projection);
  svg = d3.select("#wrapper").append("svg").attr("width", width).attr("height", height).style("display", "inline-block");

  features = svg.append("g").attr("class","features");
  zoom = d3.zoom().scaleExtent([1, Infinity]).on("zoom",zoomed);

  svg.call(zoom);

  var counties;

  d3.json("Assets/california-counties.geojson", function(error,geodata) {
    if (error) return console.log(error);

    counties = features.selectAll("path").data(geodata.features).enter()._groups[0];

    features.selectAll("path").data(geodata.features).enter().append("path").attr("d",path).on("click",clicked).on("mouseover",showTooltip).on("mousemove",moveTooltip).on("mouseout",hideTooltip)
    .filter(function(d, i){
      var countyName = counties[i].__data__.properties.name.toLowerCase();

      var j = getCountyIndexFromName(countyName);
      if(j != -1){
        var forfeitures = getNumForfeitures(j);
        var amountPerCapita = getAmountPerCapita(j);
        var r, g, b;

        if(forfeitures == 0) {
          r = 108;
          g = 122;
          b = 137;
        }
        else if(amountPerCapita > 30){
          r = 197;
          g = 42;
          b = 38;
        }
        else if(amountPerCapita > 20){
          r = 201;
          g = 53;
          b = 41;
        }
        else if(amountPerCapita > 10){
          r = 206;
          g = 71;
          b = 43;
        }
        else if(amountPerCapita > 5){
          r = 210;
          g = 85;
          b = 45;
        }
        else if(amountPerCapita > 2){
          r = 213;
          g = 99;
          b = 47;
        }
        else if(amountPerCapita > 1){
          r = 228;
          g = 130;
          b = 51;
        }
        else if(amountPerCapita > 0.75){
          r = 230;
          g = 163;
          b = 56;
        }
        else if(amountPerCapita > 0.5){
          r = 237;
          g = 191;
          b = 61;
        }
        else{
          r = 241;
          g = 204;
          b = 63;
        }

        d3.select(this).style("fill", "rgb(" + r + "," + g + "," + b + ")");
      }

    });
  });

  if($(window).width() < 1100){
    $("#body").hide();
    $("#resizemessage").show();
  }
});

$(window).resize(function(){
  if($(window).width() < 1100){
    $("#body").hide();
    $("#resizemessage").show();
  }
  else{
    $("#body").show();
    $("#resizemessage").hide();
  }
});
