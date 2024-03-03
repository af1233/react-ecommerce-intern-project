// 404Page.js

import React from 'react';
import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <p>Sorry, the page you are looking for might have been removed or does not exist.</p>
    </div>
  );
}

export default ErrorPage;
