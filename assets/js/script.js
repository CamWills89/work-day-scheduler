//Get current day and display it in the header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);

//color code the blocks to according to time of day
//past
//present
//future

// var setEvent = function () {
//   $(".saveBtn").click(function () {
//     var text = $("#time-9 textarea").val();
//     console.log(text);

//     var userEvent = {
//       text: text,
//     };

//     localStorage.setItem("userEvent", JSON.stringify(userEvent));
//   });
// };

// var loadEvent = function () {
//   var userEvent = JSON.parse(localStorage.getItem("userEvent"));
//   if (!userEvent) {
//     userEvent = [];
//   }
//   if (userEvent) {
//     $("#time-9 textarea").html(userEvent.text);
//   } else {
//     setEvent();
//   }
// };
//this will let me select all the textareas
var getText = function () {
  $(".time-block").on("click", "textarea", function () {
    var text = $(this).text().trim();
    console.log(text);
  });

  saveText();
};

var saveText = function () {
  var userEvent = JSON.parse(localStorage.getItem("text"));

  if (!userEvent) {
    userEvent = [];
  }
  $(".time-block").on("click", ".saveBtn", function () {
    var text = $(this).siblings("textarea").val();

    console.log(text);

    var currentEvent = {
      text: text,
    };

    userEvent.push(currentEvent);

    localStorage.setItem("text", JSON.stringify(userEvent));

    //     var status = $(this)
    //     .closest(".time-block")
    //     .attr("id");
    //     console.log(status);

    //     var index = $(this).closest(".time-block").index();
    //     console.log(index);
  });
};

//link text area text to the save button to store that in local storage
//so that the events persist
// loadEvent();
// setEvent();
getText();
