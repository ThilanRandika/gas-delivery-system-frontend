import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Feature from "./Components/Feature";
import Support from "./Components/Support";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserDash from "./Pages/UserDash";
import Requeststatus from "./Pages/Reqstatus";
import ProductList from "./Pages/ProductList";
import Checkout from "./Pages/Checkout";
import UserNotify from "./Pages/UserNotify";
import Paystatus from "./Pages/Paystatus";
import Admindash from "./Pages/Admin/Admindash";
import Adminstock from "./Pages/Admin/Adminstock";
import Adminreport from "./Pages/Admin/Adminreport";
import AdminOutlet from "./Pages/Admin/AdminOutlet";
import AdminDelivery from "./Pages/Admin/AdminDelivery";
import OutletDashboard from "./Pages/Outlet/OutletDashboard"; // ✅ Ensure import
import OutletStock from "./Pages/Outlet/OutletStock";
import OutletDeliveries from "./Pages/Outlet/OutletDeliveries";
import OutletPerformance from "./Pages/Outlet/OutletPerformance";
import Customer from "./Pages/Outlet/Customer";
import OutletList from "./Pages/Admin/OutletList";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(""); // Track user role

  const [activeSection, setActiveSection] = useState("home");

  return (
    <Router>
      {!isLoggedIn && (
        <Navbar
          homebtn={() => setActiveSection("home")}
          abtBtn={() => setActiveSection("about")}
          febtn={() => setActiveSection("feature")}
          supbtn={() => setActiveSection("support")}
          toggleLogin={() => setShowLogin(true)}
          toggleSignup={() => setShowSignup(true)}
        />
      )}

      {showLogin && !isLoggedIn && (
        <Login
          togglePopup={() => setShowLogin(false)}
          setIsLoggedIn={setIsLoggedIn}
          setUserRole={setUserRole} // ✅ Pass user role state
        />
      )}
      {showSignup && <Signup togglePopup={() => setShowSignup(false)} />}

      <Routes>
        {/* Redirect based on login state */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              userRole === "admin" ? (
                <Navigate to="/admin-dashboard" />
              ) : userRole === "outlet" ? (
                <Navigate to="/outlet-dashboard" /> // ✅ Outlet users go here
              ) : (
                <Navigate to="/user-dashboard" />
              )
            ) : (
              <>
                {activeSection === "home" && <Header />}
                {activeSection === "about" && <About />}
                {activeSection === "feature" && <Feature />}
                {activeSection === "support" && <Support />}
              </>
            )
          }
        />

        {/* Protected Routes */}
        <Route path="/user-dashboard" element={isLoggedIn && userRole === "user" ? <UserDash /> : <Navigate to="/" />} />
        <Route path="/admin-dashboard" element={isLoggedIn && userRole === "admin" ? <Admindash /> : <Navigate to="/" />} />
        <Route path="/outlet-dashboard" element={isLoggedIn && userRole === "outlet" ? <OutletDashboard /> : <Navigate to="/" />} /> {/* ✅ Fixed OutletDashboard */}

        {/* Admin Routes */}
        <Route path="/Adminstock" element={isLoggedIn && userRole === "admin" ? <Adminstock /> : <Navigate to="/" />} /> 
        <Route path="/Adminreport" element={isLoggedIn && userRole === "admin" ? <Adminreport /> : <Navigate to="/" />} /> 
        <Route path="/AdminOutlet" element={isLoggedIn && userRole === "admin" ? <AdminOutlet /> : <Navigate to="/" />} />
        <Route path="/outlet-list" element={isLoggedIn && (userRole === "admin" || userRole === "outlet") ? <OutletList /> : <Navigate to="/" />} />
        <Route path="/AdminDelivery" element={isLoggedIn && userRole === "admin" ? <AdminDelivery /> : <Navigate to="/" />} />

        {/* Outlet Routes */}
        <Route path="/OutletStock" element={isLoggedIn && userRole === "outlet" ? <OutletStock /> : <Navigate to="/" />} /> 
        <Route path="/OutletPerformance" element={isLoggedIn && userRole === "outlet" ? <OutletPerformance/> : <Navigate to="/" />} />
        <Route path="/OutletDeliveries" element={isLoggedIn && userRole === "outlet" ? <OutletDeliveries /> : <Navigate to="/" />} />
        <Route path="/Customer" element={isLoggedIn && userRole === "outlet" ? <Customer/> : <Navigate to="/" />} />
    

        {/* User Routes */}
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/checkout/:productId" element={<Checkout />} />
        <Route path="/UserNotify" element={isLoggedIn ? <UserNotify /> : <Navigate to="/" />} />
        <Route path="/request-status" element={isLoggedIn ? <Requeststatus /> : <Navigate to="/" />} />
        <Route path="/Paystatus" element={isLoggedIn ? <Paystatus /> : <Navigate to="/" />} />
      </Routes>

      {!isLoggedIn && <Footer />}
    </Router>
  );
}

export default App;
