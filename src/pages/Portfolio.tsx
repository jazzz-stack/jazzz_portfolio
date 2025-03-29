import React from "react";
import aer_customer from "../assets/images/aer_customer.png";
import aer_driver from "../assets/images/aer_driver.png";
import boxpro from "../assets/images/boxpro.webp";
import customer from "../assets/images/customer.png";
import ecomnow from "../assets/images/ecomnow.png";
import pepsico from "../assets/images/pepsico.png";
import provider from "../assets/images/provider.png";
import revio from "../assets/images/revio.webp";

import Experience from "./cv/components/Experience";
import { useQueryClient } from "@tanstack/react-query";
import queryClientPersisted from "../utils/persistQuryClient";

const Portfolio = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(["jazzz"]);
  const data1 = queryClientPersisted.getQueryData(["jazzz111"]);

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
            className="text-yellow-300">
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
        <div className="flex flex-wrap gap-6">
          {[
            "React Native",
            "Expo",
            "React.js",
            "JavaScript & ES6",
            "Jest",
            "JSX",
            "Redux",
            "React Query",
            "CI CD (GitHub Actions & DevOps)",
            "CSS",
            "TypeScript",
            "RESTful API's",
            "GitHub",
            "Azure DevOps",
            "Socket API",
            "Redux-toolkit",
            "GraphQL",
            "AppDynamics",
            "Git",
            "ServiceNow",
            "Tailwind CSS",
            "React-Bootstrap",
            "App Store & Play Store",
            "Full Story",
          ].map((skill) => (
            <div key={skill}>
              <span
                key={skill}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                {skill}
              </span>
            </div>
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
                  Enhanced app performance by 30-40% through optimization and
                  code refactoring. Implemented On-Prem user accounts, signature
                  capture functionality, and robust unit tests, reducing
                  production bugs by 50%.
                </li>
                <li>
                  Spearheaded the development of new features, cross-platform
                  functionalities, and real-time notifications, resulting in a
                  70% increase in user engagement.
                </li>
                <li>published the app on the App Store and Play Store.</li>
                <li>
                  Streamlined fieldwork with offline tools for managing tickets,
                  contacts, and opportunities. Features include CRM access,
                  auto-sync, and dispatch tracking.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio&pcampaignid=web_share"
              )
            }
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
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
                  integration, which increased order accuracy by 40% and
                  customer satisfaction by 25%.
                </li>
                <li>
                  Provided over 6 training sessions to troubleshoot bugs and
                  crash issues.
                </li>
                <li>
                  Provided 24/7 support to the client to resolve issues,
                  resulting in a 20% reduction in app crashes.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() =>
              window.open("https://apps.apple.com/in/app/a-e-r/id1615394811")
            }
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={aer_customer}
              alt="AER Taxi"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                AER Electric Ride-Share
              </h3>
              <p className="text-gray-600 mb-2">03/2022 - 06/2022</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Led the front-end development, designing user-friendly
                  interfaces and ensuring seamless app navigation.
                </li>
                <li>
                  Implemented Ride Booking & Tracking Features: that allows user
                  to book a ride instantly, and the app enables real-time
                  tracking of the driver’s arrival at the specified location.
                </li>
                <li>
                  Scheduled Rides: The app allows users to schedule rides for a
                  future time, ensuring convenience and planning flexibility.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() =>
              window.open("https://apps.apple.com/in/app/a-e-r/id1615394811")
            }
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={aer_driver}
              alt="AER Taxi"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">AER Ride-Share Driver</h3>
              <p className="text-gray-600 mb-2">03/2022 - 06/2022</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Utilized the app for cross-platform development, implemented
                  real-time driver tracking with Google Maps API, and ensured
                  secure user authentication using Firebase.
                </li>
                <li>
                  Implemented a ride rating system: After completing a trip,
                  users can rate their driver and overall ride experience,
                  thereby improving service quality.
                </li>
                <li>
                  Added Agora.io SDK for real-time voice calling to connect with
                  customers.
                </li>
                <li>
                  Implemented onboarding features for driver partners, including
                  a simple background screening process to ensure a quick and
                  hassle-free start.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/direct-paramed-provider/id1608493398"
              )
            }
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={provider}
              alt="AER Taxi"
              className="w-full h-48 object-contain"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Direct Paramed Provider
              </h3>
              <p className="text-gray-600 mb-2">03/2022 - 06/2022</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Implemented Onboarding features that allows user to upload
                  certifications to apply; resources for quick phlebotomy
                  certification are available. Approval takes 3-7 days from
                  admin panel.
                </li>
                <li>
                  Integrated navigation, automatic status updates, real-time
                  tracking, and customer preferences for specific providers.
                </li>
                <li>
                  Implemented real-time voice calling feature using Agora.io SDK
                  to connect with customers, enhancing communication and
                  support.
                </li>
                <li>
                  Worked on Flexible On-Demand Services for Providers to receive
                  service requests within 30 miles, with details on pay and
                  location, and can cancel if unsafe.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() =>
              window.open(
                "https://apps.apple.com/in/app/direct-paramed-customer/id1608482853"
              )
            }
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img
              src={customer}
              alt="AER Taxi"
              className="w-full h-48 object-contain ite"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">
                Direct Paramed Customer
              </h3>
              <p className="text-gray-600 mb-2">03/2022 - 06/2022</p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  Worked on app enhancement and achieved a 20% reduction in
                  booking time with optimized APIs, resulting in a 4.8/5 average
                  user rating on the app store.
                </li>
                <li>
                  Implemented a rating system for providers to rate customers
                  and vice versa, ensuring quality service and accountability.
                </li>
              </ul>
            </div>
          </div>

          <div
            onClick={() => window.open("https://ecomnow.org/ecom-now-connect/")}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
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
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
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

export default React.memo(Portfolio);
