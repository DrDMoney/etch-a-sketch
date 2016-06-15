$(document).ready(function(){



  var loc = $("#loc");
  $("#headForm").submit(function(){
    //removes previous generated elements
    $(".grid_lin").remove();
    $(".grid_squ").remove();

    //gets form varables
    var option = $('input:radio[name=Option]:checked').val();
    var s =$('input:text[name=GridSize]').val();
    var blockSize = $('input:text[name=PixelSize]').val();


    for(e = 0; e < s; e++){
      loc.append("<ul class='grid_lin'></ul>");
        for(i = 0; i < s; i++){
          if(option === "1"){
              $(".grid_lin").last().append("<li class='grid_squ_1'></li>");
            } else if(option === "2"){
              $(".grid_lin").last().append("<li class='grid_squ_2'></li>");
            } else if (option === "3") {
              $(".grid_lin").last().append("<li class='grid_squ_3'></li>");
            }

          }
        }

    $("li").width(blockSize);
    $("li").height(blockSize);
    $(".grid_lin").height(blockSize);

    $(".grid_squ_1").hover(function(){
          $(this).removeClass('grid_squ_1').addClass('grid_squ_lit');
      });
    $(".grid_squ_2").hover(function(){
            $(this).css("background-color", rgb(rand(0,256),rand(0,256),rand(0,256)));
      });

    $(".grid_squ_3").hover(function(){
        var op = $(this).css("opacity");
        $(this).css("opacity",( op > 0.1 ) ? ( op - 0.1 ) : op);
      });

    //prevents reset
    event.preventDefault();
    //resets form
    this.reset();
  });
});

//Random and rgb Functions
function rgb(r, g, b){
  r = Math.floor(r); // floor set to whole value
  g = Math.floor(g);
  b = Math.floor(b);
  return ["rgb(",r,",",g,",",b,")"].join(""); //converts to striing
}
function rand(min, max) {
    return Math.random() * (max - min) + min;
}
