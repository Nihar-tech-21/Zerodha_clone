import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5 border-top">
        <h1 className="text-center mt-5">People</h1>
      </div>
      <div className="row p-5 text-muted">
        <div className="col-6 p-5 text-center">
          <img
            src="/media/images/MyImage.jpeg"
            alt="founder"
            style={{
              borderRadius: "100%",
              width: "70%",
              filter: "brightness(1.25) contrast(1.1) saturate(1.2)",
            }}
          />
          <h4 className="mt-5 pt-3 pb-2">Niharika Dhaka</h4>
          <h6>Developer & Creator</h6>
          <h6>MERN Stack Developer, Software Engineer</h6>
        </div>
        <div
          className="col-6 p-5"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <p>
            Hi, I’m <strong>Niharika</strong> — an aspiring Software Engineer
            passionate about building clean, efficient, and user-focused web
            applications. This <strong>Zerodha Clone</strong> project is a
            full-stack recreation of the Zerodha trading platform, developed to
            strengthen my understanding of modern web technologies and
            responsive UI design.
          </p>
          <p>
            The project replicates the look and feel of the original platform
            while focusing on scalability, reusability, and performance. It was
            built using React.js for the frontend and styled with modern CSS
            frameworks.
          </p>
          <p>
            I’m a developer fueled by curiosity and the desire to create
            meaningful digital experiences. Every project I build is a step
            toward mastering the art of clean code, smart design, and real-world
            problem solving. My goal is to evolve into a developer who not only
            writes code but also crafts solutions that make an impact.
          </p>
          <p>
            Connect with me:{" "}
            <a
              href="https://www.linkedin.com/in/niharika-dhaka/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/Nihar-tech-21"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
