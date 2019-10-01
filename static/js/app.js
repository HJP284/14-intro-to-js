// target table display

var tbody = d3.select("#target-table-display");

// button selection

var submitButton = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");

var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#cityname");

var shapesubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shapename");

var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#countryname");

var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#statename");




// adding data objects

data.forEach(obj => {
    var tRow = tbody.append("tr");
    Object.entries(obj).forEach(([key,value]) => {
        var tData = tRow.append("td");
        tData.text(value);
    });
});

// click button

submitButton.on("click", function() {       
    tbody.html("");
    d3.event.preventDefault();
    
    
    var inputField = d3.select("#datetime");
   
    var inputElement = inputField.property("value");

    // print 
    console.log(inputElement);
    var inputTypeArray = data.filter(one => one.datetime === inputElement);   
    console.log(inputTypeArray)

    
    inputTypeArray.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });      
});


citysubmitButton.on("click", function() {      
    tbody.html("");

    // preventing refresh
    
    d3.event.preventDefault();
    
    var cityinputElement = cityinputField.property("value");
    console.log(cityinputElement);
    var cityinputTypeArray = data.filter(two => two.city === cityinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(cityinputTypeArray)
    
    cityinputTypeArray.forEach((selects) => {
        
        var Crow = tbody.append("tr");
        Object.entries(selects).forEach(([key,value]) => {
            var Ccell = Crow.append("td");
            
            Ccell.text(value);
        });
    });      
});


statesubmitButton.on("click", function() {
        
    tbody.html("");
    
    d3.event.preventDefault();

    var stateinputElement = stateinputField.property("value");
    console.log(stateinputElement);
    var stateinputTypeArray = data.filter(three => three.state === stateinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(stateinputTypeArray)

    
    
    stateinputTypeArray.forEach((selectss) => {
       
        var Srow = tbody.append("tr");
        Object.entries(selectss).forEach(([key,value]) => {
            var Scell = Srow.append("td");
            Scell.text(value);
        });
    });      
});


countrysubmitButton.on("click", function() {
         
    tbody.html("");
    
    d3.event.preventDefault();
  
    var countryinputElement = countryinputField.property("value");
    console.log(countryinputElement);
    var countryinputTypeArray = data.filter(four => four.country === countryinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(countryinputTypeArray)

    countryinputTypeArray.forEach((selectsc) => {
        
        var Corow = tbody.append("tr");
        
        Object.entries(selectsc).forEach(([key,value]) => {
            var Cocell = Corow.append("td");
            
            Cocell.text(value);
        });
    });      
});



shapesubmitButton.on("click", function() {
         
    tbody.html("");
    d3.event.preventDefault();
    
    var shapeinputElement = shapeinputField.property("value");
    console.log(shapeinputElement);
    var shapeinputTypeArray = data.filter(five => five.shape === shapeinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(shapeinputTypeArray)
   
    shapeinputTypeArray.forEach((selectsh) => {
        
        var Shrow = tbody.append("tr");
        Object.entries(selectsh).forEach(([key,value]) => {
            var Shcell = Shrow.append("td");
            Shcell.text(value);
        });
    });      
});