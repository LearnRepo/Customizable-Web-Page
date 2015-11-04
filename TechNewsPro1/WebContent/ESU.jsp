<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Sign up</title>
<link rel="stylesheet" href="http://192.168.0.103:8080/TechNewsPro1/stylesht.css" type="text/css" />
<script type="text/javascript" src="http://192.168.0.103:8080/TechNewsPro1/jquery.validate.js">
</script>
<script type="text/javascript" src="http://192.168.0.103:8080/TechNewsPro1/jquery.min.js">
</script>
<script>
	$(document).ready(
			function(){
				$("h1").click(
						function(){
				$("#employee_details").hide();
						})
		}
	);
	function AvailableId()
	{
		var empid = $("#employeeid").val();//document.getElementById("employeeid").value;
		$.post('userexist',
				{Empid : empid},
				function(response)
				{
					if(response == "0")
						$("#employeeid").css({'border-color':'red'});
					if(response == "1")
						$("#employeeid").css({'border-color':'green'});
				}
				);
		
	}
</script>

</head>
<body>
<h1 id='header' style='color:#fefefe; font-size:50px'>Tech News</h1>
	<form name='first' action='AddUser' method='post'>
	<table id='employee_details'>
	<tr>
		<td align='right'>
			Employee Id
		</td>
		<td>
			<input type='text' id='employeeid' name='employeeid' onchange="AvailableId()">
		</td>
	</tr>
	<tr>
		<td align='right'>
			Employee Type
		</td>
		<td>
			<select id="emptype" name='emptype'>
				<option value="Editor In Chief">Editor In Chief</option>
				<option value="Editor">Editor</option>
				<option value="Sub Editor">Sub Editor</option>
				<option value="Reporter" selected>Reporter</option>
				<option value="Photographer" >Photographer</option>
			</select>
		</td>
	</tr>
	<tr>
		<td align='right'>
			Name
		</td>
		<td>
			<input type='text' id='empname' name='empname'>
		</td>
	</tr>
	<tr>
		<td align='right'>
			Address
		</td>
		<td>
			<input type='text' id='empadd' name='empadd'>
		</td>
	</tr>
	<tr>
		<td colspan=2 align='center'>
			<input type='submit' id="signup" value='Sign Up'>
		</td>
	</tr>
	</table>
	</form>
</body>
</html>