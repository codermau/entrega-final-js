import React from 'react'
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-gradient shadow rounded-pill">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav font-monospace h5">
                        <NavLink className="nav-link active lead text-white px-5" aria-current="page" to='/'>Inicio</NavLink>
                        <NavLink className="nav-link lead text-white px-5" to='/categoria/prog'>Prog rock</NavLink>
                        <NavLink className="nav-link lead text-white px-5" to='/categoria/rock'>Hard Rock</NavLink>
                        <NavLink className="nav-link lead text-white px-5" to='/cart'><CartWidget /></NavLink>
                    </div>
                </div>
            </div>
        </nav>
  )
}

export default NavBar;