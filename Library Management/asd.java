package libraray;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;
import java.util.Scanner;

class asd {
    // Stack to store borrowed books (LIFO)
    Stack<String> borrowedBooks = new Stack<>();
    
    // Queue to manage members waiting to borrow books (FIFO)
    Queue<String> memberQueue = new LinkedList<>();
    
    // Borrow a book
    public void borrowBook(String book) {
        if (!memberQueue.isEmpty()) {
            String member = memberQueue.poll(); // Get the next member in the queue
            borrowedBooks.push(book); // Add book to stack
            System.out.println(member + " borrowed the book: " + book);
        } else {
            System.out.println("No members in the queue to borrow books.");
        }
    }
    
    // Return the last borrowed book
    public void returnBook() {
        if (!borrowedBooks.isEmpty()) {
            String book = borrowedBooks.pop(); // Remove the last borrowed book from the stack
            System.out.println("Returned the book: " + book);
        } else {
            System.out.println("No books have been borrowed.");
        }
    }
    
    // Add a member to the borrowing queue
    public void addMember(String memberName) {
        memberQueue.add(memberName); // Add member to the queue
        System.out.println(memberName + " added to the borrowing queue.");
    }

    // View borrowed books history
    public void viewBorrowedBooks() {
        if (borrowedBooks.isEmpty()) {
            System.out.println("No books have been borrowed.");
        } else {
            System.out.println("Borrowed books (last borrowed first): " + borrowedBooks);
        }
    }
    
    // View members in queue
    public void viewQueue() {
        if (memberQueue.isEmpty()) {
            System.out.println("No members in the queue.");
        } else {
            System.out.println("Members waiting to borrow: " + memberQueue);
        }
    }

    public static void main(String[] args) {
        asd library = new asd();
        Scanner scanner = new Scanner(System.in);
        int choice;

        do {
            System.out.println("\nLibrary Management System");
            System.out.println("1. Add member to the queue");
            System.out.println("2. Borrow a book");
            System.out.println("3. Return the last borrowed book");
            System.out.println("4. View borrowed books");
            System.out.println("5. View members in the queue");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter member name: ");
                    String memberName = scanner.nextLine();
                    library.addMember(memberName);
                    break;
                case 2:
                    System.out.print("Enter book name: ");
                    String bookName = scanner.nextLine();
                    library.borrowBook(bookName);
                    break;
                case 3:
                    library.returnBook();
                    break;
                case 4:
                    library.viewBorrowedBooks();
                    break;
                case 5:
                    library.viewQueue();
                    break;
                case 6:
                    System.out.println("Exiting the system...");
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        } while (choice != 6);

        scanner.close();
    }
}
