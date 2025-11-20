import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-3 mb-5 pt-5">
      <div className="row mt-5 pb-5">
        <div className="col-6 mt-5 pt-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-3" style={{ width: "75%" }}>
            {productDescription}
          </p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More <i class="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="product" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
