$(document).ready(function() {
  // Projects - Display description when clicked
  $('#sellme').on("click", function(){
    $("#sellme").hide();
    $(".sellme-description").removeClass("hidden");
  });

  $('#timeless').on("click", function(){
    $("#timeless").hide();
    $(".timeless-description").removeClass("hidden");
  });
  $('#snake').on("click", function(){
    $("#snake").hide();
    $(".snake-description").removeClass("hidden");
  });
});
