// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book To List
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');
  // Insert cols
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>
  `;

  list.appendChild(row);
}

//show arlert
UI.prototype.showAlert = function (massage, className){
 const div = document.createElement('div');
 //add class name
 div.className = `alert ${className}`;
 //add text
 div.appendChild(document.createTextNode(massage));
 // Get Parent
 const container = document.querySelector('.container');
 //Get form
 const form = document.querySelector('#book-form');
 //Insert alert
 container.insertBefore(div, form);
//time out after three sec
setTimeout(function(){
  document.querySelector('.alert') .remove();
},3000)

}

// Clear Fields
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();
  //vallidate
  if(title === '' || author === ''|| isbn === ''){
    ui.showAlert('Please fill all the table','error')

  }else {
      // Add book to list
  ui.addBookToList(book);

  //show success
  ui.showAlert(`book added`, `success`)

  // Clear fields
  ui.clearFields();

  }
  

  e.preventDefault();
});