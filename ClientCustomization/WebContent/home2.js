$(function(){
	var Height=window.screen.availHeight;
	$("#noteArea").css("height",Height);
	$("#nav").css("height",Height);
	$("#footer").css({top:Height+90,position:'absolute'});
	/*
	 * 
	 */
	var bHtml;
	var nHtml="";
	var CC = 0;
	var data = [];
	var pt = [];
	var pl = [];
	$("#AddSheet").click(function(){
		bHtml = $("#noteArea").html();
		for(var i=1;i<=CC;i++)
			{
				data[i] = $("#k"+i).val();
				pt[i] = $("#c"+i).position().top;
				pl[i] = $("#c"+i).position().left;
			}
		CC++;
		nHtml += "<div class='container' id='c"+CC+"' class='ui-widget-content'> <textarea id='k"+CC+"'>Please Add note</textarea></div>";
		$("#noteArea").html(nHtml);
		//alert($("#k1").innerWidth());
		for(var l=1;l<=CC;l++)
			{
				$("#c"+l).css("width",$("#k"+l).innerWidth()-10);
				$("#c"+l).css("height",$("#k"+l).height+10);
				$("#k"+l).text(data[l]);
				$("#c"+l).parent().css({position: 'relative'});
				$("#c"+l).css({top: pt[l], left: pl[l], position:'absolute'});
			}
		$( ".container" ).draggable();
	    $( ".container" ).resizable();
	    $(".container").bind('resize',function(){
			var w = $(this).width();
			var h = $(this).height();
			$(this).children("textarea").css("width",w-10);
			$(this).children("textarea").css("height",h-10);
		});
	    //alert($("#noteArea").html());
	});
	
});