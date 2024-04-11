import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar';
import BookList from './ListBooks';
import AuthorList from './ListAuthors';
import AddBooks from './addBook';
import AddAuthor from './addAuthor';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/viewallbooks" element={<BookList/>}/>
              <Route path="/viewallauthors" element={<AuthorList/>}/>
              <Route path='/addbooks' element={<AddBooks/>}/>
              <Route path='/addauthors' element={<AddAuthor/>}/>
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;

