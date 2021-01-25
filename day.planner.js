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
//Creatuing current time for user
$("#currentDay h6").text(moment().format("dddd") + "," + moment().format("MMMM Do YYYY, h:mm:ss a"));
//Creating past,future and present classes for planner
let counter = 1;
for (const property in workDay) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    let timeId = "#time" + counter;
    let presentHour = moment().hour();
    let timeString = $(timeId).text();
}