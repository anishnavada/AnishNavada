import React from 'react';
import './Styles.css';
import Navbar from './Components/Navbar'
import Experiences from './Components/Experiences'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Education from './Components/Education'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component{
	render(){
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route path="/Experiences" component={Experiences} /> 
						<Route path="/Projects" component={Projects} /> 
						<Route path="/Education" component={Education} /> 
						<Route path="/" component={Home} /> 
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;
