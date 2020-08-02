import React from 'react';
import { Helmet } from 'react-helmet-async';
import './styles.scss';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <div className="wrapper">
        <div className="title">
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </div>
        <p>Page not found.</p>
      </div>
    </>
  );
}
