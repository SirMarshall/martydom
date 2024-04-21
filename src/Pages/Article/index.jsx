import "./index.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";

export default function Article() {
  const { title } = useParams();
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetch("https://martyrdom.info/server/getArticles.php")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const article = articles.find(article => article.title === title);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div id="background" className="d-flex flex-column justify-content-start">
      <Navbar title={article.title}/>
      <div id="article-drawer" className="col-12 d-flex flex-column justify-content-start">
        {article.content}
      </div>
    </div>
  );
}