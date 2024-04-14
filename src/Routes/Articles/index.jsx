export default function Articles() {
	const items = [
		{ icon: "bi bi-cpu", label: "Technology" },
		{ icon: "bi bi-cookie", label: "Data" },
		{ icon: "bi bi-vinyl", label: "Music" },
		{ icon: "bi bi-bug", label: "Science" },
		{ icon: "bi bi-lightning", label: "Religion" },
		// add more items here
	];

	return (
		<>
			<div className="container-fluid" id="background">
				<div id="index" className="card">
					<div className="card-header">
						<h1>PROCLOMATIONS OF AMOS</h1>
					</div>
					<div className="card-body" id="index-body">
						{items.map((item, index) => (
							<div key={index}>
								<i className={item.icon}></i>
								<label>{item.label}</label>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}