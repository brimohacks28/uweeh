// import React, { useState } from "react";
// import { db, storage } from "../firebase"; // Firebase Firestore and Storage
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage methods
// import { addDoc, updateDoc, doc, collection } from "firebase/firestore"; // Firestore functions

// const PostForm = ({ post, updatePost }) => {
//   const [title, setTitle] = useState(post ? post.title : "");
//   const [content, setContent] = useState(
//     post
//       ? post.content
//       : `
//       <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: auto; padding: 20px;">
//     <h2 style="text-align:center; color: #D17A00;">Your Blog Post Title Here</h2>

//     <img src="https://via.placeholder.com/1200x400" alt="Hero Image" style="width:100%; height:auto; margin:20px 0; border-radius: 8px; animation: fadeIn 1s;">

//     <p style="text-align:justify; font-size: 18px;">This is a sample template. Replace this text with your content. You can discuss various topics, share insights, or provide personal experiences.</p>

//     <img src="https://via.placeholder.com/600x300" alt="Placeholder" style="width:100%; height:auto; margin:20px 0; border-radius: 8px; animation: slideIn 1s;">

//     <p style="text-align:justify; font-size: 18px;">Feel free to add more images, text, or any other content here. Edit this template to suit your needs and make it engaging for your readers.</p>

//     <blockquote style="border-left: 4px solid #D17A00; padding-left: 20px; color: #555; font-style: italic;">
//         <p>"Inspiration exists, but it has to find you working." - Pablo Picasso</p>
//     </blockquote>

//     <img src="https://via.placeholder.com/600x300" alt="Inspiration" style="width:100%; height:auto; margin:20px 0; border-radius: 8px; animation: fadeIn 1s;">

//     <p style="text-align:justify; font-size: 18px;">You can add lists, links, or other elements to make your post more informative and interactive.</p>

//     <ul style="margin: 20px 0; padding-left: 20px;">
//         <li>Engaging content</li>
//         <li>Rich media to enhance the reading experience</li>
//         <li>Clear structure for easy navigation</li>
//     </ul>

//     <h3 style="color: #D17A00;">Related Images</h3>
//     <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
//         <img src="https://via.placeholder.com/300x200" alt="Related 1" style="width:30%; margin: 10px; border-radius: 8px; animation: fadeIn 1s;">
//         <img src="https://via.placeholder.com/300x200" alt="Related 2" style="width:30%; margin: 10px; border-radius: 8px; animation: fadeIn 1s;">
//         <img src="https://via.placeholder.com/300x200" alt="Related 3" style="width:30%; margin: 10px; border-radius: 8px; animation: fadeIn 1s;">
//     </div>

//     <p style="text-align:justify; font-size: 18px;">Thank you for reading! Don't forget to share your thoughts in the comments below.</p>
// </div>

// <style>
//     @keyframes fadeIn {
//         0% { opacity: 0; }
//         100% { opacity: 1; }
//     }

//     @keyframes slideIn {
//         0% { transform: translateY(20px); opacity: 0; }
//         100% { transform: translateY(0); opacity: 1; }
//     }

//     /* Media queries for responsiveness */
//     @media (max-width: 1024px) {
//         div {
//             padding: 15px;
//         }
//         h2 {
//             font-size: 28px; 
//         }
//         p, li {
//             font-size: 16px; 
//         }
//     }

//     @media (max-width: 768px) {
//         div {
//             padding: 10px;
//         }
//         h2 {
//             font-size: 24px; 
//         }
//         p, li {
//             font-size: 15px; 
//         }
//         img {
//             width: 100%; 
//             height: auto;
//         }
//     }

//     @media (max-width: 480px) {
//         h2 {
//             font-size: 20px; 
//         }
//         p, li {
//             font-size: 14px; 
//         }
//         img {
//             width: 100%; 
//             height: auto;
//         }
//     }

//     /* Flexbox adjustments for related images */
//     @media (max-width: 768px) {
//         .related-images {
//             flex-direction: column; /* Stack images on small screens */
//             align-items: center; /* Center images */
//         }
//         .related-images img {
//             width: 80%; /* Adjust width for smaller screens */
//             margin: 10px 0; /* Margin adjustment */
//         }
//     }
// </style>
//     `
//   );
//   const [imageUrl, setImageUrl] = useState(post ? post.image : "");

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const storageRef = ref(storage, `images/${file.name}`);
//       uploadBytes(storageRef, file).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then((url) => {
//           setImageUrl(url);
//         });
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       title,
//       content,
//       // image: imageUrl,
//     };

//     try {
//       if (post) {
//         const postRef = doc(db, "posts", post.id);
//         await updateDoc(postRef, newPost);
//         updatePost();
//       } else {
//         const postsCollectionRef = collection(db, "posts");
//         await addDoc(postsCollectionRef, newPost);
//         alert("Post has been published!");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error("Error handling post submission:", error.message);
//     }
//   };

//   const styles = {
//     form: {
//       maxWidth: "700px",
//       margin: "30px auto",
//       padding: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#fff",
//       fontFamily: "'Roboto', sans-serif",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       fontSize: "16px",
//       backgroundColor: "#f9f9f9",
//     },
//     textarea: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       fontSize: "16px",
//       minHeight: "150px",
//       backgroundColor: "#f9f9f9",
//     },
//     imagePreview: {
//       display: "block",
//       width: "100%",
//       maxHeight: "200px",
//       marginBottom: "15px",
//       objectFit: "cover",
//       borderRadius: "6px",
//     },
//     button: {
//       width: "100%",
//       padding: "15px",
//       backgroundColor: "#007BFF",
//       color: "#fff",
//       border: "none",
//       borderRadius: "6px",
//       fontSize: "18px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     label: {
//       fontSize: "16px",
//       fontWeight: "500",
//       marginBottom: "8px",
//       display: "block",
//       color: "#333",
//     },
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <label style={styles.label}>Post Title</label>
//       <input
//         type="text"
//         placeholder="Enter Post Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={styles.input}
//       />

//       <label style={styles.label}>Post Content (HTML)</label>
//       <textarea
//         placeholder="Enter HTML Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         style={styles.textarea}
//       />

//       <label style={styles.label}>Upload Image</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         style={styles.input}
//       />
//       {imageUrl && (
//         <img src={imageUrl} alt="Post Preview" style={styles.imagePreview} />
//       )}

//       <button
//         type="submit"
//         style={styles.button}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//         }
//         onMouseOut={(e) =>
//           (e.target.style.backgroundColor = styles.button.backgroundColor)
//         }
//       >
//         {post ? "Update" : "Create"} Post
//       </button>
//     </form>
//   );
// };

// export default PostForm;










// import React, { useState } from "react";
// import { db, storage } from "../firebase"; // Firebase Firestore and Storage
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage methods
// import { addDoc, updateDoc, doc, collection } from "firebase/firestore"; // Firestore functions

// const PostForm = ({ post, updatePost }) => {
//   const [title, setTitle] = useState(post ? post.title : "");
//   const [content, setContent] = useState(
//     post
//       ? post.content
//       : `
//       <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: auto; padding: 20px;">
//         <h2 style="text-align:center; color: #D17A00;">Your Blog Post Title Here</h2>
//         <img src="https://via.placeholder.com/1200x400" alt="Hero Image" style="width:100%; height:auto; margin:20px 0; border-radius: 8px; animation: fadeIn 1s;">
//         <p style="text-align:justify; font-size: 18px;">This is a sample template. Replace this text with your content. You can discuss various topics, share insights, or provide personal experiences.</p>
//         <img src="https://via.placeholder.com/600x300" alt="Placeholder" style="width:100%; height:auto; margin:20px 0; border-radius: 8px; animation: slideIn 1s;">
//         <p style="text-align:justify; font-size: 18px;">Feel free to add more images, text, or any other content here. Edit this template to suit your needs and make it engaging for your readers.</p>
//         <blockquote style="border-left: 4px solid #D17A00; padding-left: 20px; color: #555; font-style: italic;">
//           <p>"Inspiration exists, but it has to find you working." - Pablo Picasso</p>
//         </blockquote>
//         <img src="https://via.placeholder.com/600x300" alt="Inspiration" style="width:100%; height:auto; margin:20px 0; border-radius: 8px; animation: fadeIn 1s;">
//         <p style="text-align:justify; font-size: 18px;">You can add lists, links, or other elements to make your post more informative and interactive.</p>
//         <ul style="margin: 20px 0; padding-left: 20px;">
//           <li>Engaging content</li>
//           <li>Rich media to enhance the reading experience</li>
//           <li>Clear structure for easy navigation</li>
//         </ul>
//         <h3 style="color: #D17A00;">Related Images</h3>
//         <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
//           <img src="https://via.placeholder.com/300x200" alt="Related 1" style="width:30%; margin: 10px; border-radius: 8px; animation: fadeIn 1s;">
//           <img src="https://via.placeholder.com/300x200" alt="Related 2" style="width:30%; margin: 10px; border-radius: 8px; animation: fadeIn 1s;">
//           <img src="https://via.placeholder.com/300x200" alt="Related 3" style="width:30%; margin: 10px; border-radius: 8px; animation: fadeIn 1s;">
//         </div>
//       <style>
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//         @keyframes slideIn {
//           0% { transform: translateY(20px); opacity: 0; }
//           100% { transform: translateY(0); opacity: 1; }
//         }
//         /* Media queries for responsiveness */
//         @media (max-width: 1024px) {
//           div {
//             padding: 15px;
//           }
//           h2 {
//             font-size: 28px; 
//           }
//           p, li {
//             font-size: 16px; 
//           }
//         }
//         @media (max-width: 768px) {
//           div {
//             padding: 10px;
//           }
//           h2 {
//             font-size: 24px; 
//           }
//           p, li {
//             font-size: 15px; 
//           }
//           img {
//             width: 100%; 
//             height: auto;
//           }
//         }
//         @media (max-width: 480px) {
//           h2 {
//             font-size: 20px; 
//           }
//           p, li {
//             font-size: 14px; 
//           }
//           img {
//             width: 100%; 
//             height: auto;
//           }
//         }
//         /* Flexbox adjustments for related images */
//         @media (max-width: 768px) {
//           .related-images {
//             flex-direction: column; /* Stack images on small screens */
//             align-items: center; /* Center images */
//           }
//           .related-images img {
//             width: 80%; /* Adjust width for smaller screens */
//             margin: 10px 0; /* Margin adjustment */
//           }
//         }
//       </style>
//     `
//   );
//   const [imageUrl, setImageUrl] = useState(post ? post.image : "");
//   const [amazonLink, setAmazonLink] = useState(post ? post.amazonAffiliateLink : "");
//   const [category, setCategory] = useState(post ? post.category : ""); // New state for category

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const storageRef = ref(storage, `images/${file.name}`);
//       uploadBytes(storageRef, file).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then((url) => {
//           setImageUrl(url);
//         });
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       title,
//       content,
//       image: imageUrl,
//       amazonAffiliateLink: amazonLink,
//       category, // Include category in the post
//     };

//     try {
//       if (post) {
//         const postRef = doc(db, "posts", post.id);
//         await updateDoc(postRef, newPost);
//         updatePost();
//       } else {
//         const postsCollectionRef = collection(db, "posts");
//         await addDoc(postsCollectionRef, newPost);
//         alert("Post has been published!");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error("Error handling post submission:", error.message);
//     }
//   };

//   const styles = {
//     form: {
//       maxWidth: "700px",
//       margin: "30px auto",
//       padding: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#fff",
//       fontFamily: "'Roboto', sans-serif",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       fontSize: "16px",
//       backgroundColor: "#f9f9f9",
//     },
//     textarea: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       fontSize: "16px",
//       minHeight: "150px",
//       backgroundColor: "#f9f9f9",
//     },
//     imagePreview: {
//       display: "block",
//       width: "100%",
//       maxHeight: "200px",
//       marginBottom: "15px",
//       objectFit: "cover",
//       borderRadius: "6px",
//     },
//     button: {
//       width: "100%",
//       padding: "15px",
//       backgroundColor: "#007BFF",
//       color: "#fff",
//       border: "none",
//       borderRadius: "6px",
//       fontSize: "18px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     label: {
//       fontSize: "16px",
//       fontWeight: "500",
//       marginBottom: "8px",
//       display: "block",
//       color: "#333",
//     },
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <label style={styles.label}>Post Title</label>
//       <input
//         type="text"
//         placeholder="Enter Post Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={styles.input}
//       />

//       <label style={styles.label}>Post Content (HTML)</label>
//       <textarea
//         placeholder="Enter HTML Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         style={styles.textarea}
//       />

//       <label style={styles.label}>Upload Image</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         style={styles.input}
//       />
//       {imageUrl && (
//         <img src={imageUrl} alt="Post Preview" style={styles.imagePreview} />
//       )}

//       <label style={styles.label}>Amazon Affiliate Link</label>
//       <input
//         type="url"
//         placeholder="Enter Amazon Link"
//         value={amazonLink}
//         onChange={(e) => setAmazonLink(e.target.value)}
//         style={styles.input}
//       />

//       <label style={styles.label}>Category</label>
//       <input
//         type="text"
//         placeholder="Enter Post Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         style={styles.input}
//       />

//       <button
//         type="submit"
//         style={styles.button}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//         }
//         onMouseOut={(e) =>
//           (e.target.style.backgroundColor = styles.button.backgroundColor)
//         }
//       >
//         {post ? "Update" : "Create"} Post
//       </button>
//     </form>
//   );
// };

// export default PostForm;


// import React, { useState } from "react";
// import { db, storage } from "../firebase"; // Firebase Firestore and Storage
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage methods
// import { addDoc, updateDoc, doc, collection } from "firebase/firestore"; // Firestore functions

// const PostForm = ({ post, updatePost }) => {
//   const [title, setTitle] = useState(post ? post.title : "");
//   const [content, setContent] = useState(
//     post
//       ? post.content
//       : `
//       <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: auto; padding: 20px;">
//         <h2 style="text-align:center; color: #D17A00;">Your Blog Post Title Here</h2>
//         <img src="https://via.placeholder.com/1200x400" alt="Hero Image" style="width:100%; height:auto; margin:20px 0; border-radius: 8px;">
//         <div style="cursor: pointer;" onClick="window.open('${amazonLink}', '_blank')">
//           <p style="text-align:justify; font-size: 18px;">This is a sample template. Replace this text with your content. You can discuss various topics, share insights, or provide personal experiences.</p>
//           <img src="https://via.placeholder.com/600x300" alt="Placeholder" style="width:100%; height:auto; margin:20px 0; border-radius: 8px;">
//           <p style="text-align:justify; font-size: 18px;">Feel free to add more images, text, or any other content here. Edit this template to suit your needs and make it engaging for your readers.</p>
//           <blockquote style="border-left: 4px solid #D17A00; padding-left: 20px; color: #555; font-style: italic;">
//             <p>"Inspiration exists, but it has to find you working." - Pablo Picasso</p>
//           </blockquote>
//           <img src="https://via.placeholder.com/600x300" alt="Inspiration" style="width:100%; height:auto; margin:20px 0; border-radius: 8px;">
//           <p style="text-align:justify; font-size: 18px;">You can add lists, links, or other elements to make your post more informative and interactive.</p>
//           <ul style="margin: 20px 0; padding-left: 20px;">
//             <li>Engaging content</li>
//             <li>Rich media to enhance the reading experience</li>
//             <li>Clear structure for easy navigation</li>
//           </ul>
//           <h3 style="color: #D17A00;">Related Images</h3>
//           <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
//             <img src="https://via.placeholder.com/300x200" alt="Related 1" style="width:30%; margin: 10px; border-radius: 8px;">
//             <img src="https://via.placeholder.com/300x200" alt="Related 2" style="width:30%; margin: 10px; border-radius: 8px;">
//             <img src="https://via.placeholder.com/300x200" alt="Related 3" style="width:30%; margin: 10px; border-radius: 8px;">
//           </div>
//           <p style="text-align:justify; font-size: 18px;">Thank you for reading! Don't forget to share your thoughts in the comments below.</p>
//         </div>
//       </div>
//     `
//   );
//   const [imageUrl, setImageUrl] = useState(post ? post.image : "");
//   const [amazonLink, setAmazonLink] = useState(post ? post.amazonAffiliateLink : "");
//   const [category, setCategory] = useState(post ? post.category : ""); // New state for category

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const storageRef = ref(storage, `images/${file.name}`);
//       uploadBytes(storageRef, file).then((snapshot) => {
//         getDownloadURL(snapshot.ref).then((url) => {
//           setImageUrl(url);
//         });
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       title,
//       content,
//       image: imageUrl,
//       amazonAffiliateLink: amazonLink,
//       category, // Include category in the post
//     };

//     try {
//       if (post) {
//         const postRef = doc(db, "posts", post.id);
//         await updateDoc(postRef, newPost);
//         updatePost();
//       } else {
//         const postsCollectionRef = collection(db, "posts");
//         await addDoc(postsCollectionRef, newPost);
//         alert("Post has been published!");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error("Error handling post submission:", error.message);
//     }
//   };

//   const styles = {
//     form: {
//       maxWidth: "700px",
//       margin: "30px auto",
//       padding: "20px",
//       border: "1px solid #ddd",
//       borderRadius: "8px",
//       boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
//       backgroundColor: "#fff",
//       fontFamily: "'Roboto', sans-serif",
//     },
//     input: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       fontSize: "16px",
//       backgroundColor: "#f9f9f9",
//     },
//     textarea: {
//       width: "100%",
//       padding: "12px",
//       marginBottom: "15px",
//       border: "1px solid #ccc",
//       borderRadius: "6px",
//       fontSize: "16px",
//       minHeight: "150px",
//       backgroundColor: "#f9f9f9",
//     },
//     imagePreview: {
//       display: "block",
//       width: "100%",
//       maxHeight: "200px",
//       marginBottom: "15px",
//       objectFit: "cover",
//       borderRadius: "6px",
//     },
//     button: {
//       width: "100%",
//       padding: "15px",
//       backgroundColor: "#007BFF",
//       color: "#fff",
//       border: "none",
//       borderRadius: "6px",
//       fontSize: "18px",
//       cursor: "pointer",
//       transition: "background-color 0.3s",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     label: {
//       fontSize: "16px",
//       fontWeight: "500",
//       marginBottom: "8px",
//       display: "block",
//       color: "#333",
//     },
//   };

//   return (
//     <form onSubmit={handleSubmit} style={styles.form}>
//       <label style={styles.label}>Post Title</label>
//       <input
//         type="text"
//         placeholder="Enter Post Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={styles.input}
//       />

//       <label style={styles.label}>Post Content (HTML)</label>
//       <textarea
//         placeholder="Enter HTML Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         style={styles.textarea}
//       />

//       <label style={styles.label}>Upload Image</label>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleImageUpload}
//         style={styles.input}
//       />
//       {imageUrl && (
//         <img src={imageUrl} alt="Post Preview" style={styles.imagePreview} />
//       )}

//       <label style={styles.label}>Amazon Affiliate Link</label>
//       <input
//         type="url"
//         placeholder="Enter Amazon Link"
//         value={amazonLink}
//         onChange={(e) => setAmazonLink(e.target.value)}
//         style={styles.input}
//       />

//       <label style={styles.label}>Category</label>
//       <input
//         type="text"
//         placeholder="Enter Post Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//         style={styles.input}
//       />

//       <button
//         type="submit"
//         style={styles.button}
//         onMouseOver={(e) =>
//           (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
//         }
//         onMouseOut={(e) =>
//           (e.target.style.backgroundColor = styles.button.backgroundColor)
//         }
//       >
//         {post ? "Update" : "Create"} Post
//       </button>
//     </form>
//   );
// };

// export default PostForm;


import React, { useState } from "react";
import { db, storage } from "../firebase"; // Firebase Firestore and Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage methods
import { addDoc, updateDoc, doc, collection } from "firebase/firestore"; // Firestore functions

const PostForm = ({ post, updatePost }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [imageUrl, setImageUrl] = useState(post ? post.image : "");
  const [amazonLink, setAmazonLink] = useState(post ? post.amazonAffiliateLink : ""); // Ensure this is declared first
  const [category, setCategory] = useState(post ? post.category : ""); // New state for category

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const storageRef = ref(storage, `images/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
        });
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      image: imageUrl,
      amazonAffiliateLink: amazonLink,
      category, // Include category in the post
    };

    try {
      if (post) {
        const postRef = doc(db, "posts", post.id);
        await updateDoc(postRef, newPost);
        updatePost();
      } else {
        const postsCollectionRef = collection(db, "posts");
        await addDoc(postsCollectionRef, newPost);
        alert("Post has been published!");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error handling post submission:", error.message);
    }
  };

  const styles = {
    form: {
      maxWidth: "700px",
      margin: "30px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      fontFamily: "'Roboto', sans-serif",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      backgroundColor: "#f9f9f9",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      minHeight: "150px",
      backgroundColor: "#f9f9f9",
    },
    imagePreview: {
      display: "block",
      width: "100%",
      maxHeight: "200px",
      marginBottom: "15px",
      objectFit: "cover",
      borderRadius: "6px",
    },
    button: {
      width: "100%",
      padding: "15px",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "18px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    label: {
      fontSize: "16px",
      fontWeight: "500",
      marginBottom: "8px",
      display: "block",
      color: "#333",
    },
  };

  const mainContent = (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => amazonLink && window.open(amazonLink, "_blank")}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <label style={styles.label}>Post Title</label>
      <input
        type="text"
        placeholder="Enter Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Post Content (HTML)</label>
      <textarea
        placeholder="Enter HTML Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={styles.textarea}
      />

      <label style={styles.label}>Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={styles.input}
      />
      {imageUrl && (
        <img src={imageUrl} alt="Post Preview" style={styles.imagePreview} />
      )}

      <label style={styles.label}>Amazon Affiliate Link</label>
      <input
        type="url"
        placeholder="Enter Amazon Link"
        value={amazonLink}
        onChange={(e) => setAmazonLink(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Category</label>
      <input
        type="text"
        placeholder="Enter Post Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
      />

      <button
        type="submit"
        style={styles.button}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        {post ? "Update" : "Create"} Post
      </button>

      {/* Main Content Display */}
      {mainContent}
    </form>
  );
};

export default PostForm;