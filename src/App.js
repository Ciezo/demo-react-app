// App routing
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import createStore from "react-auth-kit/createStore";
import AuthProvider from "react-auth-kit";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
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
import MyAccountPage from "./pages/MyAccount";
import TestSpringBootIntegration from "./test/IntegrateSpringBoot";
import TestApiCallsUsingFetchToSpringBoot from "./test/ApiCallsUseFetch";
import TestExtractUserIdPrimaryKey from "./test/ExtractUserIdPrimaryKey";
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
    /**
     * > Integrate AuthProvider before Routes. The best place is app.js.
     * Reference: https://authkit.arkadip.dev/getting_started/integration/react-app/
     */
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
            {/* Authenticated only! */}
            {/* ========================================================== */}
            <Route element={<AuthOutlet fallbackPath="/login" />}>
              <Route path="/user/home" Component={UserHome} />
              <Route path="/user/notes/archive" Component={UserNotesArchive} />
              <Route path="/user/notes/trash" Component={UserNotesTrash} />
              <Route path="/user/my-account" Component={MyAccountPage}/>
              <Route path="/test/backend/springboot/calls" Component={TestApiCallsUsingFetchToSpringBoot} />
            </Route>
            {/* ========================================================== */}
            <Route path="/test/backend/springboot/integration" Component={TestSpringBootIntegration} />
            <Route path="/test/backend/springboot/calls/user/id" Component={TestExtractUserIdPrimaryKey} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
