import React, { useState } from 'react';
import samplePosts from '../samplePosts';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import "../Styles/Blog.css";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(samplePosts);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter posts based on the search query
    const filtered = samplePosts.filter((post) =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to the first page after search
  };

  // Determine which posts to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <main className="landing-page">
      <header className="landing-header">
        <h1 className="landing-title">Breaking Free from Life’s Double Binds.</h1>
        <p className="landing-subtitle">Fresh Perspectives on Everyday Moments</p>
        <Link to="/" className="explore-btn">Explore Blog</Link>
      </header>

      <section>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            display: 'block',
            margin: '20px auto',
            padding: '10px',
            width: '80%',
            maxWidth: '500px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            textAlign: 'center',
          }}
        />
      </section>

      <section className="posts-section">
        <h2>Echoes and Edges</h2>
        <div className="posts-list">
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <article key={post.id} className="post-item">
                <h3 className="post-title">{post.title}</h3>
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.excerpt),
                  }}
                ></div>

                {post.image && post.amazonAffiliateLink && (
                  <a href={post.amazonAffiliateLink} target="_blank" rel="noopener noreferrer">
                    <img
                      className="post-image"
                      src={post.image}
                      alt={`Image related to ${post.title}`}
                      loading="lazy"
                    />
                  </a>
                )}
              </article>
            ))
          ) : (
            <p>No posts found for your search query.</p>
          )}
        </div>

        <nav className="pagination">
          <button className="prev-btn" onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>

          <span className="page-number">
            Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}
          </span>

          <button
            className="next-btn"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
          >
            Next
          </button>
        </nav>
      </section>

      <footer className="landing-footer">
        <p> When Life’s a Catch-22, Write Your Own Rules.</p>
      </footer>
    </main>
  );
};

export default Blog;