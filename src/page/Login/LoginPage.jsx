import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import Cookies from 'js-cookie';

function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const [loginMail, setLoginMail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [redirect, setRedirect] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
        .then(() => {
          console.log("New User added");
          setRedirect(true);
        })
        .catch((error) => {
          console.error("Error registering user:", error);
        });
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    const user = { email: loginMail, password: loginPassword };
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
        .then(response => {
          if (!response.ok) {
            throw new Error('Invalid email or password');
          }
          return response.json();
        })
        .then(data => {
          Cookies.set('sessionCookie', data.user.name, { expires: 1 });
          console.log("Login successful:", data);
          setRedirect(true);
        })
        .catch(error => {
          console.error("Error logging in:", error.message);
          setLoginError(error.message);
        });
  };


  useEffect(()=>{
    fetch("http://localhost:5173/api/login")
        .then((res) => res.json())
        .then((result) => {
          setUsers(result);
        });
  }, []);

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
            <input id="name" type="text" placeholder="Name" value={name}
                   onChange={(e)=>setName(e.target.value)} />
            <input id="email" type="email" placeholder="Email" value={email}
                   onChange={(e)=>setEmail(e.target.value)} />
            <input id="password" type="password" placeholder="Password" value={password}
                   onChange={(e) => setPassword(e.target.value)} />
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
            <div className="error-message">{loginError}</div>
            <input type="email" placeholder="Email" value={loginMail}
                   onChange={(e) => setLoginMail(e.target.value)} />
            <input type="password" placeholder="Password" value={loginPassword}
                   onChange={(e) => setLoginPassword(e.target.value)} />
            <a href="#">Forget Your Password?</a>
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
      </div>
  );
}

export default LoginForm;