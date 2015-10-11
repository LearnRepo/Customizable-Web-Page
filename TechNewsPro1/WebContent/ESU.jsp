<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Sign up</title>
<link rel="stylesheet" href="http://localhost:8080/TechNewsPro1/stylesht.css" type="text/css" />
</head>
<body>
<h1 id='header' style='color:#fefefe; font-size:50px'>Tech News</h1>
	<form name='first' action='' method='post'>
	<table id='employee_details'>
	<tr>
		<td>
			Employee Id
		</td>
		<td>
			<input type='text' id='employeeid'>
		</td>
	</tr>
	<tr>
		<td>
			Employee Type
		</td>
		<td>
			<select>
				<option>Editor In Chief</option>
				<option>Editor</option>
				<option>Editor</option>
				<option>Reporter</option>
				<option>Photographer</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>
			Name
		</td>
		<td>
			<input type='text' id='empname'>
		</td>
	</tr>
	<tr>
		<td>
			Address
		</td>
		<td>
			<input type='text' id='empadd'>
		</td>
	</tr>
	<tr>
		<td colspan=2 align='center'>
			<input type='submit' value='Add me'>
		</td>
	</tr>
	</table>
	</form>
</body>
</html>