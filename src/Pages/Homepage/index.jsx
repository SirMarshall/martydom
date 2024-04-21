import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    alert("Don't give random sketchy ass websites your e-mail.");
    navigate("/articles");
  };

  const handleNoThanksClick = () => {
    alert("Good! you shouldn't give random sketchy websites your e-mail..");
    navigate("/articles");
  };

  return (
    <>
      <div id="oath-background">
        <div className="col-10 col-md-8 col-lg-4 pixel-corners" id="card">
          <div className="text-center" id="card-header">
            <h1>Oath of The Martyr</h1>
          </div>
          <div className="text-wrap" id="card-body">
            <p>Hello, indulgent browsers. Welcome, to my Magnum Opus.</p>
            <p>
              I do strictly intend to keep this as an <strong>anonymous</strong>{" "}
              op-ed blog, but I will be sharing my thoughts on various topics,
              and encroaching with absolute bluntness on the most controversial
              of subjects. You will find the breadth of these documents below,
              others will come in time.
            </p>
            <div className="d-flex align-content-center" id="typical-form">
              <form>
                <p>Stay updated with new articles?</p>
                <input
                  placeholder="Enter your email"
                />
                <button type="submit" onClick={handleSubscribeClick}>
                  Subscribe
                </button>{" "}
                <button type="submit" onClick={handleNoThanksClick}>
                  No Thanks
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}