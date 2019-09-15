import React from 'react';
import '../Styles.css';


class Experiences extends React.Component{
	render(){
		return (
			<div>
				<h3 className="project-title section-title">My Experiences</h3>
				
				<div className="card mb-3" >
					  <div className="row no-gutters">
					    <div className="col-md-4">
					      <img src={require('../images/INSPIRAVE.png')} className="card-img education-image" alt="..."></img>
					    </div>
					    <div className="col-md-8">
					      <div className="card-body">
					        <p className="educTitle card-text">Software Engineering Intern at InSpirAVE</p>
					        <p className="educGPA">2019</p>
					        <p className="eduText">-Used Google's People API to allow users to easily add their Google contacts to InSpirAVE's platform.<br></br>
													- Allowed users to search for products with URLs from Amazon/Bestbuy/Walmart. Used Jsoup on Java
													to web-scrape product information so that InSpirAVE's tools could be used on them.<br></br>
													- Made many design changes and bug fixes primarily using JavaScript and Html/CSS.<br></br>
													- Documented the completion and progress of tasks on Open-Project. </p>
					      </div>
					    </div>
					  </div>
				  </div>
				 
				 
					<div className="card mb-3" >
					  <div className="row no-gutters">
					    <div className="col-md-4">
					      <img src={require('../images/NYSCI.jpg')} className="card-img education-image" alt="..."></img>
					    </div>
					    <div className="col-md-8">
					      <div className="card-body">
					        <p className="educTitle card-text">Explainer at The New York Hall of Science</p>
					        <p className="educGPA">2016-2018</p>
					        <p className="eduText">-Certified to give demonstrations on chemistry and the science of flight to museum visitors.<br></br>
													- Explained the exhibits to visitors of all ages, and taught young children.<br></br>
													- Presented at and helped visitors during several Hall of Science events, such as the World Maker Faire.<br></br>
													- Helped run coding workshops for elementary and middle school students</p>
					      </div>
					    </div>
					  </div>
				  </div>
				  
				<div className="card mb-3" >
					  <div className="row no-gutters">
					    <div className="col-md-4">
					      <img src={require('../images/SACSS.png')} className="card-img education-image" alt="..."></img>
					    </div>
					    <div className="col-md-8">
					      <div className="card-body">
					         <p className="educTitle card-text">Daily Operations Intern at South Asian Council for Social Services</p>
					        <p className="educGPA">2017</p>
					        <p className="eduText">- Informed community about elections through phone banking.<br></br>
													- Created posters and presentations for community events.<br></br>
													- Helped organize annual fundraising event (SACSS Gala).</p>
					      </div>
					    </div>
					  </div>
				  </div>
			</div>
		)
	}
}

export default Experiences;
