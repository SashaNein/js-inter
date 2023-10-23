const dialog = document.querySelector("dialog");
const newBook = document.getElementById("new-book");
const closeButton = document.getElementById("close-button");
const submitForm = document.getElementById("submit-form")
const myLibrary = [];
const bookTitle = document.getElementById("title")
const bookAuthor = document.getElementById("author")
const bookPages = document.getElementById("pages")
const libraryCards = document.getElementById('Library');
newBook.addEventListener("click", () => {
  dialog.showModal();
});



closeButton.addEventListener("click", () => {
	 dialog.close()
});

submitForm.addEventListener("click", () => {
  let newBook = new createBook();
  console.log(newBook);
  addBookToLibrary(newBook);
 createBookCard(newBook);
  event.preventDefault();
});

function createBookCard(book) {
	const bookCard = document.createElement('div');
	const title = document.createElement('p');
	const author = document.createElement('p');
	const pages = document.createElement('p');
	const buttonGroup = document.createElement('div');
	const readBtn = document.createElement('button');
	const removeBtn = document.createElement('button');

	title.textContent = book.title;
	author.textContent = book.author;
	pages.textContent = book.pages;

	
	libraryCards.appendChild(bookCard);
	bookCard.appendChild(title);
  	bookCard.appendChild(author);
 	bookCard.appendChild(pages);
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	bookTitle.value = '';
	bookAuthor.value = '';
	bookPages.value = '';
  	console.log(myLibrary);
  	dialog.close();
  	
}


function createBook(title, author, pages, read) {
	this.title = bookTitle.value
	this.author =  bookAuthor.value
	this.pages = bookPages.value
	this.info = function() {
		console.log(`${this.title} written by ${this.author}, ${this.pages} pages, ${read}`)
	}

}

