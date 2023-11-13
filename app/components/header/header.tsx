import Link from "next/link";
import React from "react";

// Displaying the header
const Header = () => {
  // rendering the nav bar with the links
  return (
    <div className="nav">
      <ul>
        {/* Routes */}
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <style jsx>
        {`
        // styling the nav
          .nav {
            position: fixed;
    width: 100%;
    top: 0;
    left: 0;
          }

          // styling the list
          ul {
            display: flex;
            background: #000;
            justify-content: flex-end;
            align-items: center;
            column-gap: 30px;
            list-style: none;
            width: 100%;
            height: 70px;
            margin: 0;
            padding-left: 0;
           
          }

          // styling the list item
          li{
            list-style
          }

          li:last-child {
            margin-right: 30px;
          }

          li a {
            color: #fff;
          }
        `}
      </style>

      {/* global style */}
      <style global jsx>
        {`
          // styling the body
          body {
            margin: 0;
          }

          // styling the link
          a {
            font-size: 16px;
            color: #fff;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
