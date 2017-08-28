/* jshint -W100 */

/*
  ForfeitureLogParser.js
  This file reads the raw pdf and produces logs of forfeitures for each county.
*/

var pdfText = require('pdf-text');
var fs = require('fs');
var colors = require('colors');

var rawChunks; //Array holding raw strings from pdf processing
var pdfString = ""; //String containing contents of pdf

function isLetter(str) {
  return str.length === 1 && (str.match(/[a-z]/i) || str.includes(" "));
}

var bannedPhrases = ["State of California – Asset Forfeiture Report 2016", "Recipient", "Date", "Disbursed", "Amount", "Admin", "Number", "Docket", "Forfeited", "Table", "Table "];

var countyNames = ["ALAMEDA", "AMADOR", "BUTTE", "CALAVERAS", "COLUSA", "CONTRA COSTA", "EL DORADO", "FRESNO", "GLENN", "HUMBOLDT", "IMPERIAL", "KERN", "KINGS", "LAKE", "LOS ANGELES", "MADERA", "MERCED", "MONTEREY", "NAPA", "NEVADA", "ORANGE", "PLACER", "PLUMAS", "RIVERSIDE", "SACRAMENTO", "SAN BERNARDINO", "SAN DIEGO", "SAN FRANCISCO", "SAN JOAQUIN", "SAN LUIS OBISPO", "SAN MATEO", "SANTA BARBARA", "SANTA CLARA", "SANTA CRUZ", "SHASTA", "SISKIYOU", "SOLANO", "SONOMA", "SUTTER", "TEHAMA", "TRINITY", "TULARE", "TUOLUMNE", "VENTURA", "YOLO", "YUBA"];

var countyData = [];

var currentCounty = 0;

var county = {
  name: "Alameda",
  records: [
    {
      admin_number: "x",
      docket_number: "df",
      amount_forfeited: "555",
      date_dispursed: "xxx",
      recipients: [
        {
          name: "bob",
          amount: "",
        }
      ]
    }
  ]
};

pdfText("Data/report_raw.pdf", function(err, chunks) {
  rawChunks = chunks;
  for(var i = 0; i < rawChunks.length; i++){
    var shouldBePushed = true;

    //Remove page numbers (17-368)
    for(var j = 17; j <= 368; j++){
      if(rawChunks[i] === "" + j) {
        shouldBePushed = false;
        break;
      }
    }

    //Filter words
    for(var k = 0; k < bannedPhrases.length; k++){
      if(bannedPhrases[k] === rawChunks[i]){
        shouldBePushed = false;
        break;
      }
    }

    //Check county
    if(currentCounty < countyNames.length - 1 && rawChunks[i] === countyNames[currentCounty + 1]){
      currentCounty++;
      console.log(currentCounty);
    }

    if(shouldBePushed){
      console.log(rawChunks[i]);
      pdfString += rawChunks[i] + " ";
    }
  }

  //console.log(pdfString);

  /*
  //Start writing to csv file
  fs.writeFileSync("Data/parsed.csv", "county,forfeitures completed,amount disbursed,population,amount disbursed per capita,per capita income,white,black,american indian or alaskan native,asian,native hawaiian or pacific islander,hispanic or latino,other race,multiracial\n"); //heading

  var line, countyName, num, amount, population, countyInfo;

  for(var k = 0; k < counties.length; k++){
    countyName = getCountyName(counties[k]).toLowerCase();
    num = getNum(counties[k]);
    amount = getAmount(counties[k]);
    population = getPopulation(k);
    countyInfo = getCountyInfo(countyName);

    line = countyName + "," + num + "," + amount + "," + population + "," + (amount / population) + "," + countyInfo.percapitaincome + "," + countyInfo.white + "," + countyInfo.black + "," + countyInfo.aioan + "," + countyInfo.asian + "," + countyInfo.pacific + "," + countyInfo.hispanic + "," + countyInfo.other + "," + countyInfo.multi;

    fs.appendFileSync("Data/parsed.csv", line + "\n");
  }*/

  console.log("Successfully generated data file".green.bold);
});
