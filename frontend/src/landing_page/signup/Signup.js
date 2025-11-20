import React, { useState } from "react";
import api from "../../api";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const res = await api.post("/signup", formData, {
        withCredentials: true,
      });
      alert(res.data.message);

      // If signup is successful, redirect to dashboard
      if (res.status >= 200 && res.status < 300) {
        window.location.href = process.env.REACT_APP_DASHBOARD_URL;
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
      console.error(error);
    }
  };

  return (
    <form
      className="container mt-5 pt-3 text-center mb-5 pb-5"
      onSubmit={handleSubmit}
    >
      <h1>Signup To Zerodha</h1>
      <div class="mb-3 mt-5 col-6 mx-auto">
        <label for="exampleInputUsername" class="form-label fs-5 fw-semibold">
          Username
        </label>
        <input
          type="text"
          name="username"
          class="form-control"
          id="exampleInputUsername"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3 col-6 mx-auto">
        <label for="exampleInputEmail1" class="form-label fs-5 fw-semibold">
          Email address
        </label>
        <input
          type="email"
          name="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleChange}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3 col-6 mx-auto">
        <label for="exampleInputPassword1" class="form-label fs-5 fw-semibold">
          Password
        </label>
        <input
          type="password"
          name="password"
          class="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-lg mt-5 d-grid gap-2 col-3 mx-auto"
      >
        Submit
      </button>
    </form>
  );
}

export default Signup;
