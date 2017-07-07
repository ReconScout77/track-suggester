$(document).ready(function() {
  $("#answers").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var programmerTypeInput = $("input:radio[name=programmerType]:checked").val();
    var interestInput = $("#interest").val();
    var workplaceInput = $("#workplace").val();
    var abcInput = $("input:radio[name=abc]:checked").val();
    var numInput = parseInt($("input#num").val());

    if (nameInput, programmerTypeInput && interestInput && workplaceInput) {
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
    }
  });
});
