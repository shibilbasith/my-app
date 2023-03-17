import { useEffect, useState } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import BookList from './BookList';

function App() {

    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


      const API_URL = 'https://api.itbook.store/1.0'

    //fetching API
    const searchBooks = async (title) => {
        const response = await fetch(`${API_URL}/${title}`);
        const data = await response.json();

        setBooks(data.books)
    }

            //useeffect is used to run data when components load
            useEffect(() => {
                searchBooks('new')
            }, []);



  return (
    <div className="App">
      <header className="App-header">


      <div className="search m-3 d-flex justify-content-center">
                <input
                    type="text"
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    className="search"
                    style={{ width: "25px" }}
                    src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
                    alt="search"
                    onClick={() => searchBooks('search/' + searchTerm)}
                />
            </div>

      <Row>{
      books.map(book=>(
      <Col className="books" sm={12} md={6} lg={4} xl={3}>
        <BookList  book={book}/>
      </Col>
    ))
    }
    </Row>


        
      </header>
    </div>
  );
}

export default App;
