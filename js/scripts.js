$(document).ready(function() {
  $("#answers").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var programmerTypeInput = $("input:radio[name=programmerType]:checked").val();
    var interestInput = $("#interest").val();
    var workplaceInput = $("#workplace").val();

    if (nameInput, programmerTypeInput && interestInput && workplaceInput) {
      if(interestInput === "mobile") {
        $("#java").show();
      } else if (programmerTypeInput === "front" && interestInput === "any" && workplaceInput != "govern") {
        $("#css").show();
      } else if (workplaceInput === "small") {
        $("#ruby").show();
      } else if (programmerTypeInput === "back") {
        $("#php").show();
      } else {
        $("#c").show();
      }
    }
  });
});
