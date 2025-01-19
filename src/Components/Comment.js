// import React, { useState } from "react";
// import "../Styles/CommentSection.css"; 

// const CommentSection = () => {
//   const [comments, setComments] = useState([]);
//   const [commentText, setCommentText] = useState("");

//   const handleCommentChange = (e) => {
//     setCommentText(e.target.value);
//   };

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     if (commentText.trim()) {
//       const newComment = {
//         id: Date.now(), // Unique ID for each comment
//         text: commentText,
//       };
//       setComments([...comments, newComment]);
//       setCommentText(""); // Clear the input field
//     }
//   };

//   return (
//     <div className="comment-section">
//       <h2>Comments ({comments.length})</h2>
//       <form onSubmit={handleCommentSubmit} className="comment-form">
//         <textarea
//           value={commentText}
//           onChange={handleCommentChange}
//           placeholder="Write a comment..."
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <div className="comments-list">
//         {comments.map((comment) => (
//           <div key={comment.id} className="comment">
//             <p>{comment.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CommentSection;



import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Import your Firebase configuration
import { collection, addDoc, getDocs } from "firebase/firestore";
import emailjs from "emailjs-com"; // Import Email.js
import "../Styles/CommentSection.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  // Fetch comments from Firestore
  const fetchComments = async () => {
    try {
      const commentsCollectionRef = collection(db, "comment001");
      const commentsSnapshot = await getDocs(commentsCollectionRef);
      const commentsList = commentsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsList);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      try {
        const newComment = {
          text: commentText,
          createdAt: new Date(), // Optional: add a timestamp
        };

        // Save to Firestore
        await addDoc(collection(db, "comment001"), newComment);
        setComments([...comments, newComment]); // Update local state
        setCommentText(""); // Clear the input field

        // Send email using Email.js
        await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          message: newComment.text,
        }, "YOUR_USER_ID");

      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments ({comments.length})</h2>
      <form onSubmit={handleCommentSubmit} className="comment-form">
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder="Write a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;