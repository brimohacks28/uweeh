import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // To get the post ID from URL
import { db } from "./firebase"; // Firebase Firestore
import { doc, getDoc } from "firebase/firestore"; // Firestore functions
import DOMPurify from "dompurify"; // Import DOMPurify
import "../Styles/Post.css";

const PostDetail = () => {
  const { id } = useParams(); // Get the post ID from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postDocRef = doc(db, "posts", id); // Reference to the specific post by ID
      const postDoc = await getDoc(postDocRef);
      if (postDoc.exists()) {
        setPost(postDoc.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPost();
  }, [id]); // Fetch the post whenever the ID changes

  return (
    <div className="post-detail-container">
      {post ? (
        <>
          <h1 className="post-detail-title">{post.title}</h1>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="post-detail-image"
            />
          )}
          <div
            className="post-detail-content"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} // Sanitize and render HTML content
          ></div>
          {post.amazonAffiliateLink && (
            <a
              href={post.amazonAffiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="post-detail-affiliate-link"
            >
              Check it out on Amazon
            </a>
          )}
        </>
      ) : (
        <p className="post-detail-loading">Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;