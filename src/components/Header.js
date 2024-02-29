import React from "react";

function Header({ text, size }){
    return(
      <div className="text-center">
        {/* The size property renders different sizes from 1 to 6 
        https://getbootstrap.com/docs/5.0/content/typography/#display-headings*/}
        <h1 className={`display-${size} fw-bold text-body-emphasis`}>{text}</h1>
      </div>
    )
  }
  
  export default Header