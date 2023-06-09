import React, { useState } from 'react';

function BookList() {
//   const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publication, setPublication] = useState('');

  // Handle input changes
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  }

  const handlePublicationChange = (e) => {
    setPublication(e.target.value);
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object with the input values
    const newBook = {
      title: title,
      author: author,
      publication: publication,
    };

  // Send a POST request to add a new book
  fetch('/book/', {
    method: 'POST',
    headers: {
        'Content-Type': 'pkglication/json'  
    },
    body: JSON.stringify(newBook)
    })
        .then(response => response.json()) 
        .then(data => {
            // Update the book list with the added book
            console.log('New book added:', data);

            // Reset the input values
            setTitle('');
            setAuthor('');
            setPublication('');
        })
        .catch(error => console.error(error));
  };


//   useEffect(() => {
//     // Fetch all books
//     fetch('/book/')
//       .then(response => response.json())
//       .then(data => setBooks(data))
//       .catch(error => console.error(error));
//   }, []);

//   const addBook = () => {
//     const newBook = {
//       title: 'New Book',
//       author: 'John Doe'
//     };

//     // Add a new book
//     fetch('/book/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newBook)
//     })
//       .then(response => response.json())
//       .then(data => {
//         // Update the book list with the added book
//         setBooks([...books, data]);
//       })
//       .catch(error => console.error(error));
//   };

//   // Fetch a book by ID
// const fetchBookById = (bookId) => {
//     fetch(`/book/${bookId}`)
//       .then(response => response.json())
//       .then(data => {
//         // Process the book data
//         console.log(data);
//       })
//       .catch(error => console.error(error));
//   };
  
  // Usage:
//   fetchBookById(1); // Replace 1 with the actual book ID

//   return (
//     <div>
//       <h1>Book List</h1>
//       <button onClick={addBook}>Add Book</button>
//       {books.map(book => (
//         <div key={book.bookId}>
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//         </div>
//       ))}
//     </div>
//   );

return (
    <div>
        <h2>Add a Book</h2>
            <label>Title:</label>  
            <input type="text" value={title} onChange={handleTitleChange} />
            <label>Author:</label>
            <input type="text" value={author} onChange={handleAuthorChange} />
            <label>Publication:</label>
            <input type="text" value={publication} onChange={handlePublicationChange} />
            <button onClick={handleSubmit}>Add Book</button>
    </div>
);
}



export default BookList;
