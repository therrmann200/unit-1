//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
};
var theid=$('#mydiv').attr('id');
$('#mydiv').append(theid);
$('#mydiv').attr('class', 'foo');

 //Added below Example 3.6...
    //change the text color
    $('#mydiv').css('color', 'red');

    //change the text size and alignment
    $('#mydiv').css({
        'font-size': '2em',
        'text-align': 'left'
    });

    //get the text color and add it as text to the div
    var thecolor = $('#mydiv').css('color');
    $('#mydiv').append(thecolor);

    //fooled ya! thecolor is rgb(255, 0, 0), the CSS interpreter's translation of the keyword 'red'
$('script').each(function(){
    var thesource = $(this).attr('src');
    $('mydiv').append(thesource);
});

   //Added below Example 3.8...
    //click listener with anonymous handler function
    $(document).ready(function() {
    $('table').click(function(){
        alert('Madison Rocks! Go Badgers!');
    });
});

    //alias method for the click event listener
    $('table').click(function(){
        alert('Visit Superior and see the big lake!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //add the event listener
    $('table').on('click', clickme);

    //remove the event listener
    $('table').off('click', clickme);
    //call the initialize function when the document has loaded
$(document).ready(initialize);



function jsAjax(){
    // Step 1: Create the request 
    var ajaxRequest = new XMLHttpRequest();

    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState == 4){
            callback(ajaxRequest.response);
        };
    };

    //Step 3: Open the server connection
    ajaxRequest.open('GET', 'data/MegaCities.geojson', true);

    //Step 4: Set the response data type
    ajaxRequest.responseType = "json";

    //Step 5: Send the request
    ajaxRequest.send();
};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response);
};

window.onload = jsAjax();
