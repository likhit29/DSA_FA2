class LibraryManagementSystem {
  constructor() {
    this.borrowedBooks = [];
    this.memberQueue = [];
  }

  // Add member to queue and update UI
  addMember(memberName) {
    if (memberName) {
      this.memberQueue.push(memberName);
      this.updateQueueUI();
    } else {
      alert("Please enter a member name.");
    }
  }

  // Borrow book by the first member in the queue and update UI
  borrowBook(book) {
    if (book && this.memberQueue.length > 0) {
      const borrower = this.memberQueue.shift();
      this.borrowedBooks.push(`${book} (Borrower: ${borrower})`);
      this.updateBorrowedBooksUI();
      this.updateQueueUI();
    } else if (!book) {
      alert("Please enter a book name.");
    } else {
      alert("No members in the queue to borrow books.");
    }
  }

  // Return the last borrowed book and update UI
  returnBook() {
    if (this.borrowedBooks.length > 0) {
      this.borrowedBooks.pop();
      this.updateBorrowedBooksUI();
    } else {
      alert("No books have been borrowed.");
    }
  }

  // Update member queue in UI
  updateQueueUI() {
    this.updateListUI('memberQueueList', this.memberQueue);
  }

  // Update borrowed books in UI
  updateBorrowedBooksUI() {
    this.updateListUI('borrowedBooksList', this.borrowedBooks);
  }

  // General function to update any list in UI
  updateListUI(listId, items) {
    const listElement = document.getElementById(listId);
    listElement.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  }
}

// Create a single instance of the library system
const library = new LibraryManagementSystem();

// DOM functions to add members and borrow/return books
function addMember() {
  const memberName = document.getElementById('memberInput').value;
  library.addMember(memberName);
  document.getElementById('memberInput').value = '';  // Clear input
}

function borrowBook() {
  const bookName = document.getElementById('bookInput').value;
  library.borrowBook(bookName);
  document.getElementById('bookInput').value = '';  // Clear input
}

function returnBook() {
  library.returnBook();
}
