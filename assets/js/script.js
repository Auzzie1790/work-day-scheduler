// Display Date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// save button listenter
$(".saveBtn").on("click", function() {
// check text value
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id"); 

// save in local storage
    localStorage.setItem(time, value);
})

// retreive from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;

//Change textarea background color based on time
var currentHour = moment().format('H');


if (currentHour < hour8) {
    $("#hour8").addClass("future");
} else if (currentHour > hour8) {
    $("#hour8").addClass("past");
} else if (currentHour = hour8) {
    $("#hour8").addClass("present");
}

if (currentHour < hour9) {
    $("#hour9").addClass("future");
} else if (currentHour > hour9) {
    $("#hour9").addClass("past");
} else if (currentHour = hour9) {
    $("#hour9").addClass("present");
}

if (currentHour < hour10) {
    $("#hour10").addClass("future");
} else if (currentHour > hour10) {
    $("#hour10").addClass("past");
} else if (currentHour = hour10) {
    $("#hour10").addClass("present");
}

if (currentHour < hour11) {
    $("#hour11").addClass("future");
} else if (currentHour > hour11) {
    $("#hour11").addClass("past");
} else if (currentHour = hour11) {
    $("#hour11").addClass("present");
}

if (currentHour < hour12) {
    $("#hour12").addClass("future");
} else if (currentHour > hour12) {
    $("#hour12").addClass("past");
} else if (currentHour = hour12) {
    $("#hour12").addClass("present");
}

if (currentHour < hour13) {
    $("#hour13").addClass("future");
} else if (currentHour > hour13) {
    $("#hour13").addClass("past");
} else if (currentHour = hour13) {
    $("#hour13").addClass("present");
}

if (currentHour < hour14) {
    $("#hour14").addClass("future");
} else if (currentHour > hour14) {
    $("#hour14").addClass("past");
} else if (currentHour = hour14) {
    $("#hour14").addClass("present");
}

if (currentHour < hour15) {
    $("#hour15").addClass("future");
} else if (currentHour > hour15) {
    $("#hour15").addClass("past");
} else if (currentHour = hour15) {
    $("#hour15").addClass("present");
}

if (currentHour < hour16) {
    $("#hour16").addClass("future");
} else if (currentHour > hour16) {
    $("#hour16").addClass("past");
} else if (currentHour = hour16) {
    $("#hour16").addClass("present");
}

if (currentHour < hour17) {
    $("#hour17").addClass("future");
} else if (currentHour > hour17) {
    $("#hour17").addClass("past");
} else if (currentHour = hour17) {
    $("#hour17").addClass("present");
}

