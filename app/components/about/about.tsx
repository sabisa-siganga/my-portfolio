import Image from "next/image";
import React from "react";
import Photo from "../../../public/photo.jpg";

// About Page containing about details
const About = () => {
  // list of skills
  const skills = [
    "JavaScript",
    "React.js",
    "TypeScript",
    "Sass",
    "CSS",
    "Styled-components",
    "Styled JSX",
    "Next.js",
    "Redux",
    "MongoDB",
    "Node.js",
    "Express.js",
    "Vue.js",
    "Google Analytics",
  ];

  return (
    // Displaying the about information
    <div id="about" className="about-container">
      <div className="pic-container">
        <div className="photo-cont">
          <Image
            className="photo"
            src={Photo}
            alt="about-photo"
            width={300}
            height={300}
            priority
            style={{
              borderRadius: "50%",
            }}
          />
        </div>
        <div className="background">
          <h1>About</h1>
          <p>
            Welcome to my corner of the digital realm! I am Sabisa Siganga, a
            passionate and dedicated software developer with a keen interest in
            crafting meaningful and innovative solutions. My coding journey
            commenced with an introduction by a friend, setting me on a path of
            exploration and learning that has since fueled my passion for
            creating impactful digital solutions. Currently enrolled in the Full
            Stack Web Development program at Hyperiondev, I am actively engaged
            in mastering diverse technologies.
          </p>

          <h1>Education</h1>
          <p>Full Stack Web Development</p>
          <p>HyperionDev</p>
          <p>May 2023 - Present</p>
        </div>
      </div>

      <div className="about-details">
        <div>
          <h1>Expertise</h1>
          <p>
            My expertise lies in full-stack development, front-end technologies,
            backend frameworks I thrive on tackling challenges and turning them
            into opportunities for improvement. Whether it is creating seamless
            user experiences, optimizing backend performance, or solving complex
            problems with elegant solutions, I am always up for the task.
          </p>
        </div>

        <div>
          <h1>Technologies</h1>
          <p>
            I believe in staying up-to-date with the latest industry trends and
            tools, ensuring that my skill set is not only current but also
            relevant to the ever-evolving landscape of software development. I
            am proficient i the following technologies:
          </p>
          {/* displaying the list of skills */}
          <ul>
            {skills.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
        </div>

        <div>
          <h1>Collaborative Spirit</h1>
          <p>
            My vision is to contribute to impactful projects, lead a development
            team, share my knowledge and learn more technologies. I am excited
            about the potential of technology to drive positive change and am
            committed to being a part of that transformative journey.
          </p>
        </div>
        <div>
          <h1>Let us Connect</h1>
          <p>
            Whether you are a fellow developer, a potential collaborator,
            potential employer or someone passionate about tech, I am always
            open to connecting and exploring new opportunities. Let us build
            something incredible together!.
          </p>
        </div>
      </div>
      {/* Styling the about page */}
      <style jsx>
        {`
          .about-container {
            padding-top: 51px;
            max-width: 945px;
            margin: 0 auto;
            box-shadow: 1px 1px 37px 1px #ddd;
            border-radius: 5px;
            margin-bottom: 70px;
          }
          .pic-container {
            display: flex;
            justify-content: center;
            column-gap: 55px;
            padding: 30px 30px;
          }
          .about-details {
            padding: 30px 0;
            max-width: 705px;
            margin: 0 auto;
          }

          .about-details > div {
            margin-bottom: 45px;
          }

          .about-details ul {
            margin-top: 30px;
            padding-left: 0;
          }

          .background {
          }
          h1 {
            margin-top: 0;
          }
          p {
            letter-spacing: 0.3px;
          }
          ul {
            display: flex;
            flex-wrap: wrap;
            column-gap: 20px;
            row-gap: 15px;
          }

          li {
            list-style: none;
            background: #000;
            color: #fff;
            min-width: 100px;
            min-height: 35px;
            border-radius: 5px;
            text-align: center;
            padding-top: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2px 15px;
          }
          @media screen and (max-width: 705px) {
            .pic-container {
              display: block;
              padding: 10px 30px;
            }
            .photo-cont {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 70px;
            }
            .background {
              display: block;
              justify-content: center;
              align-items: center;
              margin-bottom: 0;
            }
            .about-details {
              text-align: center;
              padding: 40px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
