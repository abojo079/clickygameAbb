import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-light">
 <strong> <a class="navbar-brand" href="#">Clicky Game</a></strong>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#"><span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#"></a>
      <a class="nav-item nav-link" href="#"></a>
      <a class="nav-item nav-link disabled" href="#"></a>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
