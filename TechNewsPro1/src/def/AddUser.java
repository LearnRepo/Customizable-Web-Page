package def;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddUser
 */
@WebServlet("/AddUser")
public class AddUser extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddUser() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String employeeId = request.getParameter("employeeid");
		String empType = request.getParameter("emptype");
		String empName = request.getParameter("empname");
		String empPlace = request.getParameter("empadd");
		//System.out.print(employeeId+empType+empName+empPlace);
		ConnectMysql connectMysql = new ConnectMysql(employeeId,empType,empName,empPlace);
		if(connectMysql.getNoRow()>0)
		getServletContext().getRequestDispatcher("/Home.jsp").forward(request, response);
		else
		{
			response.sendRedirect("/TechNewsPro1/Home.jsp");
		}
	}

}
