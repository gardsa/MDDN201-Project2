$(document).ready(function(){
  $("#show").click(function(){
    $("#signup").removeClass("hide");
    $("#details").addClass("hide");
  });
  $("#hide").click(function(){
    $("#signup").addClass("hide");
    $("#details").removeClass("hide");
  });
});