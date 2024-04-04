import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import Cookies from "js-cookie";
import {message, Modal} from "antd";
import axios from "axios";

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [redirect, setRedirect] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const [redirectSignIn, setRedirectSignIn] = useState(false);
  const [redirectAdmin, setRedirectAdmin] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [mailReset, setMailReset] = useState("");

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Mail already registered");
        }
        return response.json();
      })
      .then(() => {
        setRedirectSignIn(true);
      })
      .catch((error) => {
        console.error("Mail already registerd:", error.message);
        setRegisterError(error.message);
        throw new Error("Mail already registered");
      });
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    const user = { email: loginMail, password: loginPassword };
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid email or password");
        }
        return response.json();
      })
      .then((data) => {
        Cookies.set("sessionCookie", data.user._id, { expires: 1 });
        sessionStorage.setItem("userId", data);
        sessionStorage.setItem("admin", data.admin);
        console.log("Login successful:", data);
        if (data.admin === true) {
          setRedirectAdmin(true);
        } else setRedirect(true);
      })
      .catch((error) => {
        console.error("Error logging in:", error.message);
        setLoginError(error.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5173/api/login")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const handleResetPasswordClick = () => {
    setShowModal(true);
  };

  const handleSendClick = () => {
    console.log("Email content:", mailReset);
    axios
      .post("http://localhost:5000/api/send", {
        mail: mailReset,
      })
      .then((response) => {
        console.log("Email sent successfully:", response.data);
        message.success('Email sent successfully')
      })
      .catch((err) => {
        console.log("Error sending email:", err);
      });
  };

  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    const handleRegisterClick = (event) => {
      event.preventDefault(); // Prevent default form submission behavior
      container.classList.add("active");
    };

    const handleLoginClick = () => {
      container.classList.remove("active");
    };

    registerBtn.addEventListener("click", handleRegisterClick);
    loginBtn.addEventListener("click", handleLoginClick);

    return () => {
      registerBtn.removeEventListener("click", handleRegisterClick);
      loginBtn.removeEventListener("click", handleLoginClick);
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      window.location.href = "http://localhost:5173";
    }
  }, [redirect]);

  useEffect(() => {
    if (redirectSignIn) {
      window.location.href = "http://localhost:5173/loginpage";
    }
  }, [redirectSignIn]);

  useEffect(() => {
    if (redirectAdmin) {
      window.location.href = "http://localhost:5173/admin";
    }
  }, [redirectAdmin]);

  return (
    <div className="container" id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <div className="error-message">{registerError}</div>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegisterClick}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <div className="error-message" style={{ color: 'red' }}>{loginError}</div>
          <input
            type="email"
            placeholder="Email"
            value={loginMail}
            onChange={(e) => setLoginMail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <p onClick={handleResetPasswordClick}>Forget Your Password?</p>
          <button onClick={handleLoginClick}>Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login">
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" id="register">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <Modal
        open={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <p>We will send you a new password by e-mail.</p>
          <p>Enter your email :</p>
          <input
            type="email"
            onChange={(text) => setMailReset(text.target.value)}
            placeholder={"Your email"}
            value={mailReset}
            style={{
              padding: 5,
              border: "none",
              borderRadius: 5,
              backgroundColor: "whitesmoke",
              margin: 10,
              width: 250,
            }}
          />
          <button
            onClick={handleSendClick}
            style={{
              backgroundColor: "#512da8",
              color: "white",
              padding: 5,
              borderRadius: 5,
            }}
          >
            Send
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default LoginForm;
