// Import libraries
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Import global resources
import books from 'assets/books.json';
import MainLayout from 'app/components/MainLayout';
import BookSearch from 'app/components/Booksearch';

export function HomePage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Booksearch homepage" />
        <title>Homepage</title>
      </Helmet>
      <MainLayout>
        <BookSearch books={books} />
      </MainLayout>
    </>
  );
}
