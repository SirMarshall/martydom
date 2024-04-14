import Navbar from "../../Components/Navbar";
import "./index.css";

export default function Homepage() {
	return (
		<>
			<Navbar />
			<div className="container-fluid" id="background">
				<div id="index" className="card">
					<div className="card-header">
						<h1>OATH OF THE MARTYR</h1>
					</div>
					<div className="card-body">
						<p>Are you willing to die for your beliefs?</p>
					</div>
					<div className="card-footer d-flex justify-content-evenly">
						<a href="/articles"><button type="button" >
							Yes
						</button></a>
						<button type="button" >
							No
						</button>
						
					</div>
				</div>
			</div>
		</>
	);
}
