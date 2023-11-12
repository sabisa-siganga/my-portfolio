import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="nav">
      <ul>
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
          .nav {
            position: fixed;
    width: 100%;
    top: 0;
    left: 0;
          }
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
      <style global jsx>
        {`
          body {
            margin: 0;
          }

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
