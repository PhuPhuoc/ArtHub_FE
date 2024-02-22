// Import necessary libraries
import React, { useState } from 'react';
import 'LoginPage.css'; 


// Define the Login component
const Login = () => {
    // State variables to manage the active panel
    const [activePanel, setActivePanel] = useState('sign-in');

    // Function to toggle between sign-up and sign-in panels
    const togglePanel = () => {
        setActivePanel(activePanel === 'sign-in' ? 'sign-up' : 'sign-in');
    };

    return (
        <div className="container" id="container">
            <div className={`form-container ${activePanel}`}>
                {activePanel === 'sign-up' ? (
                    <SignUpForm togglePanel={togglePanel} />
                ) : (
                    <SignInForm togglePanel={togglePanel} />
                )}
            </div>
            <ToggleContainer activePanel={activePanel} />
        </div>
    );
};

// SignUpForm component
const SignUpForm = ({ togglePanel }) => {
    return (
        <form>
            <h1>Create Account</h1>
            <div className="social-icons">
                {/* Social icons */}
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
        </form>
    );
};

// SignInForm component
const SignInForm = ({ togglePanel }) => {
    return (
        <form>
            <h1>Sign In</h1>
            <div className="social-icons">
                {/* Social icons */}
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
        </form>
    );
};

// ToggleContainer component
const ToggleContainer = ({ activePanel }) => {
    return (
        <div className="toggle-container">
            <div className="toggle">
                <div className={`toggle-panel toggle-left ${activePanel === 'sign-in' ? 'active' : ''}`}>
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all site features</p>
                    <button className="hidden" onClick={() => togglePanel()}>Sign In</button>
                </div>
                <div className={`toggle-panel toggle-right ${activePanel === 'sign-up' ? 'active' : ''}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all site features</p>
                    <button className="hidden" onClick={() => togglePanel()}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

// Export the Login component
export default Login;
