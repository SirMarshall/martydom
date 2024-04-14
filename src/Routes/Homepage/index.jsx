import Navbar from "../../Components/Navbar";
import "./index.css";

export default function Homepage() {
	return (
		<>
			<Navbar />
			<div className="container-fluid" id="background">
				<div id="card" className="shadow-lg d-flex-inline">
					<div className="d-flex row" id="card-heading">
						<h1>MARTYRDOM</h1>
					</div>
					<div id="card-body" className="d-flex-inline justify-content-center">
						<div id="card-description">
							<p>
								Are you ready to die for what you believe in?
							</p>
						</div>
						<div id="card-buttons" className="d-flex justify-content-evenly">
							<button type="button" id="card-button">
								Yes
							</button>
							<button id="card-button">
								No
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
