package def;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class ConnectMysql {
	private int noRow;
	public ConnectMysql(String query)
	{
		try
		{
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/technewsdb","root","pajisingh");
		PreparedStatement st=conn.prepareStatement(query);
		ResultSet rs = st.executeQuery(query);
		while (rs.next())
	      {
			this.noRow = rs.getInt("rowCount");
	      }
		/*while (rs.next())
	      {
	        int id = rs.getInt("id");
	        String firstName = rs.getString("first_name");
	        String lastName = rs.getString("last_name");
	        Date dateCreated = rs.getDate("date_created");
	        boolean isAdmin = rs.getBoolean("is_admin");
	        int numPoints = rs.getInt("num_points");
	         
	        // print the results
	        System.out.format("%s, %s, %s, %s, %s, %s\n", id, firstName, lastName, dateCreated, isAdmin, numPoints);
	      }*/
	      st.close();
	    }
		catch (Exception e)
	    {
	      System.err.println("Got an exception! ");
	      System.err.println(e.getMessage());
	    }
	}
	protected int getNoRow()
	{
		return this.noRow;
	}
	public ConnectMysql(String s1, String s2, String s3, String s4)
	{
		try 
		{
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn=DriverManager.getConnection("jdbc:mysql://localhost:3306/technewsdb","root","pajisingh");
			String query="insert into employee_details(employeeid,employeetype,employeename,employeeaddress) values(?,?,?,?)";
			PreparedStatement s=conn.prepareStatement(query);
			s.setString(1,s1);
			s.setString(2,s2);
			s.setString(3,s3);
			s.setString(4,s4);
			this.noRow=s.executeUpdate();
		}
		catch (Exception e) {
			// TODO Auto-generated catch block
			System.err.println("Got an exception! ");
		      System.err.println(e.getMessage());
		}
	}
		
}
