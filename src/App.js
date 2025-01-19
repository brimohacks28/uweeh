// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './Components/Layout';
// import MainContent from './Components/MainContent';
// import AffiliateDisclosure from './Components/AffiliateDisclosure';
// import Blog from './Pages/Blog';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import AdminDashboard from './Pages/AdminDashboard'; // Admin Dashboard route
// // import { UserProfile } from './Pages/UserProfile'; 
// // Auth Components
// import Login from './Components/auth/Login';
// import Signup from './Components/auth/Signup';
// import { AuthProvider, useAuth } from './Components/auth/AuthContext'; 
// import PostForm from './Components/admin/PostForm';
// import PostDetail from './Components/PostDetail';
// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { currentUser } = useAuth();

//   if (!currentUser) {
//     return <Login />; // Redirect to login if not authenticated
//   }

//   return children;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <Router>
//         <Layout>
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<MainContent />} />
//             <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/maincontent" element={<Blog />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
            
//             <Route path="/admin" element={<PostForm />} /> 
//             {/* Post Detail Route */}
//             <Route path="/post/:id" element={<PostDetail />} /> {/* New route for post details */}

//             {/* Protected Routes */}
//             <Route
//               path="/admin-dashboard"
//               element={
//                 <ProtectedRoute>
//                   <AdminDashboard />
//                 </ProtectedRoute>
//               }
//             />
//             {/* <Route
//               path="/user-profile"
//               element={
//                 <ProtectedRoute>
//                   <UserProfile />
//                 </ProtectedRoute>
//               }
//             /> */}
//           </Routes>
//         </Layout>
//       </Router>
//     </AuthProvider>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout';
import MainContent from './Components/MainContent';
import AffiliateDisclosure from './Components/AffiliateDisclosure';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AdminDashboard from './Pages/AdminDashboard';
import Login from './Components/auth/Login';
import Signup from './Components/auth/Signup';
import { AuthProvider, useAuth } from './Components/auth/AuthContext';
import PostForm from './Components/admin/PostForm';
import PostDetail from './Components/PostDetail';
import Loading from './Components/Loading'; // Import Loading component

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Login />; // Redirect to login if not authenticated
  }

  return children;
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization/loading process
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after initialization
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <Loading />; // Display loading animation
  }

  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<MainContent />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/maincontent" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<PostForm />} />

            {/* Post Detail Route */}
            <Route path="/post/:id" element={<PostDetail />} />

            {/* Protected Routes */}
            <Route
              path="/admin-dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
