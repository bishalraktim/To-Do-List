$(document).ready(function(){

  $("ul").on("click", "li", function(e){
    e.preventDefault();
    $(this).toggleClass("completed");
  });

  $("ul").on("click", "span", function(event){
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
  });

  $("input[type='text']").keypress(function(e){
    e.preventDefault();
    if($(this).val() === ""){
      $(this).prepend();
    }
    else{
      if(e.which === 13){
        var inputText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class='trash'><i class='far fa-trash-alt'></i></span> " + inputText + "</li>");
      }
    }
  });

  $(".shift").click(function(e){
    e.preventDefault();
    $("input[type='text']").fadeToggle();
  });

});
