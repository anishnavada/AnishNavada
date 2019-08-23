import React from "react" 
import { Link } from "react-router-dom" 

class Header extends React.Component{

	render(){
		return (
				<nav className="navbar  navbar-expand-lg navbar-light bg-light">
				  <span className="navbar-brand mb-0 h1">Player Compare</span>
				  <ul className="navbar-nav">
					  <li class="nav-item">
				        <Link className = "nav-link" to="/"> Home </Link> 
				      </li>
					  <li class="nav-item">
				        <Link className = "nav-link" to="/Search"> Search Player </Link> 
				      </li>
				      <li class="nav-item">
				      <Link className = "nav-link" to="/Compare"> Compare Player </Link> 
				      </li>
				  </ul>
				</nav>
		)
	}
}

export default Header