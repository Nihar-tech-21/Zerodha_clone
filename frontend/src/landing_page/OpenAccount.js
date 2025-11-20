import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a Zerodha account</h1>
        <p className="mb-4">
          Modern platforms and apps, &#8377;0 investments, and flat &#8377;20
          intraday and F&O trades.
        </p>
        <Link
          to="/signup"
          className="btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
