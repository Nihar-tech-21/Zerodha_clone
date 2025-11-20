import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5 p-3 text-center">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p className="mt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row mt-5">
          <div className="col-4 p-3">
            <img
              style={{ width: "45%" }}
              src="media/images/smallcaseLogo.png"
            />
            <p className="mt-3 text-muted">Thematic investment platform</p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "40%" }} src="media/images/streakLogo.png" />
            <p className="mt-3 text-muted">Algo & strategy platform</p>
          </div>
          <div className="col-4 p-3">
            <img
              style={{ width: "40%" }}
              src="media/images/sensibullLogo.svg"
            />
            <p className="mt-3 text-muted">Options trading platform</p>
          </div>
        </div>
        <div className="row mb-5 mt-5">
          <div className="col-4 p-3">
            <img
              style={{ width: "45%" }}
              src="media\images\zerodhaFundhouse.png"
            />
            <p className="mt-3 text-muted">Asset management</p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "45%" }} src="media\images\goldenpiLogo.png" />
            <p className="mt-3 text-muted">Bonds trading platform</p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "30%" }} src="media\images\dittoLogo.png" />
            <p className="mt-3 text-muted">Insurance</p>
          </div>
        </div>
      </div>
      <button className="btn btn-primary mb-3" style={{ width: "14%" }}>
        Sign up Now
      </button>
    </div>
  );
}

export default Universe;
