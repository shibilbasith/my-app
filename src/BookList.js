
import React from "react";


function BookList({book}) {
  return (
    <div className="book p-2" >
    <div>
        <img src={book.image} alt={book.title} />
    </div>
    <div>
        <h2>{book.title}</h2>
        <h5>{book.subtitle}</h5>
    </div>
    <div className="d-flex justify-content-between">
      <button className="btn btn-primary">cart</button>
      <button className="btn btn-danger"><i class="bi bi-heart-fill"></i></button>
    </div>
</div>
  );
}

export default BookList;


