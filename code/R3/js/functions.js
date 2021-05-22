$(document).ready(function () {
  $("#imagen").click(function () {
    $("#modalDialog").modal("show");
  });
  var url = "https://www.youtube.com/embed/4Z7EzcADIJM" ;

  $(".cerrar").click(function () {
    $("#video").attr("src", url);
  });
  $("#modalDialog").on('show.bs.modal', function () {  
       $("#video").attr("src", url+"?autoplay=1");
  });
});
