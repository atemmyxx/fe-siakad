import React from "react";
import './login.css'


export default function Login() {
  return (
    <div class="login-box">
      <h2>Login Here</h2>
      <form>
        <label>Username:</label>

        <input type="text" name="username" placeholder="Masukkan Username" required />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Masukkan Password" required />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
