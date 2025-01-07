// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar'; // Import your Navbar
// import Footer from './Components/Footer';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
        
//         <Route path="/" element={<Navbar />} />
//         <Route path="/home" element={<Footer />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import your Navbar
import Footer from './Components/Footer';



const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
