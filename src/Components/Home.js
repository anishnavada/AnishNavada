import React from 'react';
import '../Styles.css';


class Home extends React.Component{
	render(){
		return (
			<div className="home-body">
				<img className="my-image" src={require('../images/AnishNavada.jpg')}></img>
			</div>
		)
	}
}

export default Home;
