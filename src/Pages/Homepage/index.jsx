import "./index.css";
//Bootstrap 5.3.0

export default function Homepage() {
  return (
    <>
      <div id="background">
        <div className="pixel-corners" id="card">
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
            <div className="text-center" id="typical-form">
              <form>
                <label htmlFor="email">Stay updated with new articles:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <button type="submit" onClick={() => alert("Fucking idiot! Don't give random sketchy ass websites your e-mail.")}>
                  Subscribe
                </button>{" "}
				<button type="submit" onClick={() => alert("Finally, someone intelligent.")}>
                  No Thanks
                </button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
