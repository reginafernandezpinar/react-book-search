import React from 'react';
import { Book } from 'app/model/book';
import { BookItem } from '../BookItem/bookItem';
import { Field } from '../Field/field';
import './styles.scss';

interface BookSearchState {
  filteredBooks: Book[];
  filters: Book;
}

interface BookSearchProps {
  books: Book[];
}

export default class BookSearch extends React.Component<
  BookSearchProps,
  BookSearchState
> {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: props.books,
      filters: {
        author: '',
        country: '',
        language: '',
        pages: 0,
        title: '',
        year: 0,
      },
    };
  }

  handleFieldChange({ field, value }) {
    this.setState(
      {
        filters: {
          ...this.state.filters,
          [field]: value,
        },
      },
      () => this.filterBooksUsingState(),
    );
  }

  filterBooksUsingState() {
    let newFilteredBooks = this.props.books;
    Object.keys(this.state.filters).forEach(field => {
      const fieldFilterValue = this.state.filters[field];
      if (fieldFilterValue) {
        newFilteredBooks = newFilteredBooks.filter(book => {
          return (
            `${book[field]}`
              .toLowerCase()
              .indexOf(fieldFilterValue.toLowerCase().trim()) >= 0
          );
        });
      }
    });
    this.setState({ filteredBooks: newFilteredBooks });
  }

  render() {
    const { filteredBooks } = this.state;
    return (
      <div className="book-search">
        <div className="form-fields">
          <Field
            id="author"
            label="Author:"
            onChange={value =>
              this.handleFieldChange({
                field: 'author',
                value,
              })
            }
          />
          <Field
            id="country"
            label="Country:"
            onChange={value =>
              this.handleFieldChange({
                field: 'country',
                value,
              })
            }
          />
          <Field
            id="language"
            label="Language:"
            onChange={value =>
              this.handleFieldChange({
                field: 'language',
                value,
              })
            }
          />
          <Field
            id="pages"
            label="Pages:"
            onChange={value =>
              this.handleFieldChange({
                field: 'pages',
                value,
              })
            }
          />
          <Field
            id="title"
            label="Title:"
            onChange={value =>
              this.handleFieldChange({
                field: 'title',
                value,
              })
            }
          />
          <Field
            id="year"
            label="Year:"
            onChange={value =>
              this.handleFieldChange({
                field: 'year',
                value,
              })
            }
          />
        </div>
        <div className="book-results">
          {filteredBooks.map((book, i) => (
            <BookItem key={`book-${i}`} book={book} />
          ))}
        </div>
      </div>
    );
  }
}
