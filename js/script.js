//set offset of screen after header
jQuery(function() {

$(".menuscroll").bind('click','a', function(event){ 
  //alert();
    event.preventDefault();
    var o =  $( $(this).data("ref") ).offset();   
    var sT = o.top - $(".mainmenu-area").outerHeight(true); // get the fixedbar height
    // compute the correct offset and scroll to it.
   // window.scrollTo(0,sT);
     $('html, body').animate({
          scrollTop: sT
        }, 1000);
});
});
$(document).ready(function(){
  
    $("#viideo").click(function(){
        $("#viideo1,#viideo2,#viideo3,#viideo4").show();
    });
     $("#caard").click(function(){
        $("#caard1,#caard2,#caard3,#caard4").show();
    });
      $("#aapp").click(function(){
        $("#daar1,#raazor1").show();
    });
      $("#iicon").click(function(){
        $("#daar2").show();
    });
       $("#aall").click(function(){
        $("#fb3").hide();
    });
    
});