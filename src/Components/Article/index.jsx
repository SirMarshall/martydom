import "./index.css";

export default function Article({ graphic, title, subtitle }) {
  return (
    <div
      id="article"
      className="d-flex flex-row align-content-start justify-content-start pixel-border"
    >
      <div id="article-graphic">
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