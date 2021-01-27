let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
};
//Storing work day tasks
$(document).ready(function () {
    if (!localStorage.getItem("workDay")) {
        updateCalendarTasks(workDay);
    } else {
        updateCalendarTasks(JSON.parse(localStorage.getItem("workDay")));
    }
})
//Creating current time for user
$("#currentDay h6").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm:ss a"));



//Creating past,future and present classes for planner
let counter = 1;
for (const property in workDay) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    let timeId = "#time" + counter;
    let presentHour = moment().hour();
    let timeString = $(timeId).text();
    let timeNumber = hourNumberFromHourString(timeString);
    if (timeNumber < presentHour) {
        $(textEntry).addClass("past-hour");
    } else if (timeNumber > presentHour) {
        $(textEntry).addClass("future-hour");
    } else {
        $(textEntry).addClass("present-hour");
    }
    counter++;
}

$("button").click(function () {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();

    saveSchedule(hourString, value);
});
//Function to pull hour number for past, future, and present classes
function hourNumberFromHourString(hourString) {
    switch (hourString) {
        case "8 AM": return 8;
        case "9 AM": return 9;
        case "10 AM": return 10;
        case "11 AM": return 11;
        case "12 PM": return 12;
        case "1 PM": return 13;
        case "2 PM": return 14;
        case "3 PM": return 15;
        case "4 PM": return 16;
        case "5 PM": return 17;
    }
};
//Setting local storage
function loadCorrectDataset() {
    result = localStorage.getItem("workDay")
    return (result ? result : workDay);
};
//Intitializing local storage
function intitializeLocalStorage() {
    localStorage.setItem("workday", JSON.stringify(workDay));
};
// saving to local storage
function saveToLocalStorage(dayObj) {
    localStorage.setItem("workDay", JSON.stringify(dayObj));
};
//Saves schedule to local storage
function saveSchedule(hourString, val) {
    if (!localStorage.getItem("workDay")) {
        intitializeLocalStorage();
    }

    let workHours = JSON.parse(localStorage.getItem("workDay"));
    workHours[hourString] = val

    saveToLocalStorage(workHours);
};
//Allows user to see green for future and red for current
function updateCalendarTasks(dayObject) {
    $(".calendar-row").each(function (index) {
        let res = $(this).children("div");
        $(this).children("textarea").text(dayObject[res.text()]);
    });
};
