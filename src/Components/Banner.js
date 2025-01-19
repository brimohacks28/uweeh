// // Banner.js
// import React, { useState } from "react";

// const Banner = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="banner">
//       <div className="banner-container">
//         <h1 className="banner-title">The Abcs of things</h1>
//         <button className="menu-toggle" onClick={toggleMenu}>
//           ☰
//         </button>
//         <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <a href="#home">Technology</a>
//             </li>
//             <li>
//               <a href="#about">Lifestyle</a>
//             </li>
//             <li className="dropdown">
//               <a href="#blog" className="dropdown-toggle">
//                 Blog
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a href="#tech">Tech</a>
//                 </li>
//                 <li>
//                   <a href="#lifestyle">Lifestyle</a>
//                 </li>
//                 <li>
//                   <a href="#travel">Travel</a>
//                 </li>
//               </ul>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <style jsx>{`
//         .banner {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background: #5CB338;
//           color: white;
//           padding: 20px;
//           border-radius: 10px;
//         }

//         .banner-container {
//           width: 90%;
//           max-width: 1200px;
//           position: relative;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .banner-title {
//           font-size: 2rem;
//         }

//         .menu-toggle {
//           display: none;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 1.5rem;
//           cursor: pointer;
//         }

//         .nav-links {
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links li {
//           position: relative;
//         }

//         .nav-links a {
//           color: white;
//           text-decoration: none;
//           font-size: 1rem;
//         }

//         .nav-links .dropdown-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: white;
//           color: black;
//           display: none;
//           flex-direction: column;
//           border-radius: 5px;
//           overflow: hidden;
//         }

//         .nav-links .dropdown:hover .dropdown-menu {
//           display: flex;
//         }

//         .dropdown-menu a {
//           padding: 10px;
//           text-decoration: none;
//           color: black;
//         }

//         .dropdown-menu a:hover {
//           background: #f0f0f0;
//         }

//         @media (max-width: 768px) {
//           .menu-toggle {
//             display: block;
//           }

//           .nav-links {
//             display: none;
//             flex-direction: column;
//             gap: 10px;
//             position: absolute;
//             top: 60px;
//             right: 20px;
//             background: rgba(0, 0, 0, 0.8);
//             padding: 10px;
//             border-radius: 5px;
//           }

//           .nav-links.open {
//             display: flex;
//           }

//           .nav-links ul {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .banner-title {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Banner;





// import React, { useState } from "react";

// const Banner = ({ onCategorySelect }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleCategoryClick = (category) => {
//     onCategorySelect(category);
//     setIsMenuOpen(false); // Close the menu after selection
//   };

//   return (
//     <header className="banner">
//       <div className="banner-container">
//         <h1 className="banner-title">The Abcs of Things</h1>
//         <button className="menu-toggle" onClick={toggleMenu}>
//           ☰
//         </button>
//         <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <a onClick={() => handleCategoryClick("Technology")}>Technology</a>
//             </li>
//             <li>
//               <a onClick={() => handleCategoryClick("Lifestyle")}>Food</a>
//             </li>
//             <li>
//               <a onClick={() => handleCategoryClick("Lifestyle")}>Travel</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <style jsx>{`
//         .banner {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background: #5cb338;
//           color: white;
//           padding: 10px;
//           border-radius: 6px;
//         }

//         .banner-container {
//           width: 90%;
//           max-width: 1200px;
//           position: relative;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .banner-title {
//           font-size: 2rem;
//         }

//         .menu-toggle {
//           display: none;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 1.5rem;
//           cursor: pointer;
//         }

//         .nav-links {
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links li {
//           position: relative;
//         }

//         .nav-links a {
//           color: white;
//           text-decoration: none;
//           font-size: 1rem;
//           cursor: pointer; /* Change to pointer for better UX */
//         }

//         .nav-links .dropdown-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: white;
//           color: black;
//           display: none;
//           flex-direction: column;
//           border-radius: 5px;
//           overflow: hidden;
//         }

//         .nav-links .dropdown:hover .dropdown-menu {
//           display: flex;
//         }

//         .dropdown-menu a {
//           padding: 10px;
//           text-decoration: none;
//           color: black;
//         }

//         .dropdown-menu a:hover {
//           background: #f0f0f0;
//         }

//         @media (max-width: 768px) {
//           .menu-toggle {
//             display: block;
//           }

//           .nav-links {
//             display: none;
//             flex-direction: column;
//             gap: 10px;
//             position: absolute;
//             top: 60px;
//             right: 20px;
//             background: rgba(0, 0, 0, 0.8);
//             padding: 10px;
//             border-radius: 5px;
//           }

//           .nav-links.open {
//             display: flex;
//           }

//           .nav-links ul {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .banner-title {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Banner;





// import React, { useState } from "react";

// const Banner = ({ onCategorySelect }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const handleCategoryClick = (category) => {
//     onCategorySelect(category);
//     setIsMenuOpen(false); // Close the menu after selection
//   };

//   return (
//     <header className="banner">
//       <div className="banner-container">
//         <h1 className="banner-title">The Abcs of Things</h1>
//         <button className="menu-toggle" onClick={toggleMenu}>
//           ☰
//         </button>
//         <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <a onClick={() => handleCategoryClick("Technology")}>Technology</a>
//             </li>
//             <li>
//               <a onClick={() => handleCategoryClick("Food")}>Food</a>
//             </li>
//             <li>
//               <a onClick={() => handleCategoryClick("Travel")}>Travel</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <style jsx>{`
//         .banner {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background: #5cb338;
//           color: white;
//           padding: 10px;
//           border-radius: 6px;
//         }

//         .banner-container {
//           width: 90%;
//           max-width: 1200px;
//           position: relative;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .banner-title {
//           font-size: 2rem;
//         }

//         .menu-toggle {
//           display: none;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 1.5rem;
//           cursor: pointer;
//         }

//         .nav-links {
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links li {
//           position: relative;
//         }

//         .nav-links a {
//           color: white;
//           text-decoration: none;
//           font-size: 1rem;
//           cursor: pointer; /* Change to pointer for better UX */
//         }

//         @media (max-width: 768px) {
//           .menu-toggle {
//             display: block;
//           }

//           .nav-links {
//             display: none;
//             flex-direction: column;
//             gap: 10px;
//             position: absolute;
//             top: 60px;
//             right: 20px;
//             background: rgba(0, 0, 0, 0.8);
//             padding: 10px;
//             border-radius: 5px;
//           }

//           .nav-links.open {
//             display: flex;
//           }

//           .nav-links ul {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .banner-title {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Banner;

// Best code yet above

// import React, { useState } from "react";

// const Banner = ({ onCategorySelect }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="banner">
//       <div className="banner-container">
//         <h1 className="banner-title">The Abcs of Things</h1>
//         <button className="menu-toggle" onClick={toggleMenu}>
//           ☰
//         </button>
//         <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
//           <ul>
//             <li>
//               <a onClick={() => onCategorySelect("Technology")}>Technology</a>
//             </li>
//             <li>
//               <a onClick={() => onCategorySelect("Food")}>Food</a>
//             </li>
//             <li>
//               <a onClick={() => onCategorySelect("Travel")}>Travel</a>
//             </li>
//           </ul>
//         </nav>
//       </div>

//       <style jsx>{`
//         .banner {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background: #5cb338;
//           color: white;
//           padding: 10px;
//           border-radius: 6px;
//         }

//         .banner-container {
//           width: 90%;
//           max-width: 1200px;
//           position: relative;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .banner-title {
//           font-size: 2rem;
//         }

//         .menu-toggle {
//           display: none;
//           background: none;
//           border: none;
//           color: white;
//           font-size: 1.5rem;
//           cursor: pointer;
//         }

//         .nav-links {
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links ul {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           display: flex;
//           gap: 20px;
//         }

//         .nav-links li {
//           position: relative;
//         }

//         .nav-links a {
//           color: white;
//           text-decoration: none;
//           font-size: 1rem;
//           cursor: pointer; /* Change to pointer for better UX */
//         }

//         @media (max-width: 768px) {
//           .menu-toggle {
//             display: block;
//           }

//           .nav-links {
//             display: none;
//             flex-direction: column;
//             gap: 10px;
//             position: absolute;
//             top: 60px;
//             right: 20px;
//             background: rgba(0, 0, 0, 0.8);
//             padding: 10px;
//             border-radius: 5px;
//           }

//           .nav-links.open {
//             display: flex;
//           }

//           .nav-links ul {
//             flex-direction: column;
//             gap: 10px;
//           }

//           .banner-title {
//             font-size: 1.5rem;
//           }
//         }
//       `}</style>
//     </header>
//   );
// };

// export default Banner;



import React, { useState } from "react";

const Banner = ({ onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="banner">
      <div className="banner-container">
        <h1 className="banner-title">The Abcs of Things</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a onClick={() => onCategorySelect("Technology")}>Technology</a>
            </li>
            <li>
              <a onClick={() => onCategorySelect("Food")}>Food</a>
            </li>
            <li>
              <a onClick={() => onCategorySelect("Travel")}>Travel</a>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #85A947;
          color: white;
          padding: 15px;
          border-radius: 6px;
        }

        .banner-container {
          width: 90%;
          max-width: 1200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .banner-title {
          font-size: 2rem;
          text-align: center;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          gap: 20px;
        }

        .nav-links li {
          position: relative;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
          }

          .nav-links {
            display: none;
            flex-direction: column;
            gap: 10px;
            position: absolute;
            top: 60px;
            right: 10px;
            background: rgba(0, 0, 0, 0.8);
            padding: 10px;
            border-radius: 5px;
            z-index: 1000;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links ul {
            flex-direction: column;
            gap: 10px;
          }

          .banner-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .banner-title {
            font-size: 1.25rem;
          }

          .nav-links a {
            font-size: 0.9rem;
          }

          .menu-toggle {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Banner;