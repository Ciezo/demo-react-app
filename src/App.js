// App routing
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import License from "./pages/License";
import TermsAndPrivacy from "./pages/TermsAndPrivacy";
import CodeOfConduct from "./pages/CodeOfConduct";
import Contribute from "./pages/Contribute";
import DataCollection from "./pages/DataCollection";
import UserHome from "./pages/UserHome";
import UserNotesArchive from "./pages/UserNotesArchive";
import UserNotesTrash from "./pages/UserNotesTrash";
import NotFound from "./error/Error404";

function App() {
  /** 
   * <b>Store Creation</b>
   * <p>
   * To use <u>React Auth Kit</u> in the application, 
   * we first need to create the store that holds the data for our application. 
   * </p>
   * 
   * <p>
   * Reference: https://authkit.arkadip.dev/getting_started/integration/react-app/ 
   * </p>
   */
  const store = createStore({
    authName: "_auth",
    authType: "cookie",
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === "http:",
  });

  return (
    <AuthProvider store={store}>
      <Router>
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            <Route path="/license" Component={License} />
            <Route path="/terms-and-privacy" Component={TermsAndPrivacy} />
            <Route path="/code-of-conduct" Component={CodeOfConduct} />
            <Route path="/contribute" Component={Contribute} />
            <Route path="/data-collection" Component={DataCollection} />
            <Route path="/username/home" Component={UserHome} />
            <Route path="/username/archive" Component={UserNotesArchive} />
            <Route path="/username/trash" Component={UserNotesTrash} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
