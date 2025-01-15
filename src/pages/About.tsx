import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./About.css";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Intro from "../components/Intro";

function About() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({ content: () => contentRef.current });

  return (
    <div className="display justify-center items-center h-screen">
      <div
        className="w-full p-8 bg-white shadow-lg rounded-lg"
        ref={contentRef}
      >
        <header className="text-center mb-8 colorful-header">
          <h1 className="text-4xl font-bold mb-2">Jasvant Raj</h1>
          <p className="text-lg text-gray-600">Senior Software Engineer</p>
          <p className="text-gray-600">Lucknow, Uttar Pradesh, India, 226016</p>
          <p className="text-gray-600">
            <strong>Contact:</strong> +91-8052004200 |{" "}
            <a href="mailto:jaswant.raj45@gmail.com" className="text-blue-500">
              jaswant.raj45@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/jaswant-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              linkedin.com/in/jaswant-raj
            </a>
          </p>
        </header>
        <Intro />
        <Skills />
        <Projects />
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-4">
            Education
          </h2>
          <ul className="list-none">
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
        <section className="mb-8">
          <h2 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-4">
            Achievements
          </h2>
          <ul className="list-none">
            <li className="mb-4">
              Employee of the year award - Award for performing well in the
              team.
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
      <div className="flex justify-end">
        <button
          onClick={() => handlePrint()}
          className="mt-3 mb-3 mr-3 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}

export default About;
