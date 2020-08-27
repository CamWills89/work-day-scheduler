tasks = {};

//Get current day and display it in the header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);

// var loadTasks = function () {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!tasks) {
//       tasks = {
//         event: []
//       };
//     }

//     // loop over object properties
//     $.each(tasks, function (list, arr) {
//       // then loop over sub-array
//       arr.forEach(function (task) {
//         createTask(task.text, task.date, list);
//       });
//     });
//   };

//   var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };

//color code the blocks to according to time of day
//past
//present
//future

var getText = $("#time-9").on("click", "textarea", function () {
  var text = $(this).text().trim();
  console.log(text);
});

var setEvent = function () {

  $(".saveBtn").click(function () {
    var text = $("#time-9 textarea").val();
    console.log(text);

    var userEvent = {
      text: text,
    };

    localStorage.setItem("userEvent", JSON.stringify(userEvent));
  });
};

var loadEvent = function () {
  var userEvent = JSON.parse(localStorage.getItem("userEvent"));
  if (!userEvent) {
    userEvent = [];
  }
  if(userEvent){
  $("#time-9 textarea").html(userEvent.text);
} else {
    setEvent();
}
}
//this will let me select all the textareas
// $(".container").on("click", function() {
//     var text = $(this).text().trim();
//     console.log(text);

//     var status = $(this)
//     .closest(".time-block")
//     console.log(status);

//     // get the task's position in the list of other li elements
//     var index = $(this)
//     .closest("#time-14")
//     .index();
//     console.log(index);

// })
//link text area text to the save button to store that in local storage
//so that the events persist
loadEvent();
setEvent();
