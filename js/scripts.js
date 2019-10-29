$(document).ready(function() {
  
  $("form.form-1").submit(function(event){
    event.preventDefault();

    $("#hidden-text").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workCheckedValues = $(this).val();
      $("#hidden-text").append(workCheckedValues + "<br>");
    });

    $("#hidden-text-2").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funCheckedValues = $(this).val();
      $("#hidden-text-2").append(funCheckedValues + "<br>");
    });

    $(".form-1").hide();

  });
});
