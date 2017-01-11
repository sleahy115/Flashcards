$(document).ready(function(){

  $("#javascript").click(function(){
    $("#sort").removeClass();
    $("#sort").addClass("js");
    $("#info-title").hide();
    $("#java-title").show();

  });
  $("#operators").click(function(){
    $("#sort").removeClass();
    $("#sort").addClass("operators");
    $("#java-title").hide();
    $("#operators-title").show();
  });

  $("#info-title").click(function(){
    $("#info-def").slideToggle("slow");
    $("#info-title").slideToggle("slow");

  });
  $(".js").click(function(){
    $("h1").text("hello");
    $("#java-def").slideToggle("slow");
    $("#java-title").slideToggle("slow");
  });
  $(".operators").click(function(){
    $("#operators-title").slideToggle("slow");
    $("#operator-def").slideToggle("slow");
  });
  // $(".variables").click(function(){
  //   $("#info-title").slideToggle("slow");
  //   $("#info-def").slideToggle("slow");
  // });
  // $(".varName").click(function(){
  //   $("#info-title").slideToggle("slow");
  //   $("#info-def").slideToggle("slow");
  // });
  // $(".functions").click(function(){
  //   $("#info-title").slideToggle("slow");
  //   $("#info-def").slideToggle("slow");
  // });
  // $(".methods").click(function(){
  //   $("#info-title").slideToggle("slow");
  //   $("#info-def").slideToggle("slow");
  // });


});
