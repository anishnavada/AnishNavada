import React from 'react';
import '../Styles.css';
import { Link } from "react-router-dom" 


class Navbar extends React.Component{
	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-dark">
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>
		        <Link to="/AnishNavada/"><span className="navbar-brand">Anish Navada</span></Link>
		        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
		          <ul className="nav navbar-nav navbar-center">
		            <li className="nav-item">
		              <Link className = "nav-link" to="/Experiences"> My Experiences</Link>
		            </li>
		            <li className="nav-item">
		              <Link className = "nav-link" to="/Projects"> My Projects</Link>
		            </li>
		            <li className="nav-item">
		              <Link className = "nav-link" to="/Education"> My Education</Link>
		            </li>
		          </ul>
		        </div>
	      </nav>
		)
	}
}

export default Navbar;
