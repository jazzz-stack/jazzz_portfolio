import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Cv.css";
import CvHeader from "./components/CvHeader";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import KeyHighlights from "./components/KeyHighlights";
import Educations from "./components/Educations";

function Cv() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    if (contentRef.current) {
      setIsGeneratingPDF(true);
      try {
        const canvas = await html2canvas(contentRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        });
        
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        
        pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save("Jasvant_Raj_CV.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
      } finally {
        setIsGeneratingPDF(false);
      }
    }
  };

  return (
    <div className="container mx-auto ">
      <div ref={contentRef} className="bg-white rounded-lg pl-5 pr-5 pb-5 pt-5">
        <div className="border-2 border-solid border-gray-200 pb-10">
          <CvHeader />

          <div className="bg-white pl-8 pr-8 ">
            <section className="mb-5">
              <h5 className="text-2xl font-bold mb-4">About Me</h5>
              <p className="text-gray-700 mb-4">
                With over 5 years of experience, I specialize in building,
                enhancing, and optimizing mobile and web applications using
                React Native, React.js, JavaScript, and TypeScript. Leveraging
                tools like Redux, Jest, and Git, I deliver scalable and
                high-performance solutions across diverse domains.
              </p>
            </section>
            <section className="mb-5">
              <h5 className="text-2xl font-bold mb-4">Skills</h5>
              <div className="flex flex-wrap gap-4">
                {[
                  "React Native",
                  "Expo",
                  "React.js",
                  "JavaScript & ES6",
                  "React Query",

                  "Jest",
                  "JSX",
                  "Redux",
                  "TypeScript",
                  "CSS",
                  "CI CD (GitHub Actions & DevOps)",
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
                  <span
                    key={skill}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <Experience />
                <KeyHighlights />
              </div>
              <div className="w-full md:w-1/2">
                <Projects />
                <Educations />
              </div>
            </div>
            <section className="mb-5">
              <h5 className="text-2xl font-bold mb-4">Achievements</h5>
              <ul className="list-none text-gray-700">
                <li>
                  Employee of the year award - Award for performing well in the
                  team.
                </li>
                <li>Silver medal - A marathon race competition medal.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6 mb-10">
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className={`px-4 py-2 text-white rounded-lg shadow-md transition-colors duration-300 flex items-center gap-2 ${
            isGeneratingPDF 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-700'
          }`}
        >
          {isGeneratingPDF && (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
          )}
          {isGeneratingPDF ? 'Generating PDF...' : 'Download as PDF'}
        </button>
      </div>
    </div>
  );
}

export default Cv;
