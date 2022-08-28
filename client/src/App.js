// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// libraries
import { Routes, Route } from "react-router-dom";

// routes
import HomePage from "./components/routes/homePage/HomePage.js";
import AboutUs from "./components/routes/about-us/AboutUs.js";
import Login from "./components/routes/auth/Login.js";
import ContactUs from "./components/routes/contact/ContactUs.js";
import Register from "./components/routes/auth/Register.js";

//test
import LoginTest from "./components/routes/auth/LoginTest.js";
import RegisterTest from "./components/routes/auth/RegisterTest.js";

// components
import NavBar from "./components/navigation/NavBar.js";

// Provider
import { AuthProvider } from "./context/authContext/authContext.js";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          
          <Route path="/test_path/register" element={<RegisterTest />}/>
          <Route path="/test_path/login" element={<LoginTest />}/>

            
        
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
