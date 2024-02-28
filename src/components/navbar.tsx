import * as react from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/logo192.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                        MuseQuest
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <NavLink className="nav-link" to="/create">Create MuseQuests</NavLink>
                        <NavLink className="nav-link" to="/browse">Browse MuseQuests</NavLink>
                        <NavLink className="nav-link" to="/faq">FAQ</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        {/* FIX NAVLINKS AND LAYOUT LATER */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}

export default NavBar;