//Displaying current day

var m = moment().format("MMMM Do YYYY");
var time = m.toString();
$("#currentDay").append(time);

//Declaring Variables

var nineA = $(".nine");
var tenA = $(".ten");
var elevenA = $(".eleven");
var twelveP = $(".twelve");
var oneP = $(".one");
var twoP = $(".two");
var threeP = $(".three");
var fourP = $(".four");
var fiveP = $(".five");
var saveBtn = $(".saveBtn");
var hoursDay = [9,10,11,12,13,14,15,16,17];
var hoursArray = [nineA,tenA,elevenA,twelveP,oneP,twoP,threeP,fourP,fiveP];
var currentHour = moment().hour()

//Determing what hours are when from the current time

for (i = 0; i < 9; i++){
    if (currentHour === hoursDay[i]){
        $(hoursArray[i].addClass("present"))
    }
    else if (currentHour > hoursDay[i]) {
        $(hoursArray[i].addClass("past"))
    }
    else if (currentHour < hoursDay[i]){
        $(hoursArray[i].addClass("future"))
    }
};

//Saving the information entered into boxes locally

$(document).on("click", ".saveBtn", function(){
    for(i = 0; i < 9; i++){
    var key = this.id;
    $("#text" + i).text(theData)
    var theData = $("#text" + i).val()
    var value = $(this).siblings("textarea").val()
    var theData = localStorage.setItem(key, value)
    }
});

//Displaying the information saved into the corresponding boxes

for(i = 0; i < 9; i++){
    $("#text" + i).text(localStorage.getItem(i))
};