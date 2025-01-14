import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm [Your Name], a passionate software developer with experience
          in building web applications.
        </p>
      </section>
      <section className="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Company A</h3>
            <p>Role: Software Engineer</p>
            <p>Duration: Jan 2020 - Present</p>
            <p>
              Responsibilities: Developing web applications using React and
              Node.js.
            </p>
          </li>
          <li>
            <h3>Company B</h3>
            <p>Role: Frontend Developer</p>
            <p>Duration: Jun 2018 - Dec 2019</p>
            <p>
              Responsibilities: Building responsive user interfaces with HTML,
              CSS, and JavaScript.
            </p>
          </li>
        </ul>
      </section>
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Project A</h3>
            <p>Description: A web application for managing tasks.</p>
            <p>Technologies: React, Node.js, MongoDB</p>
            <a
              href="https://github.com/yourusername/project-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </li>
          <li>
            <h3>Project B</h3>
            <p>Description: A mobile app for tracking fitness activities.</p>
            <p>Technologies: React Native, Firebase</p>
            <a
              href="https://github.com/yourusername/project-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </section>
      <footer>
        <p>Contact: jaswant.raj45@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;
