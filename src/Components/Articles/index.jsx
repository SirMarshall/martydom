import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Article({ graphic, title, subtitle }) {
	const navigate = useNavigate();

	const viewArticle = () => {
		navigate('/articles/' + title);
	};

	return (
		<div id="article" className="pixel-corners d-flex flex-row align-content-start justify-content-start pixel-border">
			<div id="article-graphic" onClick={(viewArticle)}>
				{graphic}
			</div>
			<div id="article-copy">
				<div id="article-title">
					<h1>{title}</h1>
				</div>
				<div id="article-subtitle">
					<p>{subtitle}</p>
				</div>
			</div>
		</div>
	);
}