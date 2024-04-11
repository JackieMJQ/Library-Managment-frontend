import { useState, useEffect } from 'react';
// import './ListBooks.css'

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    
    async function getAuthorsInfo() {
      try {
        const response = await fetch("api/v1/authors", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }
        });
        
        const result = await response.json();
        console.log("Author data:", result);
        setAuthors(result)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    }
    getAuthorsInfo();
  }, []);


  return (
    <div>
      <h2>Authors</h2>
      <table>
        <thead>
          <tr>
            <th>Author ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author.authorID}>
                <td>{author.authorID}</td>
              <td>{author.firstName}</td>
              <td>{author.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuthorList;
