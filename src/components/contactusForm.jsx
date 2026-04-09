import React, { useState } from "react";
import "../style/contactusForm.css";
import Map from "../assets/map.png";
import Headphone from "../assets/headphone.png";
import socialIcon from "../assets/socialIcons.png";

const ContactusForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[a-zA-Z\s]{2,20}$/; // No numbers/special chars, 2-20 chars
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.firstName))
      tempErrors.firstName = "Invalid First Name (2-20 Alphabets only)";
    if (!nameRegex.test(formData.lastName))
      tempErrors.lastName = "Invalid Last Name (2-20 Alphabets only)";
    if (!emailRegex.test(formData.email))
      tempErrors.email = "Please enter a valid email address";
    if (formData.company && !nameRegex.test(formData.company))
      tempErrors.company = "Invalid Company Name";
    if (!formData.projectType)
      tempErrors.projectType = "Please select a project type";
    if (formData.message.length < 10)
      tempErrors.message = "Message should be at least 10 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (validate()) {
      const phone = "923232171866";

      const messageBody =
        `*New Project Inquiry*\n\n` +
        `*Name:* ${formData.firstName} ${formData.lastName}\n` +
        `*Email:* ${formData.email}\n` +
        `*Project:* ${formData.projectType}\n` +
        `*Message:* ${formData.message}`;

      const encodedText = encodeURIComponent(messageBody);

      window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2 className="contact-main-heading">Reach us Directly</h2>

          <div className="contact-info-column">
            <div className="contact-box">
              <img src={Map} alt="map" className="box-icon" />
              <div className="box-text">
                <h3>General Inquiries</h3>
                <p>+92 323 2171866</p>
                <p>fk75120233@gmail.com</p>
              </div>
            </div>

            <div className="contact-box">
              <img src={Headphone} alt="mic" className="box-icon" />
              <div className="box-text">
                <h3>Support</h3>
                <p>Support Portal</p>
              </div>
            </div>

            <div className="contact-box">
              <img src={socialIcon} alt="social" className="box-icon" />
              <div className="box-text">
                <h3>Social</h3>
                <p>Follow our Journey</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="form-card">
            <form onSubmit={handleWhatsAppSend}>
              <div className="form-row">
                <div className="input-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Muhammad Farhan"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                  {errors.firstName && (
                    <span className="err-msg">{errors.firstName}</span>
                  )}
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Khan"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                  {errors.lastName && (
                    <span className="err-msg">{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Fk@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <span className="err-msg">{errors.email}</span>
                )}
              </div>

              <div className="input-group">
                <label>Company Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Your Business Ltd."
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                />
                {errors.company && (
                  <span className="err-msg">{errors.company}</span>
                )}
              </div>

              <div className="input-group">
                <label>Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                >
                  <option value="">Select Project Type</option>
                  <option value="Web Development">FullStack Development</option>
                  <option value="Web Development">Frontend Development</option>
                  <option value="Web Development">Backend Development</option>
                  <option value="Mobile App">App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
                {errors.projectType && (
                  <span className="err-msg">{errors.projectType}</span>
                )}
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us more about your vision..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
                {errors.message && (
                  <span className="err-msg">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="send-btn">
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactusForm;
