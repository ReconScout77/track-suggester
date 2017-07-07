$(document).ready(function() {
  $("#answers").submit(function(event) {
    event.preventDefault();

    var nameInput = $("input#name").val();
    var programmerTypeInput = $("input:radio[name=programmerType]:checked").val();

    if (nameInput, programmerTypeInput) {
      $("#result").show();
    }
  })
})
