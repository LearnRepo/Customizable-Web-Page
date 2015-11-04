$(function() {
    $( "#d1" ).draggable();
    $( "#d1" ).resizable();
    $( "#d2" ).draggable();
    $( "#d2" ).resizable();
  });
$(function()
		{
			$("#head1").hide();
			$("#head2").hide();
		});
 $(function(){
	 		/*
	  		$("#d1").mouseover(function(){
	  			$("#head").show();
	  		});*/
	 		var i=0;
	  		$("#d1").mouseenter(function(){
	  			$("#head1").show();
	  		});
	  		$("#d1").mouseleave(function(){
	  			$("#head1").hide();
	  		});
	  		$("#d2").mouseenter(function(){
	  			$("#head2").show();
	  		});
	  		$("#d2").mouseleave(function(){
	  			$("#head2").hide();
	  		});
	  		$("div").click(function(){
	  			$(this).css('z-index',i++);
	  		});
		  });