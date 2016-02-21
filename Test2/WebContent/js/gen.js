var noteStack = [];
var noteCounter=0;

function LoadPreviousNotes()
{
	main = document.getElementById('main');
	var note;
	//note.innerHTML=;
	var str = $.jStorage.get("s1000");
	var obj = JSON.parse(str);
	var T = [];
	var L = [];
	var H = [];
	var W = [];
	var I = [];
	var C = [];
	for(var i = 0;i<obj.length;i++)
		{
			T[i]=obj[i].offsetTop;
			L[i]=obj[i].offsetLeft;
			H[i]=obj[i].offsetHeight;
			W[i]=obj[i].offsetWidth;
			I[i]=obj[i].id;
			C[i]=obj[i].textContent;
		}
	
	for(var i = 0;i<obj.length;i++)
	{
		//alert(I[i]);
		note = document.createElement('div');
		note.innerHTML=C[i];
		note.setAttribute('class','notes');
		note.setAttribute('id',I[i]);
		$("#"+I[i]).addClass("ui-widget-content");
		note.style.position = "relative";
		note.style.top = (T[i]-main.offsetTop) + "px";
		if(i==0)
			note.style.left = (L[i]-main.offsetLeft) + "px";
		else
			note.style.left = (L[i]-(main.offsetLeft-$("#"+I[i-1]).width)) + "px";
		/*if(i==0)
			{
				note.style.top = T[i] + "px";
				note.style.left = L[i] + "px";
			}
		else
			{
			 if(T[i]>T[i-1])
				note.style.top = (T[i]-T[i-1]) + "px";
			 if(T[i]<T[i-1])
					note.style.top =(T[i-1]-T[i]) + "px";
			 if(L[i]>L[i-1])
				note.style.left = (L[i]-L[i-1]) + "px";
			 if(L[i]<L[i-1])
					note.style.left = (L[i-1]-L[i]) + "px";
			}*/
		main.appendChild(note);
		$("#"+I[i]).css({width:W[i]+"px",height:H[i]+"px"});
		$(".notes").draggable({containment:"#main"});
		$(".notes").resizable();
	}
	
	noteCounter = $.jStorage.get("Gcounter");;
}



$(function(){
	var main;
	var note;
	$(window).load(function(){
		var w = window.innerWidth;
		var h = window.innerHeight;
		$("#header").css({height:h*0.1});
		$("#main").css({height:h*0.74, "background-color":"rgb(255,255,255,0.3)"});
		$("#lineInterface").css({height:h*0.05});
		$("#executor").css({height:h*0.05, "background-color":"white"});
		$("#lineInterface").html("<textarea id='tcommand' autofocus align='center'></textarea>");
		$("#tcommand").css({width:'99.5%',height:'100%'});
		if($.jStorage.get("s1000")!="[]")
		{
			LoadPreviousNotes();
		}
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
		main.appendChild(note);
		$("#c"+(noteCounter)).css({width:200,height:150});
		/*if(document.getElementById('default-width').value > 100 && document.getElementById('default-height').value > 100)
		{
			
			$("#c"+(noteCounter)).css({width:document.getElementById('default-width').value,height:document.getElementById('default-height').value});
		}
		else
			{
				alert("Note size is significantly small!");
			}*/
		$(".notes").draggable({containment:"#main"});
		$(".notes").resizable();
		noteCounter++;
	});
	
	$("#add").click(function(){
		document.getElementById("edit").style.display = 'block';
	});
	
	$("#doneedit").click(function(){
		document.getElementById("edit").style.display = 'none';
	});
	
	$(window).resize(function()
			{
				var w = window.innerWidth;
				var h = window.innerHeight;
				$("#header").css({height:h*0.1});
				$("#main").css({height:h*0.74, "background-color":"rgb(255,255,255,0.3)"});
				$("#lineInterface").css({height:h*0.05});
			});
	
	//remove div
	//$("*").on('blur change click dblclick error focus focusin focusout hover keydown keypress keyup load mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup resize scroll select submit', function(){
	$("#main").dblclick(function(event){
		//code for deleting target element in div
		
		/*if(event.target.id != "main")
		$("#"+event.target.id).remove();*/
		
		//alert(event.target.className[0]);
		
		// check what is the id of target
		//alert(event.target.id);
		
		
	});
	
	
	$("#save").click(function()
	{
		var noteList = [];
		var jsonArg1;
		var pluginArrayArg = new Array();
		var jsonstring;
		
		noteList = $(".notes").toArray(function(){return this}); 
		for(var i =0 ;i<noteList.length;i++)
			{
				//alert(noteList[i].textContent+" "+noteList[i].offsetTop + " " + noteList[i].offsetLeft + " "+ noteList[i].id+" "+noteList[i].offsetHeight+" "+noteList[i].offsetWidth);
				jsonArg1 = new Object();
				jsonArg1.textContent = noteList[i].textContent;
				jsonArg1.id = noteList[i].id;
				jsonArg1.offsetTop = noteList[i].offsetTop;
				jsonArg1.offsetLeft = noteList[i].offsetLeft;
				jsonArg1.offsetHeight = noteList[i].offsetHeight;
				jsonArg1.offsetWidth = noteList[i].offsetWidth;
				pluginArrayArg.push(jsonArg1);
			}
		jsonstring=JSON.stringify(pluginArrayArg);
		$.jStorage.set("s1000",jsonstring);
		$.jStorage.set("Gcounter",noteCounter);
	});
	
	$("#copy").click(function(){
		var str = $.jStorage.get("s1000");
		alert(str);
		//alert("Sjag")
	});
	$("#delete").click(function(){
		var r = confirm("Content will be gone!");
		if (r == true) {
			$.jStorage.set("s1000","[]");
			$("#main").empty();
		} else {
		   
		}
		
		//alert("Sjag")
	});
});