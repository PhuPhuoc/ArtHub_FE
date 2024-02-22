import React from "react";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required></input>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}