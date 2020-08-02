import React from 'react';
import { Book } from 'app/model/book';

import './styles.scss';

interface BookProps {
  book: Book;
}

export const BookItem = (props: BookProps) => {
  const { book } = props;
  return (
    <div className="book">
      {Object.keys(book).map(key => (
        <div>
          <label htmlFor={key}>{key}:</label>
          <span id={key}>{book[key]}</span>
        </div>
      ))}
    </div>
  );
};
