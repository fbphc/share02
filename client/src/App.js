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
import Main from "./components/routes/mainMap/Main.js";
// components
import NavBar from "./components/navigation/NavBar.js";
import Register from "./components/routes/auth/Register.js";

// Provider
import { AuthProvider } from "./context/authContext/AuthContext.js";
import { MapProvider } from "./context/mapContext/MapContext.js";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        {/* <BrowserRouter> */}
        <MapProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/register" element={<Register />} />

            <Route path="/mainmap" element={<Main />} />
          </Routes>
        </MapProvider>
        {/* </BrowserRouter> */}
      </div>
    </AuthProvider>
  );
}

export default App;
