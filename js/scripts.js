$(document).ready(function() {
  $("#answers").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var programmerTypeInput = $("input:radio[name=programmerType]:checked").val();
    var interestInput = $("#interest").val();
    var workplaceInput = $("#workplace").val();
    var abcInput = $("input:radio[name=abc]:checked").val();
    var numInput = parseInt($("input#num").val());

    if (nameInput && programmerTypeInput && interestInput && workplaceInput && abcInput && numInput) {
      if(interestInput === "mobile") {
        $("#result").text(nameInput + ", since you are interested in mobile development you should try the Java track!");
      } else if (programmerTypeInput === "front" && interestInput === "any" && workplaceInput != "govern") {
        $("#result").text(nameInput + ", you seem like you want to make things look amazing, you should take the CSS track!");
      } else if (workplaceInput === "small" || numInput < 5) {
        $("#result").text(nameInput + ", the Ruby track looks just right for you!");
      } else if (programmerTypeInput === "back" && abcInput != "c") {
        $("#result").text(nameInput + ", you seem like the sort who would do well in the PHP track!");
      } else {
        $("#result").text("Well then, " + nameInput + ", you should try the C# track!");
      }
    } else if (nameInput, programmerTypeInput && interestInput && workplaceInput && abcInput && numInput) {
      if(interestInput === "mobile") {
        $("#result").text("Java!");
      } else if (programmerTypeInput === "front" && interestInput === "any" && workplaceInput != "govern") {
        $("#result").text("CSS!");
      } else if (workplaceInput === "small" || numInput < 5) {
        $("#result").text("Ruby!");
      } else if (programmerTypeInput === "back" && abcInput != "c") {
        $("#result").text("PHP!");
      } else {
        $("#result").text("C#!");
      }
    } else {
      $("#result").text("");
    }
  });
});
