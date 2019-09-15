import React from 'react';
import './Styles.css';
import Navbar from './Components/Navbar'
import Experiences from './Components/Experiences'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Education from './Components/Education'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Link } from "react-router-dom" 
import './css/reset.css'
import './css/style.css'

class App extends React.Component{
	render(){
		return (
		 <div>
			<main className="cd-main-content">
				<div className="center">
					<h1>Anish Navada</h1>
					<br></br>
					<div class="home-div">
						<img className="my-image" src={require('./images/AnishNavada.jpg')}></img>
						<div className="about-me">
							<br></br>
							<p className="about-text-one">Hello! Welcome to my page!</p>
							<p className="about-text-two">I am studying Computer Science at Cornell University</p>
							<p className="about-text-three">I am interested in Full-Stack Web Development and am currently learning the MERN Stack</p>
							<p className="about-text-four">Navigate Below to see what I have done!</p>
						</div>
					</div>
					<Router>
						<Link to="/"><a href="#modal-1" className="cd-btn cd-modal-trigger">My Experiences</a></Link>
						<a href="#modal-2" className="cd-btn cd-modal-trigger">My Education</a>
						<a href="#modal-3" className="cd-btn cd-modal-trigger">My Projects</a>
					</Router>
				</div>
			</main>
			
			<div className="cd-modal" id="modal-1">
				<div className="modal-content">
					<Experiences/>
				</div> 
				<a href="/#0" className="modal-close">Close</a>
			</div> 
			
			<div className="cd-modal" id="modal-2">
				<div className="modal-content">
					<Education />
				</div> 
				<a href="#0" className="modal-close">Close</a>
			</div> 
			
			
			<div className="cd-modal" id="modal-3">
				<div className="modal-content">
					<Projects />
				</div> 
				<a href="#0" className="modal-close">Close</a>
			</div> 
			
			
			<div className="cd-transition-layer" data-frame="20"> 
				<div className="bg-layer"></div>
			</div>
		   </div>
		)
	}
}

export default App;
