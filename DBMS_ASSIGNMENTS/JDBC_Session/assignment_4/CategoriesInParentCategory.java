package assignment_4;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import jdbcConnection.JDBCConnection;

/**
 * Class containing method to get number of child categories
 * Created on August 21, 2018
 */
public class CategoriesInParentCategory {
	private Connection connection;
	
	/**
	 * Method to get Category title and count of its child categories
	 * @return list of POJO consisting data
	 */
	public List<CategoriesInParentCategoryPOJO> getChildCategoryCount () throws SQLException {
		connection=JDBCConnection.getDatabaseConnection("StoreFront", "root", "root");

		String queryToGetChildCategoryCount = "SELECT c.Category_Name, Count(c1.Category_Id) AS count_Of_Child FROM category c "
				+ "LEFT JOIN category c1 ON c.category_Id=c1.Parent_category "
				+ "WHERE c.Parent_category=0 GROUP BY c.category_Name "
				+ "ORDER BY c.Category_Name"; 
		
		PreparedStatement preparedStatement = connection.prepareStatement(queryToGetChildCategoryCount);
		ResultSet resultSet = preparedStatement.executeQuery();
	
		while(resultSet.next()){
			CategoriesInParentCategoryPOJO.addToResultList(new CategoriesInParentCategoryPOJO(resultSet.getString("Category_Name"),
					resultSet.getInt("count_Of_Child")));
		}
		connection.close();
		return CategoriesInParentCategoryPOJO.getResultList();
	}
}
