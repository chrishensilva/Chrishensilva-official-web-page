import "./card.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  return (
    <>
      <div className="card">
        <div className="card1">
          <h1>Covers</h1>
          <p className="card-desc">
            Recommended for those who like to do covers
          </p>
          <div className="description">
            <p>Music Composition</p>
            <p>Mixing & Mastering</p>
            <p>Stems provide</p>
            <p>Audio Recording(Partner studio)</p>
            <p>HD quality export</p>
            <p>Unlimited corrections</p>
            <div className="price">
              <h1>20,000 LKR</h1>
            </div>
            <Link to="/package1">
              <button className="select">Select</button>
            </Link>
          </div>
        </div>
        <div className="card2">
          <h1>Originals</h1>
          <p className="card-desc">
            Recommended for those who like to do Originals
          </p>
          <div className="description">
            <p>Music Composition</p>
            <p>Mixing & Mastering</p>
            <p>Stems provide</p>
            <p>Live Instruments (if needed)</p>
            <p>HD quality export</p>
            <p>Unlimited corrections</p>
            <div className="price">
              <h1>40,000+ LKR</h1>
            </div>

            <button className="select">Select</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
