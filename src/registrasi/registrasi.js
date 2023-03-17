import React from "react";
import "./registrasi.css";

export default function Registrasi() {
  return (
    <div class="registrasi-box">
      <h2>Registrasi</h2>
      <form>
        <label>Nama:</label>
        <input type="text" name="nama" placeholder="Masukan Nama Lengkap" required />

        <label>Username:</label>
        <input type="text" name="username" placeholder="Masukan Username " required />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Masukan Password" required />

        <input type="submit" value="Registrasi" />
      </form>
    </div>
  );
}
