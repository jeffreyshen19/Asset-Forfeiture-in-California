/* jshint -W100 */

/*
  Parser.js
  This file reads the raw pdf and outputs a more readable csv file of overall forfeiture data
*/

var pdfText = require('pdf-text');
var fs = require('fs');
var colors = require('colors');

var rawChunks; //Array holding raw strings from pdf processing
var pdfString = ""; //String containing contents of pdf

var numForfeitures = 2739, amountCollected = 37915514.38; //Manually collected from the end of pdf

function isLetter(str) {
  return str.length === 1 && (str.match(/[a-z]/i) || str.includes(" "));
}

function getCountyName(str){
  for(var i = 0; i < str.length; i++){
    if(!isLetter(str.charAt(i))) return str.substring(0, i);
  }
}

function getNum(str){
  for(var i = 0; i < str.length; i++){
    if(!isLetter(str.charAt(i))) return str.split("$")[0].substring(i);
  }
}

//TODO: Switch to table 1

function getAmount(str){
  return str.split("$")[1].replace(/,/g, "");
}

function getCountyInfo(countyName){
  var percapitaincome = "", white = "", black = "", aioan = "", asian = "", pacific = "", hispanic = "", other = "", multi = "";

  if(countyName === "san francisco"){ //manually fill in san francisco's information
    percapitaincome = "46777";
    white = "48.5";
    black = "6.1";
    asian = "33.3";
    aioan = "0.5";
    pacific = "0.4";
    other = "6.6";
    multi = "4.7";
    hispanic = "15.1";
  }
  else if(countyName === "san diego"){ //manually fill in san diegos's information
    percapitaincome = "30955";
    white = "71.3";
    black = "5.0";
    asian = "10.9";
    aioan = "0.7";
    pacific = "0.5";
    other = "7.2";
    multi = "4.4";
    hispanic = "31.6";
  }
  else{
    var data = fs.readFileSync("Data/County\ Data/" + countyName + ".html", "utf8");
    var lines = data.split("\n");

    percapitaincome = lines[50].replace(/<[^>]*>/gi, "").replace(/,/gi, "").replace("$", ""); //per capita income on the 51st line
    for(var i = 0; i < 50; i++){
      if(lines[i].includes("White")){
        white = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("Black or African American")){
        black = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("American Indian or Alaska Native")){
        aioan = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("Asian")){
        asian = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("Native Hawaiian or other Pacific Islander")){
        pacific = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("Some other race")){
        other = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("Two or more races")){
        multi = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
      else if(lines[i].includes("Hispanic or Latino")){
        hispanic = lines[i + 2].replace(/<[^>]*>/gi, "").replace("%", "");
      }
    }
  }

  return {
    "percapitaincome": percapitaincome,
    "white": white,
    "black": black,
    "aioan": aioan,
    "asian": asian,
    "pacific": pacific,
    "hispanic": hispanic,
    "other": other,
    "multi": multi
  };
}

//Add population data (data from https://en.wikipedia.org/wiki/List_of_counties_in_California)
var data = fs.readFileSync("Data/wikipedia_cleaned.html", 'utf8');
var lines = data.split("\n");

function getPopulation(i){
  var line = lines[14 * i + 7]; //get the line
  line = line.replace(/<span [^<]*<\/span>/gi, "").replace(/<[^>]*>/gi, "").replace(/,/gi, ""); //strip it using regex
  return parseInt(line);
}

var wordsToRemove =["State of California – Asset Forfeiture Report 2016", "State of California", "County", "Total Cases Initiated", "Estimated Value of Assets Seized", "ASSET FORFEITURE REPORT -", "Table 1", "2016"];

pdfText("Data/table1.pdf", function(err, chunks) {
  rawChunks = chunks;
  for(var i = 0; i < rawChunks.length; i++){
    if(!wordsToRemove.includes(rawChunks[i])){ //Remove extraneous strings
      pdfString += rawChunks[i];
    }
  }

  //Remove page numbers and extra stuff
  pdfString = pdfString.replace("10ALAMEDA", "ALAMEDA").replace("11SAN LUIS OBISPO", "SAN LUIS OBISPO").replace("Total:3,230$49,541,421.25", "");

  //Split string by county
  var counties = [];
  var parsingMode = false;
  var lastIndex = 0;
  for(var j = 0; j < pdfString.length; j++){
    var currentChar = pdfString.charAt(j);
    if(!isLetter(currentChar)) parsingMode = true;
    if(isLetter(currentChar) && parsingMode){
      counties.push(pdfString.substring(lastIndex, j));
      lastIndex = j;
      parsingMode = false;
    }
  }
  counties.push(pdfString.substring(lastIndex));

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
  }

  console.log("Successfully generated data file".green.bold);
});
