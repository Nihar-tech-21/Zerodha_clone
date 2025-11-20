import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3 mb-5 pt-5">
      <div className="row mt-5 pb-5">
        <div className="col-6">
          <img src={imageURL} alt="product" />
        </div>
        <div className="col-6">
          <h1>{productName}</h1>
          <p className="text-muted mt-3" style={{ width: "75%" }}>
            {productDescription}
          </p>
          <div className="mt-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "10%", textDecoration: "none" }}
            >
              Learn More <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="googlePlayBadge"
              />
            </a>
            <a href={appStore} style={{ marginLeft: "5%" }}>
              <img src="media/images/appStoreBadge.svg" alt="appStoreBadge" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
