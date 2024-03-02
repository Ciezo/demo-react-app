import React from "react";
import { Outlet, Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="mx-auto px-5">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/license" className="nav-link px-2 text-body-secondary">License</Link>
          </li>
          <li className="nav-item">
            <Link to="/code-of-conduct" className="nav-link px-2 text-body-secondary">Code of Conduct</Link>
          </li>
          <li className="nav-item">
            <Link to="/terms-and-privacy" className="nav-link px-2 text-body-secondary">Terms and Privacy</Link>
          </li>
          <li className="nav-item">
            <Link to="/data-collection" className="nav-link px-2 text-body-secondary">How we collect data?</Link>
          </li>
        </ul>
        <p className="text-center">&copy; 2024 Cloyd Van Secuya </p>
      </div>
      <Outlet />
    </footer>
  );
}

export default Footer;
