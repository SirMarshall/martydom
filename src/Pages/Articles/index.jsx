import "./index.css";
import Article from "../../Components/Article";

export default function Articles() {
  return (
    <div id="background" className="d-flex flex-column justify-content-start">
      <div id="navbar" className="d-flex justify-content-between col-12">
        <a href="../">
          <h1>{"<"}</h1>
        </a>
        <h1>Articles</h1>
      </div>
      <div
        id="article-drawer"
        className="col-12 d-flex flex-column justify-content-start"
      >
        <Article
          graphic={<img src="https://via.placeholder.com/150" />}
          title="Article Title"
          subtitle="Article Subtitle"
        />
        <Article
          graphic={<img src="https://via.placeholder.com/150" />}
          title="Article Title"
          subtitle="Article Subtitle"
        />
        <Article
          graphic={<img src="https://via.placeholder.com/150" />}
          title="Article Title"
          subtitle="Article Subtitle"
        />
      </div>
    </div>
  );
}
