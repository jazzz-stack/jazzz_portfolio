function CvHeader() {
  return (
    <div className="flex flex-wrap bg-slate-300 p-5 m-5 rounded-lg">
      <div className="w-full md:w-1/2 pr-4">
        <h1 className="text-3xl font-bold mb-4">Jasvant Raj</h1>
        <p className="text-lg text-gray-600">Senior Software Engineer</p>
      </div>
      <div className="w-full md:w-1/2 pr-4 text-right">
        <p className="text-gray-500">Lucknow, Uttar Pradesh, India, 226016</p>
        <p className="text-gray-500">
          <strong>Contact:</strong> +91-8052004200 |{" "}
          <a href="mailto:jaswant.raj45@gmail.com" className="text-blue-500">
            jaswant.raj45@gmail.com
          </a>
        </p>
        <p className="text-gray-500">
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
      </div>
    </div>
  );
}

export default CvHeader;
