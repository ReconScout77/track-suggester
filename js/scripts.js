$(document).ready(function() {
  $("#answers").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var programmerTypeInput = $("input:radio[name=programmerType]:checked").val();
    var interestInput = $("#interest").val();

    if (nameInput, programmerTypeInput && interestInput) {
      if(interestInput === "mobile") {
        $("#java").show();
      } else if (programmerTypeInput === "front" && interestInput === "any") {
        $("#css").show();
      } else if (interestInput === "web") {
        $("#c").show();
      } else if (programmerTypeInput === "back") {
        $("#php").show();
      } else {
        $("#ruby").show();
      }
    }
  });
});
