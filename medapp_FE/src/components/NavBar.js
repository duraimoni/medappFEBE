import React from 'react';

const NavBar = () => {
return (
  <nav className="nav-wrapper red darken-3 gradient" >
      <div className="container">
        <a href="/t" className="brand-logo center">Med App</a>
        <ul className="right">
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/register">Sign In</a>
            </li>
        </ul>
      </div>
   </nav>
);
}

export default NavBar