// App routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
  return (
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
  );
}

export default App;
