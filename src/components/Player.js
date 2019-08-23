import React from "react"
import '../Styles.css';
import $ from 'jquery';
import 'bootstrap';

class Player extends React.Component{
	
	constructor(){
		super()
		this.state = {
		}
		this.updateState = this.updateState.bind(this)
	}
	
	static returnPosition(value, list){
		var position = 1
		var i;
		for(i = 0; i < list.length; i++){
			if (Number(list[i])>Number(value)){
				position++
			}
		}
		return position
	}
	
	static returnColor(position){
		if (position==1){
			return "#32CD32";
		}
		else if (position ==2 ){
			return "#1E90FF";
		}
		else{
			return "#DC143C";
		}
	}

	updateState(){
		var firstName = this.props.player.name.split(" ")[0];
		var lastName = this.props.player.name.split(" ")[1];
		var ppgList = []
		var fgpList = []
		var apgList = []
		var perList = []
		var bpgList = []
		var spgList = []
		console.log(this.props.playerList)
		this.props.playerList.map(player => {
			ppgList.push(player.points_per_game)
			fgpList.push(player.field_goal_percentage)
			apgList.push(player.assists_per_game)
			perList.push(player.player_efficiency_rating)
			bpgList.push(player.blocks_per_game)
			spgList.push(player.steals_per_game)
		})
		console.log(this.props.player.name);
		console.log(ppgList);
		console.log(this.props.player.points_per_game);
		console.log(Player.returnPosition(this.props.player.points_per_game, ppgList))
		this.setState({
			ppg: Player.returnPosition(this.props.player.points_per_game, ppgList),
			fpg: Player.returnPosition(this.props.player.field_goal_percentage, fgpList), 
			apg: Player.returnPosition(this.props.player.assists_per_game, apgList),
			per: Player.returnPosition(this.props.player.player_efficiency_rating, perList),
			bpg: Player.returnPosition(this.props.player.blocks_per_game, bpgList),
			spg: Player.returnPosition(this.props.player.steals_per_game, spgList),
			img: "https://nba-players.herokuapp.com/players/" + lastName + "/" + firstName
		})
	}

	componentDidMount(){
		this.updateState()
	}

	showConfirmation(){
		$('#remove-confirm').modal('show');
	}
	
	render(){
		return (
			
					<div className="compare-player-card card">
					  <img  id="search-card-image" src={this.state.img} className="card-img-top" alt="..."></img>
					  <ul class="list-group list-group-flush">
					    <li class="list-group-item">Points Per Game: <b style={{color: Player.returnColor(this.state.ppg)}} className="numberIcon">{this.state.ppg}</b></li>
					    <li class="list-group-item">Field Goal Percentage: <b style={{color: Player.returnColor(this.state.fpg)}} className="numberIcon">{this.state.fpg}</b></li>
					    <li class="list-group-item">Assists Per Game: <b style={{color: Player.returnColor(this.state.apg)}} className="numberIcon">{this.state.apg}</b></li>
					    <li class="list-group-item">Player Effeciency Rating: <b style={{color: Player.returnColor(this.state.per)}} className="numberIcon">{this.state.per}</b></li>
					    <li class="list-group-item">Blocks Per Game: <b style={{color: Player.returnColor(this.state.bpg)}} className="numberIcon">{this.state.bpg}</b></li>
					    <li class="list-group-item">Steals Per Game: <b style={{color: Player.returnColor(this.state.spg)}} className="numberIcon">{this.state.spg}</b></li>
					  </ul>
					</div>
					
		
		)
	}
	
}

export default Player