import React from 'react';
import Home from "./Home.js" 
import Header from "./Header.js" 
import Compare from "./Compare.js" 
import Search from "./Search.js" 
import SuccessAlert from "./SuccessAlert.js" 
import ErrorAlert from "./ErrorAlert.js" 
import OverflowAlert from "./OverflowAlert.js"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import $ from "jquery"
import 'bootstrap';
import AboutMeApp from '../AboutMeComponents/AboutMeApp';

class PlayerCompareApp extends React.Component{
	constructor(){
		super()
		this.state={
			players: []
		}
		this.addPlayer = this.addPlayer.bind(this)
		this.removePlayer = this.removePlayer.bind(this)
	}

	addPlayer(player){
		console.log("Adding Player!")
		console.log(player)
		if(this.state.players.length > 2){
			$('#player-overflow').modal('show');
		}
		else{
			this.setState(prevState => {
				var newPlayerArray = prevState.players
				var isPlayerNew = true
				newPlayerArray.map(p => {    
					if (p.name === player.name){isPlayerNew = false}
					return p 
				})
				if(isPlayerNew){
					newPlayerArray.push(player)
					$('#player-success').modal('show')
				}
				else{
					$('#player-error').modal('show')
				}
				return{
					players: newPlayerArray
				}
			})
			console.log(this.state.players)
		}
	}
	
	removePlayer(player){
		console.log("REMOVING PLAYER")
		console.log(player.name)
		this.setState(prevState => {
			const index = prevState.players.indexOf(player)
			var newPlayers = prevState.players.splice(index,1)
			console.log("NEW PLAYERS")
			console.log(newPlayers)
			return {
				players: newPlayers
			}
		})
	}

	render(){
		return (
				<Router>
				<div>
					<Route path="/PlayerCompare/" component={Header} />
					<Switch>
						<Route
						path='/PlayerCompare/Compare'
						render={(props) => <Compare {...props} players={this.state.players}/>}
						/>
						<Route
						path='/PlayerCompare/Search'
						render={(props) => <Search {...props} addPlayer={this.addPlayer} />}
						/>
						<Route path="/AnishNavada" component={AboutMeApp}/>
						<Route path="/PlayerCompare" component={Home} />
					</Switch>
				</div>
				<SuccessAlert />
				<ErrorAlert />
				<OverflowAlert />
				</Router>
		)
	}
}

export default PlayerCompareApp;
