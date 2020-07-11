package main;

import java.sql.SQLException;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

import assignment_1.OrderDetails;
import assignment_1.OrdersDetailsPOJO;
import assignment_2.BatchInsertion;
import assignment_3.ProductDeletion;
import assignment_4.CategoriesInParentCategory;
import assignment_4.CategoriesInParentCategoryPOJO;

/**
 * Class containing main method
 * Created on August 21, 2018
 */
public class JDBCSessionMain {
	public static void main (String args[]) {
		Scanner scanner = new Scanner(System.in);
		try {
			int choice=0;
			while (choice<=5) {
				System.out.println("Enter Your Choice:\n1. Get Order Information Of User\n2. Insert Batch Data in Image Table\n"
						+ "3. Delete Products Which are not ordered from one year\n4. Display Top Category Title with child counts\n5. EXIT");
				choice = scanner.nextInt();
				switch (choice) {
				case 1:
					OrderDetails orderDetails = new OrderDetails();
					System.out.println("Enter user Id:");
					List<OrdersDetailsPOJO> resultList = orderDetails.getOrderDetailsOfUser(scanner.nextInt());
					System.out.println("Number Of Records :"+resultList.size()+"\n");
					for (OrdersDetailsPOJO value: resultList) {
						System.out.println("ORDER ID: "+value.getOrderId());
						System.out.println("ORDER DATE: "+value.getOrderDate());
						System.out.println("ORDER AMOUNT: "+value.getOrderAmount());
						System.out.println("-------------------------------------------------------\n");
					}
					OrdersDetailsPOJO.emptyResultList();
					break;
				
				case 2:
					BatchInsertion batchInsertion = new BatchInsertion();
					System.out.println(batchInsertion.insertBatchIntoImageTable()+" Rows added as batch !\n");
					System.out.println("-------------------------------------------------------\n");
					break;
					
				case 3:
					ProductDeletion productDeletion = new ProductDeletion();
					System.out.println(productDeletion.deleteProductsNotPurchased()+" Products Status Changed to Inactive !\n");
					System.out.println("-------------------------------------------------------\n");
					break;
					
				case 4:
					CategoriesInParentCategory categoriesInParentCategory = new CategoriesInParentCategory();
					List<CategoriesInParentCategoryPOJO> list = categoriesInParentCategory.getChildCategoryCount();
					for(CategoriesInParentCategoryPOJO val: list){
						System.out.println(val.getCategoryName()+"  "+val.getCategoryCount());
					}
					CategoriesInParentCategoryPOJO.emptyResultList();
					System.out.println("-------------------------------------------------------\n");					
					break;
					
				case 5:
					System.out.println("Program Terminated !");
					System.exit(0);
					
				default:
					System.out.println("Invalid choice entered !\n");
				}
			}
		} catch (InputMismatchException e) {
			System.out.println("Entered Incorrect username format ! Try to give an integer input.");
		} catch (SQLException se) {
			System.out.println("SQL Exception occurred !");
		}
		scanner.close();
	}
}
