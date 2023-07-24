let library = [];

const tableContainer = document.querySelector('.table')

function Book(title, author, status) {
        this.title = title
        this.author = author
        this.status = status
    }

function addBookToLibrary(title, author, status) {
    const newBook = new Book(title, author, status)
    library.push(newBook)
}

function displayBooks() {
    const table = document.getElementById("bookTable")
    table.innerHTML = ""; // Clear the table before adding new data

    library.forEach(book => {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        const authorCell = row.insertCell();
        const statusCell = row.insertCell();

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        statusCell.textContent = book.status;
    });
}

// function to add default books to the library

function addDefaultBooks() {
    addBookToLibrary("Ice Station Zebra", "Alistar Maclean", "Read");
    addBookToLibrary("Think and Grow Rich", "Napolean Hill", "Read");
}

// Function to initialize the page
/* function init() {
    addDefaultBooks(); // Add default books to the library
    displayBooks(); // Display the default books on the page
} */

// Function to handle the "Add Book" button click
function addBook() {
    const title = document.getElementById("titleInput").value
    const author = document.getElementById("authorInput").value
    const status = document.getElementById("statusInput").value

    addBookToLibrary(title, author, status)
    displayBooks(); // Update the displayed table
}

// Call the init function when the page loads
/* window.onload = function() {
    addDefaultBooks(); // Add default books to the library
    displayBooks(); // Display the default books on the page
}; */

/* init(); */
addDefaultBooks(); // Add default books to the library
displayBooks(); // Display the default books on the page

/* window.onload = init; */
