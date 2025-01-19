import React from 'react';
import '../Styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      {/* Spinner */}
      <div className="spinner"></div>

      {/* Blog-Themed Icons */}
      <div className="icon-wrapper">
        <div className="icon">
          <i className="fas fa-pencil-alt"></i>
        </div>
        <div className="icon">
          <i className="fas fa-book"></i>
        </div>
        <div className="icon">
          <i className="fas fa-feather-alt"></i>
        </div>
      </div>

      {/* Loading Text */}
      <p> Bringing your stories to life ....</p>
    </div>
  );
};

export default Loading;
