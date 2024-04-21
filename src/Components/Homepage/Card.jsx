import "./index.css";

export default function Card({ title, body }) {
    return (
        <>
            <div id="background">
                <div className="col-10 col-md-8 col-lg-4 pixel-corners" id="card">
                    <div className="text-center" id="card-header">
                        {title}
                    </div>
                    <div className="text-wrap" id="card-body">
                        {body}
                    </div>
                </div>
            </div>
        </>
    );
}
