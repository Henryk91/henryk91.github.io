import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let valid = true;
    setError("");
    if (!name) {
      setError("Name required");
      valid = false;
    }
    if (!email) {
      setError("Email required");
      valid = false;
    } else if (email.indexOf("@") < 0) {
      setError("Valid email required");
      valid = false;
    }
    if (!msg) {
      setError("Message required");
      valid = false;
    }
    if (!valid) return;

    setLoading(true);
    try {
      const res = await fetch("https://note.henryk.co.za/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          board: "t4",
          email,
          text: `${name}\n${email}\n${msg}`,
          delete_password: "1234"
        })
      });
      setLoading(false);
      if (res.ok) {
        alert("Message Sent. I will be in touch asap.");
        setName("");
        setEmail("");
        setMsg("");
        navigate("/");
      } else {
        setError("Failed to send. Try again.");
      }
    } catch (e) {
      setLoading(false);
      setError("Failed to send. Try again.");
    }
  }

  return (
    <div className="pageCont" id="contact">
      <div className="contactCont">
        <h1>Contact</h1>
        <p>
          If you have any questions, queries or ideas for <br />
          a project please fill out below or send an email to{" "}
          <a href="mailto:mail@henryk.co.za" id="mail-link">mail@henryk.co.za</a>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            id="inputName"
            type="text"
            placeholder="Name..."
            value={name}
            onChange={e => setName(e.target.value)}
          /><br />
          <input
            id="inputEmail"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          /><br />
          <textarea
            id="inputMsg"
            placeholder="Message..."
            value={msg}
            onChange={e => setMsg(e.target.value)}
          ></textarea><br />
          <button id="inputBut" type="submit" disabled={loading} style={{ cursor: "pointer" }}>
            Send
          </button>
        </form>
        {error && <div style={{ color: "#ff8787", marginTop: 8 }}>{error}</div>}
        <div id="loader" style={{ display: loading ? "flex" : "none" }}></div>
      </div>
      <br />
    </div>
  );
}
