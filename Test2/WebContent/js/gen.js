var StickyNotes = {
		Notes:"",
		Id:0,
		HolderShellPx:0,
		HolderShellPy:0,
		HolderShellSx:0,
		HolderShellSy:0,
		ContainerShellPx:0,
		ContainerShellPy:0,
		ContainerShellSx:0,
		ContainerShellSy:0,
		
		getId:function()
		{
			return ID;
		},
		WriteNotes:function(k)
		{
			alert("Hi shad");
			Notes=k;
		}
};
var noteStack = [];
var noteCounter=0;
$(function(){
	var main;
	var note;
	$(window).load(function(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		$("#header").css({height:h*0.1, "background-color":"#155450"});
		$("#main").css({height:h*0.75, "background-color":"#E4F1F5"});
		$("#lineInterface").css({height:h*0.05});
		$("#executor").css({height:h*0.05, "background-color":"white"});
		$("#lineInterface").html("<textarea id='tcommand' autofocus align='center'></textarea>");
		$("#tcommand").css({width:'99.5%',height:'100%'});
	});
	
	$("#Submit").click(function(){
		main = document.getElementById('main');
		note = document.createElement('div');
		//note.textContent = document.getElementById('tcommand').value;
		note.innerHTML = document.getElementById('tcommand').value;
		/*note.setAttribute('class','ui-widget-content');
		note.className = "ui-widget-content notes";*/
		note.setAttribute('class','notes');
		note.setAttribute('id',"c"+noteCounter);
		$("#c"+(noteCounter)).addClass("ui-widget-content");
		if(document.getElementById('default-width').value > 100 && document.getElementById('default-height').value > 100)
		{
			main.appendChild(note);
			$("#c"+(noteCounter)).css({width:document.getElementById('default-width').value,height:document.getElementById('default-height').value});
		}
		else
			{
				alert("Note size is significantly small!");
			}

		$(".notes").draggable({containment:"#main"});
		$(".notes").resizable();
		noteCounter++;
	});
	
	$("#clear").click(function(){
		//var canvas = document.getElementById('main');
		$("#main").empty();
	});
	
	$(window).resize(function()
			{
				var w = window.innerWidth;
				var h = window.innerHeight;
				$("#header").css({height:h*0.1, "background-color":"#155450"});
				$("#main").css({height:h*0.75, "background-color":"#E4F1F5"});
				$("#lineInterface").css({height:h*0.05});
			});
	
	//remove div
	//$("*").on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function(){
	$("#main").dblclick(function(event){
		if(event.target.id != "main")
		$("#"+event.target.id).remove();
		//alert(event.target.className[0]);
		
		//alert(event.target.id);
		/*if((event.target.className).indexOf("NOTES"))
			{
				//alert($(this).children().attr("id"));
				$("#"+$(this).children().attr("id")).remove();
			}*/
	});
	
	$("#save").click(function()
	{
		var noteList = [];
		noteList = $(".notes").toArray(function(){return this}); 
		for(var i =0 ;i<noteList.length;i++)
			{
				//alert(noteList[i].textContent+" "+noteList[i].offsetTop + " " + noteList[i].offsetLeft + " "+ noteList[i].id+" "+noteList[i].offsetHeight+" "+noteList[i].offsetWidth);
			}
		//json2 test
		/*var jsonArg1 = new Object();
	    jsonArg1.name = 'calc this';
	    jsonArg1.value = 3.1415;
		var jsonArg2 = new Object();
	    jsonArg2.name = 'calc this again';
	    jsonArg2.value = 2.73;

		var pluginArrayArg = new Array();
	    pluginArrayArg.push(jsonArg1);
	    pluginArrayArg.push(jsonArg2);
	    alert(JSON.stringify(pluginArrayArg));*/
	});
	
	$("#Refresh").click(function(){
		
	});
	
});