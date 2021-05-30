import "./challenge-chart.js";
import { ChallengeDataService } from "../../ChallengeDataService.js"; 

//Connect variables to button ids in HTML
var smallButton = document.querySelector("#small");
var mediumButton = document.querySelector("#medium");
var largeButton = document.querySelector("#large");

let table = document.querySelector("table");

//Takes values for the header and creates table header
function createTableHead(table, headVals) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of headVals) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

//Takes in values from column X and Y and adds the values to
//the table to be displayed below the graph
function createTable(table, columnX, columnY) {
  let counter = 0;

  for (let valueX of columnX) {
    let row = table.insertRow();
    let cell = row.insertCell();
    let text = document.createTextNode(valueX);
    cell.appendChild(text);

    let cellY = row.insertCell();
    let textY = document.createTextNode(columnY[counter]);
    cellY.appendChild(textY);
    counter++; 
  }
}

//Takes the X and Y column values and pushes the data to an array to share
//with the charting component to display in a graph
function createChart(columnX, columnY) {
  let chart = document.querySelector("challenge-chart");
  let chartData = [];

  for(let i = 0; i < columnX.length; i++) {
    chartData.push({x: columnX[i], y: columnY[i]});
  }

  chart.data = chartData;
}

//When clicked, create ChallengeDataService object to generate 
//ChallengeDataSet Promise
smallButton.addEventListener("click", function() {
  const smallDataService = new ChallengeDataService;
  let smallDataSet = smallDataService.getDataSet('small');
  
  //Once promise is resolved
  smallDataSet.then(function(result){
    let headVals = [];
    headVals[0] = result.xColumn.name;
    headVals[1] = result.yColumn.name;
    
    let xColVals = result.xColumn.values;
    let yColVals = result.yColumn.values;
    
    createTableHead(table, headVals);
    createTable(table, xColVals, yColVals);

    createChart(xColVals, yColVals);

  });
});

mediumButton.addEventListener("click", function() {
  const mediumDataService = new ChallengeDataService;
  let mediumDataSet = mediumDataService.getDataSet('medium');
  
  //Once promise is resolved
  mediumDataSet.then(function(result){
    let headVals = [];
    headVals[0] = result.xColumn.name;
    headVals[1] = result.yColumn.name;

    let xColVals = result.xColumn.values;
    let yColVals = result.yColumn.values;
    
    createTableHead(table, headVals);
    createTable(table, xColVals, yColVals);

    createChart(xColVals, yColVals);

  });
});

largeButton.addEventListener("click", function() {
  const largeDataService = new ChallengeDataService;
  let largeDataSet = largeDataService.getDataSet('large');
  
  //Once promise is resolved
  largeDataSet.then(function(result){
    let headVals = [];
    headVals[0] = result.xColumn.name;
    headVals[1] = result.yColumn.name;
    
    let xColVals = result.xColumn.values;
    let yColVals = result.yColumn.values;
    
    createTableHead(table, headVals);
    createTable(table, xColVals, yColVals);

    createChart(xColVals, yColVals);

  });
});