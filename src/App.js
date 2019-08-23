import React from 'react';
import './Styles.css';
import Home from "./components/Home.js" 
import Header from "./components/Header.js" 
import Compare from "./components/Compare.js" 
import Search from "./components/Search.js" 
import SuccessAlert from "./components/SuccessAlert.js" 
import ErrorAlert from "./components/ErrorAlert.js" 
import OverflowAlert from "./components/OverflowAlert.js"
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import $ from "jquery"
import 'bootstrap';

class App extends React.Component{
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
					<Header />
					<Switch>
						<Route
						path='/Compare'
						render={(props) => <Compare {...props} players={this.state.players}/>}
						/>
						<Route
						path='/Search'
						render={(props) => <Search {...props} addPlayer={this.addPlayer} />}
						/>
						<Route path="/" component={Home} />
					</Switch>
				</div>
				<SuccessAlert />
				<ErrorAlert />
				<OverflowAlert />
				</Router>
		)
	}
}

export default App;
