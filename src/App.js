import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";

// App routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="content">
        <CustomNavbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
