import React from 'react';
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Footer from "./footer.jsx";



const Home = () => {
	return (
		<>
		<Navbar/>
		


		<div className="container-fluid" style={{paddingTop: '50px'}} > 
			<Jumbotron/>
		
			<div className="row" style={{padding: '170px'}}>
				<div className="col-3" > <Card/>  </div>
				<div className="col-3" > <Card/>  </div>
				<div className="col-3"> <Card/>  </div>
				<div className="col-3"> <Card/>  </div>

			</div>

			<Footer/>
			

		
		
		
		</div>


	

		
		</>
		

	
	);
};

export default Home;
