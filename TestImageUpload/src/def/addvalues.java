package def;
import java.sql.*;

import javax.servlet.*;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import java.io.*;
import java.util.*;
import java.lang.*;

@WebServlet("/addvalues")
@MultipartConfig(maxFileSize = 16177215) 
public class addvalues extends HttpServlet
{
static Connection conn;
public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
{
try
{
Class.forName("com.mysql.jdbc.Driver");
Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/db","root","pajisingh");
response.setContentType("text/html");
InputStream inputStream = null;
String regno=request.getParameter("reg");
String uname=request.getParameter("name");
Part pic=request.getPart("filepic");
if (pic != null) {
    // prints out some information for debugging
    System.out.println(pic.getName());
    System.out.println(pic.getSize());
    System.out.println(pic.getContentType());
     
    // obtains input stream of the upload file
    inputStream = pic.getInputStream();
}
String query="insert into table3(regno,name,pic) values(?,?,?)";
PreparedStatement s=conn.prepareStatement(query);
s.setString(1,regno);
s.setString(2,uname);
if (inputStream != null) {
    // fetches input stream of the upload file for the blob column
    s.setBinaryStream(3, inputStream,(int)pic.getSize());
}
int temp=s.executeUpdate();
if(temp>0)
	getServletContext().getRequestDispatcher("/Index.html").forward(request, response);
}
catch(Exception e)
{
	System.out.print(e);
}
}}