import React, { useState } from 'react';

interface Book {
  id: number;
  title: string;
}

const TbrList: React.FC = () => {
  const [tbrBooks, setTbrBooks] = useState<Book[]>([]);
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState('');

  const handleAddTbrBook = () => {
    const newBookItem: Book = {
      id: tbrBooks.length + 1,
      title: newBook,
    };
    setTbrBooks([...tbrBooks, newBookItem]);
    setNewBook('');
  };

  const handleAddReadBook = () => {
    const newBookItem: Book = {
      id: readBooks.length + 1,
      title: newBook,
    };
    setReadBooks([...readBooks, newBookItem]);
    setNewBook('');
  };

  const handleToggleRead = (id: number) => {
    const tbrBook = tbrBooks.find((book) => book.id === id);
    if (tbrBook) {
      setTbrBooks(tbrBooks.filter((book) => book.id !== id));
      setReadBooks([...readBooks, tbrBook]);
    }
  };

  const handleDeleteTbrBooks = (ids: number[]) => {
    setTbrBooks(tbrBooks.filter((book) => !ids.includes(book.id)));
  };

  const handleDeleteReadBooks = (ids: number[]) => {
    setReadBooks(readBooks.filter((book) => !ids.includes(book.id)));
  };

  return (
    <div>
      <h1>TBR List</h1>
      <section>
        <h2>To-Be-Read</h2>
        <ul>
          {tbrBooks.map((book) => (
            <li key={book.id}>
              <input
                type="checkbox"
                onChange={() => handleToggleRead(book.id)}
              />
              <span>{book.title}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleAddTbrBook}>Add Item</button>
        <button onClick={() => handleDeleteTbrBooks(tbrBooks.filter((book) => book.title === '').map((book) => book.id))}>
          Delete Selected
        </button>
      </section>
      <section>
        <h2>Already Read</h2>
        <ul>
          {readBooks.map((book) => (
            <li key={book.id}>
              <span>{book.title}</span>
            </li>
          ))}
        </ul>
        <button onClick={handleAddReadBook}>Add Item</button>
        <button onClick={() => handleDeleteReadBooks(readBooks.filter((book) => book.title === '').map((book) => book.id))}>
          Delete Selected
        </button>
      </section>
      <input
        type="text"
        value={newBook}
        onChange={(event) => setNewBook(event.target.value)}
        placeholder="Add new book"
      />
    </div>
  );
};

export default TbrList;