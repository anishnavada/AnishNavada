import React from "react";
import '../Styles.css';

class Search extends React.Component{
	
	constructor(){
		super()
		this.state = {
			loaded: false,
			error: false,
			player: {
				name: "No Player",
				team_name: "No Team",
				games_played: "N/A"
			},
			playerImg: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXk5ueutLepsLPo6uursbXJzc/p6+zj5ea2u76orrKvtbi0ubzZ3N3O0dPAxcfg4uPMz9HU19i8wcPDx8qKXtGiAAAFTElEQVR4nO2d3XqzIAyAhUD916L3f6+f1m7tVvtNINFg8x5tZ32fQAIoMcsEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQTghAJD1jWtnXJPP/54IgNzZQulSmxvTH6oYXX4WS+ivhTbqBa1r26cvCdCu6i0YXbdZ0o4A1rzV+5IcE3YE+z58T45lqo7g1Aa/JY5tgoqQF3qb382x7lNzBLcxft+O17QUYfQI4IIeklKsPSN4i6LKj/7Zm8n99RbHJpEw9gEBXNBpKIYLJqKYRwjOikf//r+J8ZsVuacbqCMNleI9TqGLGqMzhnVdBOdd6F/RlrFijiCoVMk320CBIahUxTWI0KKEcJqKbMdpdJb5QvdHq6wCI5qhKlgGMS/RBHkubWDAE+QZxB4xhCyDiDkLZxgGEVdQldzSKbTIhmZkFkSEPcVvmBn2SMuZB9od7fQDsMiDdKJjFUSCQarM5WirZ3C2TT/htYnyPcPfgrFHWz0BI74gr6J/IZiGUxAZGQLqmvQLTrtE/Go4YxhVRIpEw+sww1IIcqr5NKmUUzLF3d4/qPkYIp2T/obPuemlojFUR4t9Q2Vojhb7BmgElWHzLPH8hucfpefPNFTVgs9h1AdU/Pin96vwWbWdf+X9Absn3OdO34aMdsDnP8WgKYisTqI6CkNGqZQo1XA6Ef6AU32SJzOcBukHPF07/xNSgmHKa5BOhtezv6mA/rYJpwXNAnbRZ1XuF3BzDcO3vpA3+ny2909gbqE4hhD3LIPhLLyBNhPZvbZ3B+3tPYa18A7auSlXQayKwTPNLKDcuOB0xPYKDPFTkWsevQPRZ1J8Hji9I1KQ34r7hZhrwNwOZ97QxNx0drwn4QI0wQk1DcEsfKCWKdxVvxPSNUIp/knmAXT+nT+Ko3+0H96rcNb3m1fx7MBTJdeBJ7uFcWsc0wvgAsC4pROW0l2inbAmIBv/7GZmuhQH6API2rr8T0e6yuZJ+80A9LZeG62T3tik31XwxtwZcizKuTHkMjB1WdZde4Kmic/A5ZI3rr1ae21d08PlVHYfAaxw9G9CYRbJ+8ZdbTcMRV1XM3VdF0M32vtoTdZ0+u29s0OttJ5bz64UwinjaFMVY9vkqc3KKSxN21Xl+0L4Q3Vuv1tYl0pqnX6ms4XetFz7gdZVAgUEoJntfOUe4ZwsHd9FzqQ3Vv6xe41l0XJcqcKl6TZvlv7ClAW3BsqQW4X7ypApB8dmTgK4IX5wvqIVj33HtD2qSG4BqznxdIefL27Y4sahi0MdIdvUsDva8agGGbCtITmCY31MHD2O0uIdh/0rJDQ1VX5Zdxz3rR2QDbv6qXl9vudzqQtGm1Jv9LDXOsfvvB7VcZ8PDKD0mQ1VHPYQ9O+Yj4hR1IUD8rBnn3ho2m8oQMxbCFiKlL2ioSW5heeJqegED52CzxCtcGD3Kv8Wms9EYLyUhwaFIhSMBClevWEmiK/Iaogu4H7sg6ppQhQG8RUqivuTGOAJOg6FfgW0q0M0PQMRMEgXaeNf3SYDZ8PIMI0+wHgr/MgN7wYwpiLjCCqM6ydUDZLQiB6nDdNC8SDyig3jPPpFXGcC9O8BUBDVmgBY59E7Md/35Loe/UVEECEJwYggJjELZ4J71SaQSBeC02n4Da29CayJNA28SAhd2CQyC1Xw6pSmGSINQVuMhAZp4DClan9MgmkDDNmezqwS8sgtlXK/EPBhoaSmYVC/F7IO1jQEdHOlabpKh3+jzLQSTUiq4X2I+Ip/zU8rlaqAvkS21ElR+gqu3zbjjL+hIAiCIAiCIAiCIAiCsCf/AKrfVhSbvA+DAAAAAElFTkSuQmCC"
		}
		this.searchPlayer = this.searchPlayer.bind(this);
	}
	
	componentDidMount(){
		const spinner = document.getElementById("search-loader");
		spinner.style.display = "none";
	}
	
	searchPlayer(event){
		event.preventDefault()
		const spinner = document.getElementById("search-loader");
		spinner.style.display = "inline-block";
		const searchInputArray = document.getElementById("searchInput").value.trim().split(" ");
		if (searchInputArray.length != 2){
			spinner.style.display = "none"
			this.setState(prevState => {
				return {
					loaded: prevState.loaded,
					error: true,
					player: prevState.player,
					playerImg: prevState.playerImg
				}
			})
			console.log(this.state)
		}
		else{
			const firstName = searchInputArray[0].toLowerCase();
			const lastName = searchInputArray[1].toLowerCase();
			const playerImage = "https://nba-players.herokuapp.com/players/" + lastName + "/" + firstName;
			const statsCallUrl = "https://nba-players.herokuapp.com/players-stats/" + lastName + "/" + firstName;
			fetch(statsCallUrl)
				.then(response => response.text())
				.then(response => {
					if(response == "Sorry, that player was not found. Please check the spelling."){
						spinner.style.display = "none"
						this.setState(prevState => {
							return {
								loaded: prevState.loaded,
								error: true,
								player: prevState.player,
								playerImg: prevState.playerImg
							}
						})
					}
					else{
						spinner.style.display = "none"
						this.setState({
			        		loaded: true,
			        		error: false,
			        	    player: JSON.parse(response),
			        	    playerImg: playerImage
			        	})
					}
				})
			/*fetch(statsCallUrl)
		        .then(response => response.json())
		        .then(response => {
		        	spinner.style.display = "none"
		        	this.setState({
		        		loaded: true,
		        		error: false,
		        	    player: response,
		        	    playerImg: playerImage
		        	})
		        	console.log(this.state);
		        	
		        })*/
		}
	}
	
	render(){
		return (
			<div>
				<form onSubmit = {this.searchPlayer} >
					<div className="player-search form-group">
					    <label for="exampleInputEmail1">Player Name</label>
					    <input type="text" className="form-control" id="searchInput" aria-describedby="playerSearcher" placeholder="Enter Player Name"></input>
					    <small id="searchHelp" className="form-text text-muted">Make sure the player name is exact with first-name first. Ex. "Lebron James"</small>
						<div> 
					        <button type="submit" className="search-btn btn btn-primary">Search</button>
						    <div id="search-loader" className="spinner-border" role="status">
							  <span className="sr-only">Loading...</span>
							</div>
							{this.state.error ? <div id="search-alert" class="alert alert-warning" role="alert">
													Are you sure the firstname and lastname were correct?
												  </div> : null
							}
						</div>
					</div>
				</form>
				<div className="search-player-card card">
				  <img id="search-card-image" src={this.state.playerImg} className="card-img-top" alt="..."></img>
				  <ul class="list-group list-group-flush">
				    <li class="list-group-item">Name: {this.state.player.name}</li>
				    <li class="list-group-item">Team: {this.state.player.team_name}</li>
				    <li class="list-group-item">Games Played: {this.state.player.games_played}</li>
				    {this.state.loaded ? <li class="list-group-item"><button onClick={() => {this.props.addPlayer(this.state.player)}} type="button" class="btn btn-success">Add to Compare Page</button></li> : null}
				  </ul>
				</div>
			</div>
		)
	}
	
}

export default Search