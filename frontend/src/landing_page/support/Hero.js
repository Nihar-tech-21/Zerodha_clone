import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="fs-5">
          Track Tickets
        </a>
      </div>
      <div className="row p-4 mb-5">
        <div className="col-6 mb-5 pb-3" id="searchDiv">
          <h1
            className="fs-4 mb-3"
            style={{ marginLeft: "32%", lineHeight: "2.2rem" }}
          >
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            className="p-3 rounded text-center"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
            style={{
              marginLeft: "32%",
              width: "70%",
              height: "35%",
              border: "none",
            }}
          />
          <br />
          <div className="mt-3" style={{ marginLeft: "32%" }}>
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user mannual</a>
          </div>
        </div>
        <div className="col-6 mb-5 pb-3">
          <h1
            className="fs-4"
            style={{ marginLeft: "20%", lineHeight: "2.2rem" }}
          >
            Featured
          </h1>
          <ol style={{ marginLeft: "20%" }}>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li className="mt-3">
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
