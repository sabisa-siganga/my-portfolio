"use client";

import Link from "next/link";
import React from "react";

// interface for the shape of the project
interface ProjectInterface {
  name: string;
  description: string;
  keyFeatures: string;
  technologies: string;
  deploymentLink?: string;
  sourceCodeLink: string;
}

// displaying the project
const Project = (props: ProjectInterface) => {
  // porps destructuring
  const {
    name,
    description,
    keyFeatures,
    technologies,
    deploymentLink,
    sourceCodeLink,
  } = props;

  // rendering the project
  return (
    <div className="project">
      <h3>{name}</h3>
      <div>
        <h4>Description:</h4>
        <p> {description}</p>
      </div>
      <div>
        <h4>Key Features:</h4>
        <p> {keyFeatures}</p>
      </div>
      <div>
        <h4>Technologies:</h4>
        <p> {technologies}</p>
      </div>
      {deploymentLink && (
        <div>
          <h4>Deployment Link:</h4>
          <Link href={deploymentLink}>{deploymentLink}</Link>
        </div>
      )}

      <div>
        <h4>Source Code Link:</h4>
        <Link href={sourceCodeLink}>{sourceCodeLink}</Link>
      </div>

      {/* style for the project */}
      <style jsx>{`
        // styling the project
        .project {
          max-width: 500px;

          box-shadow: 1px 1px 37px 1px #ddd;
          padding: 30px;
          border-radius: 5px;
        }

        // styling the project title
        h3 {
          color: #000;
          font-size: 25px;
          font-weight: 600;
        }

        // styling the p tag
        p {
          font-size: 16px;
          font-weight: 400;
          color: #000;
        }

        // styling the link
        .project :global(a) {
          color: #000;
        }

        .project :global(a:hover) {
          color: #2e5aff;
        }
      `}</style>
    </div>
  );
};

export default Project;
