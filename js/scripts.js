$(document).ready(function() {
  $("#answers").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var programmerTypeInput = $("input:radio[name=programmerType]:checked").val();
    var interestInput = $("#interest").val();
    var workplaceInput = $("#workplace").val();

    if (nameInput, programmerTypeInput && interestInput && workplaceInput) {
      if(interestInput === "mobile") {
        $("#result").text("Java!");
      } else if (programmerTypeInput === "front" && interestInput === "any" && workplaceInput != "govern") {
        $("#result").text("CSS!");
      } else if (workplaceInput === "small") {
        $("#result").text("Ruby!");
      } else if (programmerTypeInput === "back") {
        $("#result").text("PHP!");
      } else {
        $("#result").text("C#!");
      }
    }
  });
});
