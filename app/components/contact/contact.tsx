import React from "react";

// importing icons rom react icons
import { FaSquarePhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";

// Contact page displaying the contact details
const Contact = () => {
  return (
    <div id="contact" className="contact-details">
      <h1
        className="title"
        // title style
        style={{
          margin: "0 0 15px",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        Contact
      </h1>
      <div className="contact-container">
        <div className="left-side">
          <div className="contact-info">
            <p>
              {" "}
              <FaSquarePhone />
              (+27) 788437034
            </p>
          </div>
          <div className="email-info">
            <p>
              <MdEmail /> lumisabisa@gmail.com
            </p>
          </div>
          <div className="linkedin-info">
            <p>
              <FaLinkedin />
              <Link href="https://www.linkedin.com/in/sabisa-siganga/">
                https://www.linkedin.com/in/sabisa-siganga
              </Link>
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="website-info">
            {/* github link */}

            <p>
              <BsGlobe />
              <Link href="https://github.com/sabisa-siganga">
                https://github.com/sabisa-siganga
              </Link>
            </p>
            <p />
          </div>
          <div className="address-info">
            <p>
              <MdLocationPin /> Paddlefish str., Alberton, Johannesburg, 1449
            </p>
          </div>
        </div>

        {/* styling the contact page */}
        <style jsx>
          {`
            // styling the contact detils
            .contact-details {
              padding-bottom: 50px;
            }

            // styling the contact container
            .contact-container {
              padding-top: 51px;
              display: flex;
              justify-content: space-between;
              max-width: 846px;
              margin: 0 auto;
              padding-bottom: 40px;
            }

            // styling the p tags
            p {
              display: flex;
              column-gap: 10px;
              align-items: center;
            }

            // styling the links
            .contact-container :global(a) {
              color: #000;
              cursor: pointer;
            }

            // adding a hover effect on the link
            .contact-container :global(a:hover) {
              color: #2e5aff;
            }

            // adding breaking point
            @media screen and (max-width: 852px) {
              .contact-container {
                display: block;
                padding: 20px 30px;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default Contact;
