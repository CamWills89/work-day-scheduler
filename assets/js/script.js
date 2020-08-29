//Get current day and display it in the header
var today = moment().format("dddd, MMMM, Do");
var currentDay = $("#currentDay").text(today);


//color code the blocks to according to time of day
//past
//present
//future
function hourTracker() {
  //get current number of hours.
  var currentHour = moment().hour();
  console.log(currentHour)

<<<<<<< HEAD
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

var loadEvent = function () {
  var userEvent = JSON.parse(localStorage.getItem("userEvent"));
  if (!userEvent) {
    userEvent = [];
  }
  console.log(userEvent)

  if (userEvent) {
    text.textContent = userEvent.text;
  }

};
//this will let me select all the textareas
var getText = function () {
  $(".time-block").on("click", "textarea", function () {
    var text = $(this).text().trim();
    console.log(text);
  });
  saveText();
=======
  // loop over time blocks
  $(".time-block").each(function () {
    
    var hour = parseInt($(this).attr("id"))
      console.log(this)
      // console.log(hour)

      //check if we've moved past this timeblock
      if (hour < currentHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      //if we are in this timeblock
      else if (hour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      //if we have not yet reached this timeblock
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  })
}
hourTracker();

//load page and display any saved tasks
var loadEvent = function () {
  var userEvent = JSON.parse(localStorage.getItem("userEvent")) || {};
// console.log(userEvent.text);
// debugger;

  for (let i = 0; i < userEvent.length; i++) {
    $(".time-block" + userEvent[i].id + "textarea").text(userEvent[i].text);
  }
>>>>>>> 505bbfc65eadd6da66f57d0d907dc23d572dd2e8
};

//save any tasks to local storge when save button is clicked
var saveText = function () {
  $(".time-block").on("click", ".saveBtn", function () {
    var userEvent = JSON.parse(localStorage.getItem("userEvent")) || {};

    var text = $(this).siblings("textarea").val();
    var id = $(this).closest(".time-block").attr("id");
  
    var userEvent = {
      text: text,
      id: id
    };
    
<<<<<<< HEAD
    console.log(text);

    var userEvent = {
      text: text,
    };

    localStorage.setItem("userEvent", JSON.stringify(userEvent));

    // var status = $(this)
    // .closest(".time-block")
    // .attr("id");
    // console.log(status);

    // var index = $(this).closest(".time-block").index();
    // console.log(index);
=======
    userEvent[id] = text;
    // userEvent.push(currentEvent)

    localStorage.setItem("userEvent", JSON.stringify(userEvent));
>>>>>>> 505bbfc65eadd6da66f57d0d907dc23d572dd2e8
  });
};

loadEvent();
saveText();































// var hour = parseInt($(this).attr("id").split("time")[1]);