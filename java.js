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

    const head = table.insertRow()
    const t = head.insertCell()
    const a = head.insertCell()
    const s = head.insertCell()
    const empty = head.insertCell()

    t.textContent = 'Title'
    a.textContent = 'Author'
    s.textContent = 'Status'

    library.forEach(book => {
        const row = table.insertRow();
        const titleCell = row.insertCell();
        const authorCell = row.insertCell();
        const statusCell = row.insertCell();
        const deleteCell = row.insertCell();

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        /* statusCell.textContent = book.status; */

        // I changed the status text into a button. 
        const button = document.createElement('button')
        button.textContent = book.status;
        statusCell.appendChild(button)
        // I added a class and made the button show the opp of each content
        button.classList.add('statusButton')
        button.addEventListener('click', function () {
            if (button.textContent == "Read") {
                book.status = "Not Read"
                button.textContent = "Not Read"
            } else {
                book.status = "Read"
                button.textContent = "Read"
                
            }
            btnCheck(button)
        })
        btnCheck(button)

        // It manages to delete the row but it's still in the database when
        // you add another book.
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteCell.appendChild(deleteBtn)
        deleteBtn.classList.add('deleteButton')

        deleteBtn.addEventListener('click', function (){
            // Get the index of the book in the library array
            const bookIndex = library.indexOf(book)
            // Remove the book from the library array using splice
            if (bookIndex !== -1){
                library.splice(bookIndex, 1)
            }
            // Remove the row from the table
            table.deleteRow(row)
            // Display the updated books after deleting
            displayBooks()
        }); 
    });
}

// Function that can be called to change color of the button.
function btnCheck(x) {
    if (x.textContent === 'Read') {
        x.style.backgroundColor = '#00B31E';
    } else if (x.textContent === 'Not Read'){
        x.style.backgroundColor = '#E60026';
    }
}

// function to add default books to the library
function addDefaultBooks() {
    addBookToLibrary("Ice Station Zebra", "Alistar Maclean", "Read");
    addBookToLibrary("Think and Grow Rich", "Napolean Hill", "Read");
}

// Function to handle the "Add Book" button click
function addBook() {
    const title = document.getElementById("titleInput").value
    const author = document.getElementById("authorInput").value
    const status = document.getElementById("statusInput").value

    // Ensuring the user doesn't spam the add book button.
    if ((title != '') && (author != '')) {
        addBookToLibrary(title, author, status)
        displayBooks(); // Update the displayed table
    }

    // Resetting input after "Add Book" button is pressed
    document.getElementById("statusInput").value = "Read";

    const x = document.getElementById("titleInput")
    const y = document.getElementById("authorInput")

    // Erasing if both title and author was entered.
    if ((x.value != "") && (y.value != "")) {
        document.getElementById("titleInput").value = "";
        document.getElementById("authorInput").value = "";
    } else if ((x.value != "") && (y.value == "")) { //If author is empty and title is entered alert!
        alert("Enter an author!")
    } else if ((x.value == "") && (y.value != "")) { //If title is empty and author is entered alert!
        alert("Enter a title!")
    } else if (x.value == "" && y.value == ""){
        alert("Enter a title and author!")
    }

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
