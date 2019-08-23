import React from "react"
import '../Styles.css';

class Home extends React.Component{
	
	render(){
		return (
			<div className="jumbotron">	
					<h1 className="display-4">Welcome to Player Compare!</h1>
					<p className="lead">Using this Web-app, you can compare the stats of NBA Players in an easy way!</p>
					<p className="lead">Navigate to the Search Tab... </p>
					<p className="lead">Add up to 3 players that you would like to compare...</p>
					<p className="lead">And Voila! Now in the Compare Tab you can see how the players rank on each individual stat!</p>
					<hr className="my-4"></hr>
					<p>The stats are from a segment of the 2017-2018 season taken from https://nba-players.herokuapp.com/ API</p>
					<p>Made By Anish Navada</p>
			</div>
		)
	}
	
}

export default Home