// ContactPage.jsx
import React, { useState } from "react";
import "./contact.css";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
const [fillOrigin, setFillOrigin] = useState({});
const [hoveredField, setHoveredField] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      company: !formData.company.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    // stop submit if empty
    if (Object.values(newErrors).includes(true)) {
      setStatus("");
      return;
    }

    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send form data");
      }

      setClicked(true);

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setErrors({});

      setStatus("Message sent successfully!");

    } catch (error) {
      console.error(error);
      setStatus("Unable to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container">

        <div className="content">

          {/* LEFT SIDE */}
          <div className="left">

            <div className="dot"></div>

            <h1>
              LET'S <br /> TALK.
            </h1>

            <p>
              Tell us about your project, your timeline,
              how you heard about us, and where you’re located.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="right">

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="field">

                <label className={errors.name ? "error-label shake" : ""}>
  NAME *
</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>
<div className="field">
              {/* EMAIL */}
              <label className={errors.email ? "error-label shake" : ""}>
  EMAIL *
</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              {/* COMPANY */}
              <div className="field">

                <label className={errors.company ? "error-label shake" : ""}>
  COMPANY *
</label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />

              </div>

              {/* MESSAGE */}
              <div className="field">

               <label className={errors.message ? "error-label shake" : ""}>
  MESSAGE *
</label>

                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className={`submit-btn ${clicked ? "active" : ""}`}
                disabled={isSubmitting}
              >
                →
              </button>

              

            </form>

          </div>

        </div>

      </div>

      <style>{`

        .submit-btn{
          width:70px;
          height:70px;
          border:none;
          background:#000;
          color:#dfff00;
          font-size:48px;
          cursor:pointer;
          margin-top:0px;
          display:flex;
          align-items:center;
          justify-content:center;
          transition:0.3s ease;
        }
/* input + textarea default */
input,
textarea {
  font-size: 18px;
  font-weight: 400;
  transition: all 0.25s ease;
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
}

/* when user clicks or types */
input:focus,
textarea:focus,
input:not(:placeholder-shown),
textarea:not(:placeholder-shown) {
  font-size: 20px;   /* little bigger */
  font-weight: 700;  /* bold */
}
        .submit-btn.active{
          background:#dfff00;
          color:#000;
        }

        .submit-btn:hover{
          transform:scale(1.05);
        }

        .submit-btn:disabled{
          opacity:0.6;
          cursor:not-allowed;
        }

        .submit-status{
          margin-top:16px;
          font-size:14px;
          color:red;
        }

        /* ONLY LABEL TURNS RED */
    .error-label{
  color:#ff0000 !important;
  transition:0.3s ease;
  display:inline-block;
  animation:shake 0.3s ease;
}
  .shake{
  display:inline-block;
  animation:shake 0.35s ease;
}

        @keyframes shake{

          0%{
            transform:translateX(0);
          }

          25%{
            transform:translateX(-4px);
          }

          50%{
            transform:translateX(4px);
          }

          75%{
            transform:translateX(-4px);
          }

          100%{
            transform:translateX(0);
          }

        }

        /* ================= MOBILE VIEW - CONTACT PAGE VERTICAL ================= */
@media (max-width: 768px) {

  /* main wrapper */
  .container {
    padding: 0px 20px !important;

    
  }

  /* stack left + right vertically */
  .content {
    display: flex !important;
    flex-direction: column !important;
    gap: 50px !important;
  }

  /* LEFT SIDE */
  .left {
    width: 100% !important;
    text-align: left;
  }

  .left h1 {
    font-size: 52px !important;
    line-height: 0.95;
    margin-bottom: 20px;
    margin-left:0px;
  }

  .left p {
    font-size: 18px !important;
    max-width: 100%;
    line-height: 1.5;
    margin-left:0px;

  }

  .dot {
    margin-bottom: 20px;
    margin-top:-60px
  }

  /* RIGHT SIDE */
  .right {
    width: 100% !important;
  }

  form {
    width: 100% !important;
  }

  .field {
    margin-bottom: 28px;
  }

  label {
    font-size: 13px !important;
  }

  input,
  textarea {
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

  textarea {
    min-height: 100px;
  }

  /* submit button */
  .submit-btn {
    width: 60px !important;
    height: 60px !important;
    font-size: 38px !important;
    margin-top: 20px;
      margin-bottom : 40px;
  }
}
      `}</style>
    </>
  );
}