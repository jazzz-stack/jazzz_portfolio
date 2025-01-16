import revio from "../assets/images/revio.webp";
import pepsico from "../assets/images/pepsico.png";
import taxi from "../assets/images/taxi.jpeg";
import ecomnow from "../assets/images/ecomnow.png";
import boxpro from "../assets/images/boxpro.webp";

function Projects() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-4">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src={revio}
            alt="Rev.IO FSA"
            className="w-full h-48 object-fill"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Rev.IO FSA</h3>
            <p className="text-gray-600 mb-2">04/2024 - Present</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Simplified fieldwork with tools for managing tickets, contacts,
                and opportunities, even offline. Key features include GPS
                navigation, CRM access, auto-sync, and dispatch tracking.
              </li>
              <li>
                Enhanced app performance by 70-80% through optimization and code
                refactoring. Implemented On-Prem user accounts, signature
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
            className="w-full h-48 object-fill"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">PepsiCo - MiNegocio+</h3>
            <p className="text-gray-600 mb-2">07/2022 - 04/2024</p>
            <ul className="list-disc list-inside ml-4">
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
          <img src={taxi} alt="AER Taxi" className="w-full h-48 object-fill" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">AER Taxi</h3>
            <p className="text-gray-600 mb-2">03/2022 - 06/2022</p>
            <ul className="list-disc list-inside ml-4">
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src={ecomnow}
            alt="eComNow"
            className="w-full h-48 object-fill"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">eComNow</h3>
            <p className="text-gray-600 mb-2">06/2021 - 08/2021</p>
            <ul className="list-disc list-inside ml-4">
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src={boxpro}
            alt="Box Pro fitness"
            className="w-full h-48 object-fill"
          />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">Box Pro fitness</h3>
            <p className="text-gray-600 mb-2">12/2020 - 02/2021</p>
            <ul className="list-disc list-inside ml-4">
              <li>
                I successfully implemented all the project requirements
                independently and resolved all existing bugs, ensuring a smooth
                and efficient workflow.
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
  );
}

export default Projects;
