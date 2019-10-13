import React from 'react';
import '../Styles.css';
import { Link } from "react-router-dom" 

class Projects extends React.Component{
	render(){
		return (
			<div>
				<h3 className="project-title section-title">My Projects</h3>
				<div className="project-row">
					<div className="project card mb-3">
					  <div className="row no-gutters">
					      <img src={require('../images/music-recommendation.jpg')} className="project-image card-img-top" alt=""></img>
					    <div className="project-desc col-md-8">
					      <div className="card-body">
					        <p className="project-name card-title">MusicRec (2019)</p>
					        <p className="card-text">A Web-app made with React, MongoDB, Node JS, and Express that allows users to create and share music recommendation lists through auto-generated list-keys. All users with keys can edit/add to the music list.</p>
					        <a href="https://music-rec-321.herokuapp.com" target="_blank"><p className="card-text">Click here to go to MusicRec!</p></a>
					      </div>
					    </div>
					  </div>
					</div>
					
					<div className="project card mb-3">
					  <div className="row no-gutters">
					      <img src={require('../images/player-compare.png')} className="project-image card-img-top" alt=""></img>
					    <div className="project-desc col-md-8">
					      <div className="card-body">
					        <p className="project-name card-title">Player Compare (2019)</p>
					        <p className="card-text">Web-app made completely with React that allows users to select up to three players that were active during the 2016-2017 season and see how their statistics rank against each other in a visually intuitive way.</p>
					        <a href="http://anishnavada.github.io/PlayerCompare" target="_blank"><p className="card-text">Click here to go to Player Compare!</p></a>
					      </div>
					    </div>
					  </div>
					</div>
					
				</div>
				
				<div className="project-row">
					{/*<div className="project card mb-3">
					  <div className="row no-gutters">
					      <img src={require('../images/AnishNavada.jpg')} className="project-image card-img-top" alt=""></img>
					    <div className="project-desc col-md-8">
					      <div className="card-body">
					        <p className="project-name card-title">Personal Website (2019)</p>
					        <p className="card-text">This is the website you are on! It is intended to allow users to get to know my technical and career related experiences. This website is also made on React!</p>
					        <a href="http://anishnavada.github.io/AnishNavada" target="_blank"><p className="card-text">Click here to go to Anish Navada!</p></a>
					      </div>
					    </div>
					  </div>
					</div>*/}
					
					<div className="project card mb-3">
					  <div className="row no-gutters">
					      <img src={require('../images/quantum.jpg')} className="project-image card-img-top" alt=""></img>
					    <div className="project-desc col-md-8">
					      <div className="card-body">
					        <p className="project-name card-title">Quantum Key Distribution (2018)</p>
					        <p className="card-text">An interactive Unity Program that allows users to follow the basics of how Quantum Key Distribution in Quantum Cryptography works. The program allows you to follow an example to explain a simple version of the concept.</p>
					        <a href="http://anishnavada.github.io/QuantumKeyDistribution" target="_blank"><p className="card-text">Click here to go to Quantum Key Distribution!</p></a>
					      </div>
					    </div>
					  </div>
					</div>
					
					<div className="project card mb-3">
					  <div className="row no-gutters">
					      <img src={require('../images/Tank.png')} className="project-image card-img-top" alt=""></img>
					    <div className="project-desc col-md-8">
					      <div className="card-body">
					        <p className="project-name card-title">2D Tank Game (2018)</p>
					        <p className="card-text">An old-school two player Tank Battle Game where two players compete to get the most points. Points can be earned by destroying each other or destroying the neutral tank. Game made in Unity!</p>
					        <a href="http://anishnavada.github.io/TankBattle" target="_blank"><p className="card-text">Click here to go to 2D Tank Game!</p></a>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;
