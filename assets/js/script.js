//Get current day and display it in the header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);

//color code the blocks to according to time of day
//past
//present
//future

var loadEvent = function () {
  var userEvent = JSON.parse(localStorage.getItem("userEvent")) || {};
console.log(userEvent);
// debugger;
for (let i = 0; i < userEvent.length; i++) {
  $(".time-block#" + userEvent[i].id + "textarea").text(userEvent[i].text);
  }
};

var saveText = function () {
  var userEvent = JSON.parse(localStorage.getItem("userEvent")) || {};

  $(".time-block").on("click", ".saveBtn", function () {

    var text = $(this).siblings("textarea").val();
    var id = $(this).closest(".time-block").attr("id");
  
    // var currentEvent = {
    //   text: text,
    //   id: id
    // };
    
    userEvent[id] = text;
    //previously had it as an array
    // userEvent.push(currentEvent)

    localStorage.setItem("userEvent", JSON.stringify(userEvent));
  });
};

loadEvent();
saveText();


