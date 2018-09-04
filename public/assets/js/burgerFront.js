$(function () {
    $("#eat-burger").on("click", function (event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function () {
          console.log("devoured", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function (event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        function () {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  
  });