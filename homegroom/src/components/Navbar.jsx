import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({value}) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
        <div className="navbar-heading">
            <h2>HomeGroom</h2>
        </div>
        <div className="nav-links">
            <a>Services</a>
            <a>About</a>
            <button onClick = {(e) => {if(value == 'SignIn'){
              e.preventDefault();
              navigate('/signIn')
            }}}
            >{value}</button>
        </div>
    </div>
  );
}

export default Navbar;
