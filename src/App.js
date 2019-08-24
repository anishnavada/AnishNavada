import React from 'react';
import 'bootstrap';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import PlayerCompareApp from "./PlayerCompareComponents/PlayerCompareApp"
import AboutMeApp from "./AboutMeComponents/AboutMeApp"

class App extends React.Component{
	render(){
		return (
			<Router>
				<Switch>
						<Route path="/PlayerCompare" component={PlayerCompareApp} />
						<Route path="/AnishNavada" component={AboutMeApp} />
						<Route path="/" component = {AboutMeApp} />
				</Switch>
			</Router>
		)
	}
}

export default App;
