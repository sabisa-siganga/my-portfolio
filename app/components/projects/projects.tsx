"use client";

import React from "react";
import Project from "../project/project";

// projects page displaying the projects
const Projects = () => {
  // list of projects
  const projectList = [
    {
      name: "Todo App",
      description:
        "Designed and implemented a feature-rich Todo application with a focus on user authentication, secure token management, and seamless CRUD operations. Leveraging React, TypeScript, Sass, React-Bootstrap, and Express.js, this project provides an intuitive and visually appealing task management experience.",
      key_features:
        "User Authentication, Token Management, Logout Functionality, Todo Management, User Interface",
      technologies:
        "React, Typescript, Sass, React-Bootstrap, Express.js, JSON Web Tokens(JWT)",
      sourceCodeLink: "https://github.com/sabisa-siganga/todo-list",
    },
    {
      name: "Star Wars App",
      description:
        "The Star Wars Web App is a showcase of my expertise in building modern, responsive web applications. Leveraging cutting-edge technologies, this project offers an immersive exploration of the Star Wars universe. From captivating design and dynamic styling to efficient data fetching and seamless navigation, every aspect of the app reflects a commitment to excellence in web development.",
      key_features:
        "Seamless integration, Creative use of Styled-components, Effective state management, Leveraging GraphQL with Apollo Server Express and Apollo Client, Intuitive client-side navigation",
      technologies:
        "React, TypeScript, Styled-components, React Context, Apollo Server Express, Swapi Star Wars API, Apollo Client, React Router and Custom Pagination Component",
      deploymentLink: "https://gc1dc.csb.app/",

      sourceCodeLink: "https://github.com/sabisa-siganga/star-wars",
    },
    {
      name: "Car Inventory Management App",
      description:
        "I developed a comprehensive Car Inventory Management application that empowers users to efficiently manage and organize their fleet of vehicles. This dynamic web application is designed to provide seamless functionalities for adding, retrieving, updating, and deleting car entries, along with a specialized feature to retrieve all cars older than 5 years.",
      key_features: "User-Friendly Interface, CRUD Operations, Advanced Query",
      technologies: "React, Typescript, Sass, Express.js,MongoDB",
      sourceCodeLink: "https://github.com/sabisa-siganga/carInventory",
    },
    {
      name: "iTunes Search App",
      description:
        "Developed iTunes Search App  to provide users with a seamless and enjoyable experience, this iTunes Search App enables users to explore and save their favorite items within favourites. The user-friendly interface allows users to search for their desired information, select categories, and manage their favorites effortlessly.",
      key_features:
        "Search Functionality, Search Results, Favorites Management, Favorites View, Remove from Favorite",
      technologies:
        "React, TypeScript, React Bootstrap, Sass, Express.js, iTunes Search API, Helmet",
      deploymentLink: "https://pd7yqt-3000.csb.app/",
      sourceCodeLink: "https://github.com/sabisa-siganga/itunes-search-app",
    },
    {
      name: " User Authentication and Authorization Express App",
      description:
        "In this project, I successfully implemented a secure JSON Web Token (JWT) authentication system, providing a robust user authentication mechanism. The task involved utilizing predefined user credentials to facilitate login, obtain JWT tokens, and subsequently use these tokens to make requests to various endpoints within the application.",
      key_features:
        "User Authentication, JWT Token Generation, Endpoint Interaction",
      technologies:
        "React, Typescript, Sass, React-Bootstrap, Express.js, JSON Web Tokens(JWT)",

      sourceCodeLink: "https://github.com/sabisa-siganga/jwt-authentication",
    },
    {
      name: "Hangman Game App",
      description:
        "Embark on a challenging and entertaining linguistic journey with the Hangman Game App, meticulously crafted to deliver a delightful user experience. This React-based application combines the power of React, React-Bootstrap, and Sass to create an interactive and visually appealing game of words.",
      key_features:
        "Responsive User Interface, Interactive Gameplay, Custom Styling with Sass, React-Bootstrap",
      technologies: "React, React-Bootstrap, Sass",
      sourceCodeLink: "https://github.com/sabisa-siganga/jwt-authentication",
    },
  ];

  return (
    <div className="projects-list">
      <h2>Projects</h2>
      <div className="projects-container">
        {/* displaying the projects */}
        {projectList.map((project, index) => (
          <Project
            name={project.name}
            description={project.description}
            keyFeatures={project.key_features}
            technologies={project.technologies}
            deploymentLink={project.deploymentLink}
            sourceCodeLink={project.sourceCodeLink}
            key={index}
          />
        ))}
      </div>

      {/* styling the projects page */}
      <style jsx>{`
        .projects-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 30px;
          row-gap: 30px;
          margin-bottom: 82px;
        }

        h2 {
          font-size: 30px;
          color: #000;
          text-align: center;
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
