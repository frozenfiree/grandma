import React, { useState } from "react";
import "./contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "success" | "error" | ""
  const [statusMsg, setStatusMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name:    !formData.name.trim(),
      email:   !formData.email.trim(),
      company: !formData.company.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);
    if (Object.values(newErrors).includes(true)) return;

    setIsSubmitting(true);
    setStatus("");
    setStatusMsg("");

    try {
      const response = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Safely parse — server might return HTML on proxy/network errors
      const text = await response.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {
        // Non-JSON response (HTML error page, Vercel 404, etc.)
        throw new Error(`Server error (${response.status}). Please try again.`);
      }

      if (!response.ok) {
        throw new Error(data.error || `Request failed (${response.status}).`);
      }

      setClicked(true);
      setStatus("success");
      setStatusMsg("Message sent! We'll be in touch within 1–2 business days.");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
      setErrors({});

    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">

          {/* LEFT */}
          <div className="left">
            <div className="dot"></div>
            <h1>LET'S <br /> TALK.</h1>
            <p>
              Tell us about your project, your timeline,
              how you heard about us, and where you're located.
            </p>
          </div>

          {/* RIGHT */}
          <div className="right">
            <form onSubmit={handleSubmit} noValidate>

              <div className="field">
                <label className={errors.name ? "error-label shake" : ""}>NAME *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  disabled={isSubmitting}
                />
              </div>

              <div className="field">
                <label className={errors.email ? "error-label shake" : ""}>EMAIL *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  disabled={isSubmitting}
                />
              </div>

              <div className="field">
                <label>PHONE</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                  disabled={isSubmitting}
                />
              </div>

              <div className="field">
                <label className={errors.company ? "error-label shake" : ""}>COMPANY *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder=" "
                  disabled={isSubmitting}
                />
              </div>

              <div className="field">
                <label className={errors.message ? "error-label shake" : ""}>MESSAGE *</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${clicked ? "active" : ""}`}
                disabled={isSubmitting}
                aria-label="Submit"
              >
                {isSubmitting ? (
                  <span className="spinner"></span>
                ) : (
                  "→"
                )}
              </button>

              {status === "success" && (
                <p className="submit-status success-msg">{statusMsg}</p>
              )}
              {status === "error" && (
                <p className="submit-status error-msg">{statusMsg}</p>
              )}

            </form>
          </div>

        </div>
      </div>

      <style>{`
        .submit-btn {
          width: 70px;
          height: 70px;
          border: none;
          background: #000;
          color: #dfff00;
          font-size: 48px;
          cursor: pointer;
          margin-top: 0px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s ease;
        }

        .submit-btn.active {
          background: #dfff00;
          color: #000;
        }

        .submit-btn:hover {
          transform: scale(1.05);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Loading spinner */
        .spinner {
          width: 22px;
          height: 22px;
          border: 3px solid #dfff00;
          border-top-color: transparent;
          border-radius: 50%;
          display: inline-block;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Status messages */
        .submit-status {
          margin-top: 16px;
          font-size: 14px;
          font-weight: 600;
        }

        .success-msg { color: #1a7a1a; }
        .error-msg   { color: #cc0000; }

        /* Input styles */
        input, textarea {
          font-size: 18px;
          font-weight: 400;
          transition: all 0.25s ease;
          border: none;
          outline: none;
          width: 100%;
          background: transparent;
        }

        input:focus,
        textarea:focus,
        input:not(:placeholder-shown),
        textarea:not(:placeholder-shown) {
          font-size: 20px;
          font-weight: 700;
        }

        input:disabled,
        textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Error label */
        .error-label {
          color: #ff0000 !important;
          transition: 0.3s ease;
          display: inline-block;
          animation: shake 0.3s ease;
        }

        .shake {
          display: inline-block;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%   { transform: translateX(0); }
          25%  { transform: translateX(-4px); }
          50%  { transform: translateX(4px); }
          75%  { transform: translateX(-4px); }
          100% { transform: translateX(0); }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .container { padding: 0px 20px !important; }

          .content {
            display: flex !important;
            flex-direction: column !important;
            gap: 50px !important;
          }

          .left { width: 100% !important; text-align: left; }

          .left h1 {
            font-size: 52px !important;
            line-height: 0.95;
            margin-bottom: 20px;
            margin-left: 0px;
          }

          .left p {
            font-size: 18px !important;
            max-width: 100%;
            line-height: 1.5;
            margin-left: 0px;
          }

          .dot { margin-bottom: 20px; margin-top: -60px; }

          .right { width: 100% !important; }

          form { width: 100% !important; }

          .field { margin-bottom: 28px; }

          label { font-size: 13px !important; }

          input, textarea {
            font-size: 16px !important;
            padding: 12px 0;
          }

          input:focus,
          textarea:focus,
          input:not(:placeholder-shown),
          textarea:not(:placeholder-shown) {
            font-size: 17px !important;
            font-weight: 700;
          }

          textarea { min-height: 100px; }

          .submit-btn {
            width: 60px !important;
            height: 60px !important;
            font-size: 38px !important;
            margin-top: 20px;
            margin-bottom: 40px;
          }
        }
      `}</style>
    </>
  );
}
