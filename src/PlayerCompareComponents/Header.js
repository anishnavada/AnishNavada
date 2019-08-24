import React from "react" 
import { Link } from "react-router-dom" 

class Header extends React.Component{

	render(){
		return (
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          	<span className="navbar-toggler-icon"></span>
          </button>
				  <span className="navbar-brand mb-0 h1">Player Compare</span>
				  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
						<ul className="navbar-nav">
							<li class="nav-item">
									<Link className = "nav-link" to="/PlayerCompare"> Home </Link> 
								</li>
							<li class="nav-item">
									<Link className = "nav-link" to="/PlayerCompare/Search"> Search Player </Link> 
								</li>
								<li class="nav-item">
								<Link className = "nav-link" to="/PlayerCompare/Compare"> Compare Player </Link> 
								</li>
						</ul>
						<ul className="navbar-nav">
							
						</ul>
					</div>
				</nav>
		)
	}
}

export default Header