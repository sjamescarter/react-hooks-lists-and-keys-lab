import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkComponent = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a>
  })
  
  return <nav>{linkComponent}</nav>;
}

export default NavBar;
