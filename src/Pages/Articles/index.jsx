import "./index.css";
import Article from "../../Components/Articles/index.jsx";
import Navbar from "../../Components/Navbar/index.jsx";
import { useEffect, useState } from "react";

export default function Articles() {

    //Fetch martyrydom.info/server/getArticles.php with a get request
    //Set the response to the articles state
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch("https://martyrdom.info/server/getArticles.php")
            .then((response) => response.json())
            .then((data) => setArticles(data));
    }, []);
    return (
        <div id="background" className="d-flex flex-column justify-content-start">
           <Navbar title="Articles" />
            <div id="article-drawer" className="col-12 d-flex flex-column justify-content-start">
                {articles.map((article, index) => (
                    <Article
                        key={index}
                        graphic={<img src={article.graphic} alt="Article graphic" />}
                        title={article.title}
                        subtitle={article.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}
