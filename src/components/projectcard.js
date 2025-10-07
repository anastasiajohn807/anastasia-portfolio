import React from 'react';

function ProjectCard({ project }) {
  return (
    <div style={{
      background: 'white',
      color: '#5f0a87',
      padding: '20px',
      borderRadius: '12px',
      width: '250px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s'
    }}
    onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <h3 style={{ marginBottom: '10px' }}>{project.title}</h3>
      <p style={{ marginBottom: '15px' }}>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <button style={{
          backgroundColor: '#a4508b',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}>View Project</button>
      </a>
    </div>
  );
}

export default ProjectCard;
