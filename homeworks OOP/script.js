class weeklyReport {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.borrowedBook = [];
  }
  borrowedBooks(namebook) {
    this.borrowedBook.push(namebook);
  }
}
let userOne = new weeklyReport("Rivka", "Yalo");
let userTwo = new weeklyReport("Yoni", "Tal");
let userThree = new weeklyReport("oded", "mola");

user1.borrowedBooks("Book1");
user1.borrowedBooks("Book2");
user1.borrowedBooks("Book3");
user1.borrowedBooks("Book4");
user2.borrowedBooks("Book3");
user2.borrowedBooks("Book1");
user3.borrowedBooks("Book2");

class BookReport {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.name +
          " " +
          element.lastName +
          " borrows this books: " +
          element.borrowedBook
      );
    });
  }
}
let a = new BookReport("reportOne");

a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);
console.log(a);
a.printReport();
