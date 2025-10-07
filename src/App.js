import React from 'react';
import ProjectCard from './components/ProjectCard';

function App() {
  const projects = [
    { title: "Quiz App", description: "A JavaScript quiz application for learning.", link: "#" },
    { title: "Andrea's World", description: "A full-stack e-commerce clothing website.", link: "#" },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #a4508b, #5f0a87)',
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '20px'
    }}>
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Anastasia John</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Full Stack Developer</p>
        <a href="#projects">
          <button style={{
            padding: '12px 25px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#ff7eb9',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>View Projects</button>
        </a>
      </header>

      <section id="projects" style={{ width: '100%', maxWidth: '1000px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Projects</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {projects.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </section>

      <footer style={{ marginTop: '50px' }}>
        <p>© 2025 Anastasia John. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
