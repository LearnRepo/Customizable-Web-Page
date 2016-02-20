<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="css/gen.css" type="text/css">
<link rel="stylesheet" href="qjs/jquery-ui.css" type="text/css">
<script type="text/javascript" src="qjs/Jquery.js"></script>
<script type="text/javascript" src="qjs/jquery-ui.js"></script>
<script type="text/javascript" src="qjs/jstorage.js"></script>
</head>

<body onload="loader()">
<div id="header" name="header">
	
</div>
<div id="main" name="main">
</div>
<div id="executor">
<button class="iexecutor" id="Submit">Submit</button>
<button class="iexecutor" id="clear">Clean</button>
<button class="iexecutor" id="copy">Copy</button>
<button class="iexecutor" id="delete">Delete</button>
<button class="iexecutor" id="save">Save</button>
<textarea class="iexecutor" rows='1' cols=7 maxlength='7' id='tcolor'></textarea>Font color
<textarea class="iexecutor" rows='1' cols=7 maxlength='7' id='bcolor'></textarea>Back color
<textarea class="iexecutor" rows='1' cols=2 maxlength='3' id='fsize'></textarea>Font size
<textarea class="iexecutor" rows='1' cols=2 maxlength='3' id='default-width'>300</textarea>Note Width
<textarea class="iexecutor" rows='1' cols=2 maxlength='3' id='default-height'>400</textarea>Font Height
</div>
<div id="lineInterface" name="lineInterface">
</div>
<script type="text/javascript" src="js/gen.js"></script>
</body>
</html>