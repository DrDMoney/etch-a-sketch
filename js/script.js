$(document).ready(function(){
  var loc = $("#GenDivs");

  $("#headForm").submit(function(event){
    $(".divQuary").remove();
    var h =$('input:text[name=Height]').val();
    var w =$('input:text[name=Width]').val();

    var blockSize = loc.width()/w;
    $(".divQuary").width(blockSize);
    $(".divQuary").height(blockSize);

    for(i = 0; i < (h*w); i++){
      loc.append("<li class='divQuary'></li>");
    }


    event.preventDefault()
    this.reset();
    ;
  });


});
