import React from "react";

function Footer() {
  return (
    <div className="mx-auto px-5">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="#license" class="nav-link px-2 text-body-secondary">
            License
          </a>
        </li>
        <li class="nav-item">
          <a href="#conduct" class="nav-link px-2 text-body-secondary">
            Code of conduct
          </a>
        </li>
        <li class="nav-item">
          <a href="#terms" class="nav-link px-2 text-body-secondary">
            Terms
          </a>
        </li>
        <li class="nav-item">
          <a href="#privacy" class="nav-link px-2 text-body-secondary">
            Privacy
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#how_data_is_collected"
            class="nav-link px-2 text-body-secondary"
          >
            How we collect data?
          </a>
        </li>
      </ul>
      <p class="text-center">&copy; 2024 Cloyd Van Secuya </p>
    </div>
  );
}

export default Footer;
