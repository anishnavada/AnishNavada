import React from 'react';
import '../Styles.css';


class Education extends React.Component{
	render(){
		return (
			<div>
				<h3 className="project-title section-title">My Education</h3>
			
				<div className="card mb-3" >
				  <div className="row no-gutters">
				    <div className="col-md-4">
				      <img src={require('../images/BronxScience.jpg')} className="card-img education-image" alt="..."></img>
				    </div>
				    <div className="col-md-8">
				      <div className="card-body">
				        <p className="educTitle card-text">The Bronx High School of Science</p>
				        <p className="educGPA">GPA: 95.44/100</p>
				        <p className="eduText">Important Classes: Introduction to Python and Web Programming, AP Computer Science, Introduction to Game Programming with Unity</p>
				      </div>
				    </div>
				  </div>
				  </div>
				  
				  
				 <div className="card mb-3" >
					  <div className="row no-gutters">
					    <div className="col-md-4">
					      <img src={require('../images/Cornell.jpg')} className="card-img education-image" alt="..."></img>
					    </div>
					    <div className="col-md-8">
					      <div className="card-body">
					     <p className="educTitle card-text">Cornell University</p>
					        <p className="educGPA">Current GPA: 3.7</p>
					        <p className="educGPA">Bachelor of Science: Computer Science</p>
					        <p className="eduText">Important Classes: Introduction to Object Oriented Programming and Data Structures, Functional Programming, Discrete Structures</p>
					      </div>
					    </div>
					  </div>
				  </div>
			</div>
		)
	}
}

export default Education;
