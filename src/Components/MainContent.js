// import React, { useState, useEffect } from "react";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { Link } from "react-router-dom";
// import DOMPurify from "dompurify";
// import "../Styles/MainContent.css";
// import Banner from "./Banner";

// const MainContent = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");  // Added state for search query
//   const postsPerPage = 12;

//   const fetchPosts = async () => {
//     try {
//       const postsCollectionRef = collection(db, "posts");
//       const postsSnapshot = await getDocs(postsCollectionRef);
//       const postsList = postsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPosts(postsList);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setError("Failed to load posts. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   // Filter posts based on the search query
//   const filteredPosts = posts.filter((post) => 
//     post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     post.content.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const nextPage = () => {
//     if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNewsletterSubscription = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert(`Thank you for subscribing with ${email}!`);
//       setEmail("");
//     } else {
//       alert("Please enter a valid email.");
//     }
//   };

//   // Function to truncate content
//   const truncateContent = (content, limit = 300) => {
//     if (content.length > limit) {
//       return content.slice(0, limit) + " ...";
//     }
//     return content;
//   };

//   return (
    
//     <main className="main-content">

//       <h1 className="title">From A to Z: Life’s Lessons and Beyond</h1>
//       <Banner />
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search articles..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {loading && <p>Loading posts...</p>}
//       {error && <p className="error-message">{error}</p>}

//       <div className="posts-list">
//         {currentPosts.map((post) => (
//           <article key={post.id} className="post-item">
//             <h2 className="post-title">{post.title}</h2>
//             <div
//               className="post-content"
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(truncateContent(post.content)),
//               }}
//             ></div>
//             {post.image && (
//               <img
//                 className="post-image"
//                 src={post.image}
//                 alt={`Image related to ${post.title}`}
//                 loading="lazy"
//               />
//             )}
//             {post.amazonAffiliateLink && (
//               <a
//                 href={post.amazonAffiliateLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="affiliate-link"
//               >
//                 Check it out on Amazon
//               </a>
//             )}
//             <Link to={`/post/${post.id}`} className="read-more-btn">
//               Read More
//             </Link>
//           </article>
//         ))}
//       </div>

//       <nav className="pagination">
//         <button
//           className="prev-btn"
//           onClick={prevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span className="page-number">
//           Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}
//         </span>
//         <button
//           className="next-btn"
//           onClick={nextPage}
//           disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
//         >
//           Next
//         </button>
//       </nav>

//       <section className="newsletter-section">
//         <h2>Join Our Community for the Latest Posts</h2>
//         <form className="newsletter-form" onSubmit={handleNewsletterSubscription}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="newsletter-input"
//             required
//           />
//           <button type="submit" className="subscribe-btn">
//             Subscribe
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default MainContent;





// best code as of yet starts below

// import React, { useState, useEffect } from "react";
// import { db } from "./firebase";
// import { collection, getDocs } from "firebase/firestore";
// import { Link } from "react-router-dom";
// import DOMPurify from "dompurify";
// import "../Styles/MainContent.css";
// import Banner from "./Banner";

// const MainContent = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState(""); // Added state for search query
//   const postsPerPage = 12;

//   const fetchPosts = async () => {
//     try {
//       const postsCollectionRef = collection(db, "posts");
//       const postsSnapshot = await getDocs(postsCollectionRef);
//       const postsList = postsSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPosts(postsList);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//       setError("Failed to load posts. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;

//   // Filter posts based on the search query
//   const filteredPosts = posts.filter((post) => 
//     post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
//     post.content.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const nextPage = () => {
//     if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleNewsletterSubscription = (e) => {
//     e.preventDefault();
//     if (email) {
//       alert(`Thank you for subscribing with ${email}!`);
//       setEmail("");
//     } else {
//       alert("Please enter a valid email.");
//     }
//   };

//   // Function to truncate content
//   const truncateContent = (content, limit = 300) => {
//     if (content.length > limit) {
//       return content.slice(0, limit) + " ...";
//     }
//     return content;
//   };

//   return (
//     <main className="main-content">
//       <h1 className="title">From A to Z: Life’s Lessons and Beyond</h1>
//       <Banner />
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search articles..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-input"
//         />
//       </div>

//       {loading && <p>Loading posts...</p>}
//       {error && <p className="error-message">{error}</p>}

//       <div className="posts-list">
//         {currentPosts.map((post) => (
//           <article key={post.id} className="post-item">
//             <h2 className="post-title">{post.title}</h2>
//             <div
//               className="post-content"
//               style={{ cursor: post.amazonAffiliateLink ? "pointer" : "default" }}
//               onClick={() => post.amazonAffiliateLink && window.open(post.amazonAffiliateLink, "_blank")}
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(truncateContent(post.content)),
//               }}
//             ></div>
//             {post.image && (
//               <img
//                 className="post-image"
//                 src={post.image}
//                 alt={`Image related to ${post.title}`}
//                 loading="lazy"
//               />
//             )}
//             <Link to={`/post/${post.id}`} className="read-more-btn">
//               Read More
//             </Link>
//           </article>
//         ))}
//       </div>

//       <nav className="pagination">
//         <button
//           className="prev-btn"
//           onClick={prevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span className="page-number">
//           Page {currentPage} of {Math.ceil(filteredPosts.length / postsPerPage)}
//         </span>
//         <button
//           className="next-btn"
//           onClick={nextPage}
//           disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
//         >
//           Next
//         </button>
//       </nav>

//       <section className="newsletter-section">
//         <h2>Join Our Community for the Latest Posts</h2>
//         <form className="newsletter-form" onSubmit={handleNewsletterSubscription}>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="newsletter-input"
//             required
//           />
//           <button type="submit" className="subscribe-btn">
//             Subscribe
//           </button>
//         </form>
//       </section>
//     </main>
//   );
// };

// export default MainContent;



import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import "../Styles/MainContent.css";
import Banner from "./Banner";
import CommentSection from "./Comment";

const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Added state for search query
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const postsPerPage = 12;

  const fetchPosts = async () => {
    try {
      const postsCollectionRef = collection(db, "posts");
      const postsSnapshot = await getDocs(postsCollectionRef);
      const postsList = postsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Filter posts based on search query and selected category
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

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

  const handleNewsletterSubscription = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); // Update selected category
    setCurrentPage(1); // Reset to the first page
  };

  // Function to truncate content
  const truncateContent = (content, limit = 300) => {
    if (content.length > limit) {
      return content.slice(0, limit) + " ...";
    }
    return content;
  };

  return (
    <main className="main-content">
      <h1 className="title">From A to Z: Find all the essentials for your life, with just a click!</h1>
      <Banner onCategorySelect={handleCategorySelect} />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="posts-list">
        {currentPosts.map((post) => (
          <article key={post.id} className="post-item">
            <h2 className="post-title">{post.title}</h2>
            <div
              className="post-content"
              style={{ cursor: post.amazonAffiliateLink ? "pointer" : "default" }}
              onClick={() => post.amazonAffiliateLink && window.open(post.amazonAffiliateLink, "_blank")}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(truncateContent(post.content)),
              }}
            ></div>
            {post.image && (
              <img
                className="post-image"
                src={post.image}
                alt={`Image related to ${post.title}`}
                loading="lazy"
              />
            )}
            <Link to={`/post/${post.id}`} className="read-more-btn">
              Read More
            </Link>
          </article>
        ))}
      </div>

      <nav className="pagination">
        <button
          className="prev-btn"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
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

      <section className="newsletter-section">
        <h2>Join Our Community for the Latest Posts</h2>
        <form className="newsletter-form" onSubmit={handleNewsletterSubscription}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </section>
      {/* <CommentSection /> */}
    </main>
  );
};

export default MainContent;