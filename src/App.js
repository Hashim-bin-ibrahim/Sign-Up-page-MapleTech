import React, { useEffect, useState } from "react";
import "./App.css"; // Make sure to create this CSS file

function App() {
  // State to store the input values
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [formValid, setFormValid] = useState(false);

  // Checking if there s any error
  useEffect(() => {
    const validateForm = () => {
      const newErrors = {};
      // Name validtion
      if (!userDetails.name) {
        newErrors.name = "Name is required.";
      } else if (userDetails.name.length < 4 || userDetails.name.length > 20) {
        newErrors.name = "Name must be between 4 and 20 characters.";
      }

      // Email validation
      if (!userDetails.email) {
        newErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
        newErrors.email = "Email address is invalid.";
      }

      // Password validation
      if (!userDetails.password) {
        newErrors.password = "Password is required.";
      } else if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
          userDetails.password
        )
      ) {
        newErrors.password =
          "Password must contain at least one uppercase letter, one number, and one special character.";
      }

      setErrors(newErrors);
      setFormValid(Object.keys(newErrors).length === 0);
    };

    validateForm();
  }, [userDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <div className="signup-container">
      <div className="left-side">
        <div className="left_container">
          <img
            src="../../imges/diprella_logo.png"
            alt="Company Logo"
            className="company-logo"
          />
          <div className="welcome-container">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please <br></br> login with your
              personal info
            </p>
            <button className="signIn">SIGN IN</button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h2 className="create_account_txt">Create Account</h2>
        <div className="social-logins">
          <img src="../../imges/facebook.png" alt="Facebook" />
          <img src="../../imges/google.png" alt="Google" />
          <img src="../../imges/linkedin.png" alt="LinkedIn" />
        </div>
        <div>
          <p style={{ color: "#bcb5b5" }}>
            {" "}
            or use your email for registration.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <img src="../../imges/person.png" />
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  required
                  minLength="4"
                  maxLength="20"
                />
                {errors?.name && <p className="error">{errors?.name}</p>}
              </div>
            </div>
            <div className="input">
              <img src="../../imges/email.png" />
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
            <div className="input">
              <img src="../../imges/password.png" />
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={userDetails.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
            </div>
          </div>
          <div className="submitContainer">
            <button
              className={`${!formValid ? "disabled" : "submit"}`}
              type="submit"
              disabled={!formValid}
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
