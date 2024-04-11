import { useState, useEffect } from 'react';
import './ListBooks.css'

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    
    async function getBooksInfo() {
      try {
        const response = await fetch("api/v1/books", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }
        });
        
        const result = await response.json();
        console.log("Books data:", result);
        setBooks(result)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }
    getBooksInfo();
  }, []);


  return (
    <div>
      <h2>Books</h2>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Copyright</th>
            <th>Authors</th>
            <th>Edition Number</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.title}</td>
              <td>{book.copyright}</td>
              <td>{book.authorList.map(author => author.firstName + ' ' + author.lastName).join(', ')}</td>
              <td>{book.editionNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;
