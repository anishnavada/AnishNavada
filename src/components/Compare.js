import React from "react"
import '../Styles.css';
import Player from "./Player.js"
import { Link } from "react-router-dom" 

class Compare extends React.Component{
	

	render(){
		const playerComponents = this.props.players.map(player => <Player playerList={this.props.players} player={player}/>)
		return (
						
			<div className="compare-div">
				{this.props.players.length == 0 ? 
				<div className="jumbotron">
					<h1 className="display-4">Compare Page</h1>
					<p className="lead">You can add up to 3 players to this page to compare how their stats rank compared to each other!</p>
					<hr className="my-4"></hr>
					<Link to="/Search"><button className="btn btn-primary btn-lg">Go to Search Page</button></Link> 
				</div>:null}
				{playerComponents}
			</div>
		)
	}
	
}

export default Compare