import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { BsList } from 'react-icons/bs';
function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/";
    })
  }
  const onClickHamburger = () => {
		const hamburger = document.querySelector('.hamburger');
		const navLinks = document.querySelector('.navLinks');
		navLinks.classList.toggle('hide');	
   }
  return (
   <Router>
     <nav>
       <Link className="brand-name" to="/" >Blog Website</Link>
       {/* <Link to="/home">Home</Link> */}
       <button className="hamburger" onClick={onClickHamburger}><BsList /></button>
       <div className="navLinks hide">
       {!isAuth ? (
       <Link className="link" to="/">Login</Link>
        ) : (
        <>
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/createpost">CreatePost</Link>
        <button className="link logoutButton" onClick={signUserOut}> Log Out </button>
        </>
        )}
        </div>
     </nav>
     <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
       <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
     </Routes>
   </Router>
  );
}

export default App;