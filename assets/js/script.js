//Get current day and display it in the header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);

//color code the blocks to according to time of day
//past
//present
//future

//link text area text to the save button to store that in local storage
//so that the events persist