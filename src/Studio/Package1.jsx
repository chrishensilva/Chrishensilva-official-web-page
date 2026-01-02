import "./pkg.css";

function Package1() {
  return (
    <>
      <div className="pkg-wrapper">
        <div className="pkg1-head">
          <h1>Select Your Package</h1>
        </div>

        {/* Flex container for side-by-side layout */}
        <div className="pkg-content">
          <div className="pkg-body">
            <h1>Cover Songs</h1>
            <div className="pkg-description">
              <p>Music Composition</p>
              <p>Mixing & Mastering</p>
              <p>Stems provide</p>
              <p>Audio Recording(Partner studio)</p>
              <p>HD quality export</p>
              <p>Unlimited corrections</p>
            </div>
          </div>

          <div className="pkg-book">
            <h1>20,000 LKR</h1>
            <button>Book the Session</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package1;
