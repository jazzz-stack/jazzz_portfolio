import React from "react";
import ecomnow from "../assets/images/ecomnow.png";
import boxpro from "../assets/images/boxpro.webp";
import revio from "../assets/images/revio.webp";
import pepsico from "../assets/images/pepsico.png";
import taxi from "../assets/images/taxi.jpeg";
import Experience from "./cv/components/Experience";

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <header className="text-center mb-12 colorful-header bg-gradient-to-r from-purple-200 via-blue-300 to-purple-300">
        <h1 className="text-5xl font-bold mb-4">Jasvant Raj</h1>
        <p className="text-lg text-gray-600">Senior Software Engineer</p>
        <p className="text-gray-500">Lucknow, Uttar Pradesh, India, 226016</p>
        <p className="text-gray-500">
          <strong>Contact:</strong> +91-8052004200 |{" "}
          <a href="mailto:jaswant.raj45@gmail.com" className="text-yellow-300">
            jaswant.raj45@gmail.com
          </a>
        </p>
        <p className="text-gray-100">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/jaswant-raj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300"
          >
            linkedin.com/in/jaswant-raj
          </a>
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I am a skilled Senior Software Engineer with extensive experience in
          developing, enhancing, and optimizing mobile and web applications. My
          expertise includes React Native, React.js, JavaScript, TypeScript,
          RESTful APIs, and modern development tools like Redux, Jest, vitest,
          and Git.
        </p>
        <p className="text-gray-700 mb-4">
          With over 4 years of professional experience, I have contributed to
          the success of projects across multiple domains, achieving significant
          results such as a 70-80% increase in app smoothness, improved code
          quality by 40-50%, and a 20% reduction in app crashes through
          meticulous debugging and code refactoring. I have successfully led the
          implementation of key features like On-Prem user accounts, in-app
          purchases, and cross-platform functionalities.
        </p>
        <p className="text-gray-700 mb-4">
          In my current role as a Senior Software Engineer at Centric
          Consulting, I have driven a 40% increase in client acquisition and a
          25% revenue growth by spearheading initiatives in AI strategy, cyber
          risk management, and cloud solutions. I am passionate about optimizing
          performance, ensuring seamless user experiences, and delivering
          high-quality products that exceed client expectations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Key Highlights</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Published 20+ applications on app stores with exceptional quality.
          </li>
          <li>
            Improved development efficiency by 60% and reduced production bugs
            significantly through rigorous unit testing.
          </li>
          <li>
            Recognized as "Employee of the Year" for outstanding contributions
            to team performance and project success.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "React Native",
            "Expo",
            "Reactjs",
            "JavaScript & ES6",
            "CI CD (GitHub Actions & Azure DevOps)",
            "Jest",
            "Vitest",
            "JSX",
            "CSS",
            "TypeScript",
            "RESTful API's",
            "Redux",
            "GitHub",
            "Azure DevOps",
            "Socket API",
            "Redux-toolkit",
            "GraphQL",
            "AppDynamics",
            "Git",
            "ServiceNow",
            "React-Bootstrap",
            "App Store & Play Store",
            "Full Story",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <Experience />

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={revio}
              alt="Rev.IO FSA"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Rev.IO FSA</h3>
              <p className="text-gray-600 mb-2">04/2024 - Present</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Simplified fieldwork with tools for managing tickets,
                  contacts, and opportunities, even offline. Key features
                  include GPS navigation, CRM access, auto-sync, and dispatch
                  tracking.
                </li>
                <li>
                  Enhanced app performance by 70-80% through optimization and
                  code refactoring. Implemented On-Prem user accounts, signature
                  functionality, and robust unit tests, reducing production bugs
                  by 50%.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={pepsico}
              alt="PepsiCo - MiNegocio+"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">PepsiCo - MiNegocio+</h3>
              <p className="text-gray-600 mb-2">07/2022 - 04/2024</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Enhanced digital ordering and profile management with OKTA
                  integration, increasing order accuracy by 40% and customer
                  satisfaction by 25%.
                </li>
                <li>
                  Provided 6+ trainings to troubleshoot the bugs & crash issues.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={taxi}
              alt="AER Taxi"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">AER Taxi</h3>
              <p className="text-gray-600 mb-2">03/2022 - 06/2022</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Cloned 6+ projects, implementing new features, bug fixing, and
                  publishing apps on stores.
                </li>
                <li>
                  Led the team in writing unit tests, improving code quality and
                  productivity by 60%.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => window.open("https://ecomnow.org/ecom-now-connect/")}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={ecomnow}
              alt="eComNow"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">eComNow</h3>
              <p className="text-gray-600 mb-2">06/2021 - 08/2021</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Led the mobile and web team to achieve the goal using React &
                  React Native technology.
                </li>
                <li>
                  The outcome of the successful delivery was 20% of company
                  growth.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() =>
              window.open("https://cafebazaar.ir/app/com.boxpro.fitness?l=en")
            }
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={boxpro}
              alt="Box Pro fitness"
              className="w-full h-48 object-fill"
            />
            <div className="p-6"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Box Pro fitness</h3>
              <p className="text-gray-600 mb-2">12/2020 - 02/2021</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  I successfully implemented all the project requirements
                  independently and resolved all existing bugs, ensuring a
                  smooth and efficient workflow.
                </li>
                <li>
                  Delivered the product to the client successfully, causing the
                  client to be very happy, and he gave a 10% bonus amount to the
                  company.
                </li>
                <li>
                  The target deadline was 6 months, but I delivered the project
                  within 3 months.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <ul className="list-none text-gray-700">
          <li className="mb-4">
            <h3 className="font-bold">
              Master of Computer Application - Chandigarh University
            </h3>
            <p className="text-gray-600">12/2017 - 05/2019</p>
          </li>
          <li className="mb-4">
            <h3 className="font-bold">
              Bachelor of Computer Application - Makhanlal Chaturvedi National
              University
            </h3>
            <p className="text-gray-600">12/2013 - 06/2016</p>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <ul className="list-none text-gray-700">
          <li className="mb-4">
            Employee of the year award - Award for performing well in the team.
          </li>
          <li className="mb-4">
            Silver medal - A marathon race competition medal.
          </li>
        </ul>
      </section>

      <footer className="text-center mt-6">
        <p>
          Contact:{" "}
          <a href="mailto:jaswant.raj45@gmail.com" className="text-blue-500">
            jaswant.raj45@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
