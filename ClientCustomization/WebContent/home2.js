	var bHtml;
	var CC = 0;
	var data = [];
	var pt = [];
	var pl = [];
	var ow = [];
	var oh = [];
	var classList = [];
	var textList = [];
	var nHtml=[];
	//$("#noteArea").html("<div class='container' height=0 width=0></div>");

$(function(){
	var Height=window.screen.availHeight;
	$("#noteArea").css("height",Height);
	$("#nav").css("height",Height);
	$("#footer").css({top:Height+90,position:'absolute'});
	/*
	 * 
	 */
	
	$("#AddSheet").click(function(){
		bHtml = $("#noteArea").html();
		var temp="";
		for(var i=1;i<=CC;i++)
			{
				data[i] = $("#k"+i).val();
				pt[i] = $("#c"+i).position().top;
				pl[i] = $("#c"+i).position().left;
				ow[i] = $("#c"+i).width();
				oh[i] = $("#c"+i).height();
			}
		CC++;
		nHtml[CC] = "<div class='container' id='c"+CC+"' class='ui-widget-content'> <textarea id='k"+CC+"'>Please Add note</textarea></div>";
		classList[CC] = "c"+CC;
		textList[CC] = "k"+CC;
		for(var i = 1;i<=CC;i++)
			temp += nHtml[i];
		$("#noteArea").html(nHtml);
		//alert($("#k1").innerWidth());
		for(var l=1;l<=CC;l++)
			{
				$("#c"+l).css("width",$("#k"+l).innerWidth()-2);
				$("#c"+l).css("height",$("#k"+l).height+2);
				$("#k"+l).text(data[l]);
				$("#c"+l).parent().css({position: 'relative'});
				$("#c"+l).css({top: pt[l], left: pl[l], position:'absolute'});
				$("#c"+l).css({width:ow[l], height:oh[l]});
				$("#k"+l).css({width:ow[l]-2, height:oh[l]-2});
			}
		$( ".container" ).draggable({containment:"#noteArea"});
	    $( ".container" ).resizable();
	    $(".container").bind('resize',function(){
			var w = $(this).width();
			var h = $(this).height();
			$(this).children("textarea").css("width",w-2);
			$(this).children("textarea").css("height",h-2);
		});
	    //alert($("#noteArea").html());
	    $("textarea").bind('keypress', function(e)
				{
					if(e.keyCode==13)
						{
							var fh = parseFloat($(this).css("font-size"));
							$(this).css("height",$(this).height()+fh);
						}
				});
	});
	
});
$(function(){
	$("#noteArea").click(function(event){
		if(event.target.nodeName != 'TEXTAREA' && event.target.className == 'navNote')
			{
				var x1 = event.pageX;
				var y1 = event.pageY;
				var temp = "";
				bHtml = $("#noteArea").html();
				for(var i=1;i<=CC;i++)
					{
						data[i] = $("#k"+i).val();
						pt[i] = $("#c"+i).position().top;
						pl[i] = $("#c"+i).position().left;
						ow[i] = $("#c"+i).width();
						oh[i] = $("#c"+i).height();
					}
				CC++;
				nHtml[CC] = "<div class='container' id='c"+CC+"' class='ui-widget-content'> <textarea id='k"+CC+"'>Please Add note</textarea></div>";
				classList[CC] = "c"+CC;
				textList[CC] = "k"+CC;
				for(var i = 1;i<=CC;i++)
				temp += nHtml[i];
				$("#noteArea").html(temp);
				$("#c"+CC).parent().css({position: 'relative'});
				$("#c"+CC).css({top: y1-91, left: x1, position:'absolute'});
				$("#k"+CC).css({width:200, height:90});
				$("#c"+CC).css({width:210, height:100});
				for(var l=1;l<=CC-1;l++)
					{
						$("#c"+l).css("width",$("#k"+l).innerWidth()-2);
						$("#c"+l).css("height",$("#k"+l).height+2);
						$("#k"+l).text(data[l]);
						$("#c"+l).parent().css({position: 'relative'});
						$("#c"+l).css({top: pt[l], left: pl[l], position:'absolute'});
						$("#c"+l).css({width:ow[l], height:oh[l]});
						$("#k"+l).css({width:ow[l]-10, height:oh[l]-10});
					}
				
				$( ".container" ).draggable({containment:"#noteArea"});
			    $( ".container" ).resizable();
			    $(".container").bind('resize',function(){
					var w = $(this).width();
					var h = $(this).height();
					$(this).children("textarea").css("width",w-10);
					$(this).children("textarea").css("height",h-10);
				});
			    //alert($("#noteArea").html());
			    $("textarea").bind('keypress', function(e)
						{
							if(e.keyCode==13)
								{
									var fh = parseFloat($(this).css("font-size"));
									$(this).css("height",$(this).height()+fh);
								}
						});
			}
	});
});

$(function(){
	$("#noteArea").dblclick(function(event){
		var temp2;
		var temp="";
		for(var i=1;i<=CC;i++)
		{
			data[i] = $("#k"+i).val();
			pt[i] = $("#c"+i).position().top;
			pl[i] = $("#c"+i).position().left;
			ow[i] = $("#c"+i).width();
			oh[i] = $("#c"+i).height();
		}
		for(var i=1;i<=CC;i++)
		if(event.target.id == classList[i])
		{
			temp2 = i;
		}
		//alert(temp);
		for(var i = temp2;i<CC;i++)
		{
			data[i] = data[i+1];
			pt[i] = pt[i+1];
			pl[i] = pl[i+1];
			ow[i] = ow[i+1];
			oh[i] = oh[i+1];
			nHtml[i]=nHtml[i+1];
		}
		CC--;
		//alert(data);
		for(var i = 1;i<=CC;i++)
		{
			nHtml[i]="<div class='container' id='c"+i+"' class='ui-widget-content'> <textarea id='k"+i+"'>Please Add note</textarea></div>";
		}
		for(var i = 1;i<=CC;i++)
			temp += nHtml[i];
		$("#noteArea").html(temp);
		for(var l=1;l<=CC;l++)
		{
			$("#c"+l).css("width",$("#k"+l).innerWidth()-2);
			$("#c"+l).css("height",$("#k"+l).height+2);
			$("#k"+l).text(data[l]);
			$("#c"+l).parent().css({position: 'relative'});
			$("#c"+l).css({top: pt[l], left: pl[l], position:'absolute'});
			$("#c"+l).css({width:ow[l], height:oh[l]});
			$("#k"+l).css({width:ow[l]-10, height:oh[l]-10});
		}
		$( ".container" ).draggable({containment:"#noteArea"});
	    $( ".container" ).resizable();
	    $(".container").bind('resize',function(){
			var w = $(this).width();
			var h = $(this).height();
			$(this).children("textarea").css("width",w-10);
			$(this).children("textarea").css("height",h-10);
		});
	});
	
});
