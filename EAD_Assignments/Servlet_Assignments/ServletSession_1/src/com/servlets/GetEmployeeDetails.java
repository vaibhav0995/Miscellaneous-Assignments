package com.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.DAO.Employee;
import com.DAO.EmployeeOperation;
import com.DAO.JDBCConnection;

/**
 * Servlet implementation class GetEmployeeDetails
 */
public class GetEmployeeDetails extends HttpServlet {
	 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String firstName = request.getParameter("firstName");
		String lastName = request.getParameter("lastName");
		String name = (firstName+" "+lastName);
		PrintWriter out = response.getWriter();
		EmployeeOperation employeeOperation = new EmployeeOperation();
		List<Employee> employeeList = employeeOperation.getEmployeesByName(name);
		Connection connection = JDBCConnection.getDatabaseConnection("MetacubeDB", "root", "root");
		out.println("<html>");
		out.println("<title>Employee Details</title>");
		out.println("<body align=\"center\">");
		if(employeeList.size()!=0) {
			out.println("<table align=\"center\" width=50%>");
			out.println("<tr>");
			out.println("<th><h1>Email</h1></th>");
			out.println("<th><h1>Name</h1></th>");
			out.println("<th><h1>Age</h1></th>");
			out.println("</tr>");
			for (Employee employee:employeeList) {
				out.println("<tr><form action=\"ShowUpdateForm\">");
				out.println("<td align=\"center\"><strong>"+employee.getEmployee_Email()+"</strong></td>");
				out.println("<input type=\"hidden\" value="+employee.getEmployee_Email()+" name=\"email\">");
				out.println("<td align=\"center\"><strong>"+employee.getEmployee_Name()+"</strong></td>");
				out.println("<td align=\"center\"><strong>"+employee.getEmployee_age()+"</strong></td>");
				out.println("<td align=\"center\"><input type=\"submit\" value=\"Update Details\"></td>");
				out.println("</form></tr>");
			}			
		} else {
			out.println("<h2 style=\"color:black;text-align:center;\">No Employees with name given !</h2>");
		}
		out.println("</table>");
		out.println("<hr/><h2><a href=\"index.html\">Home</a></h2>");
		out.println("</body>");
		out.println("</html>");
	}
}
