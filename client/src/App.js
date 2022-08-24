// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// libraries
import {Routes, Route} from 'react-router-dom';

// routes
import HomePage from './routes/homePage/HomePage.js';
import AboutUs from './routes/about-us/AboutUs.js';
import Login from './routes/login/Login.js';
import ContactUs from './routes/contact/ContactUs.js';

// components
import NavBar from './components/navigation/NavBar.js';
import Register from './routes/register/Register.js';



function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
