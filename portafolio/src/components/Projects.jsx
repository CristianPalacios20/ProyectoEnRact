import React from 'react'

export default function Projects() {

  const projectList = [
    { id: 1, name: "Proyecto 1", description: "Descripción del proyecto 1", link: "#" },
    { id: 2, name: "Proyecto 2", description: "Descripción del proyecto 2", link: "#" },
  ];
  return (
    <section className="projects" id='projects'>
      <h2>Proyectos</h2>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
          </li>
        ))}
      </ul>

    </section>
  )
}
