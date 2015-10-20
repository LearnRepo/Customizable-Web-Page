$(function() {
    $( "#d1" ).draggable();
    $( "#d1" ).resizable();
  });
$(function()
		{
			$("#head").hide();
		});
 $(function(){
	 		/*
	  		$("#d1").mouseover(function(){
	  			$("#head").show();
	  		});*/
	  		$("#d1").mouseenter(function(){
	  			$("#head").show();
	  		});
	  		$("#d1").mouseleave(function(){
	  			$("#head").hide();
	  		});
		  });