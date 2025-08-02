import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { resetPassword } from "../../services/authService";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const res = await resetPassword({ token, newPassword });
      setMessage(res.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="h2">Reset Your Password</h2>
        <input
          className="input"
          type="password"
          placeholder="New Password"
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="button" type="submit" disabled={loading}>
          {loading ? (
            <>
              Resetting... <span className="spinner"></span>
            </>
          ) : (
            "Reset Password"
          )}
        </button>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
