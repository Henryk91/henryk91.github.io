import React from "react";
import projectsData from "../data/projects.json";
import GitHubProjects from "./GitHubProjects";

export default function Projects() {
  const renderFccProject = (project) => (
    <div key={project.id}>
      <div className="fccProjectHead">
        <h2>{project.title}</h2>
        {project.tech && (
          <>
            <p>{(project.tech.label || "Tech Used").trim()}:</p>
            {Array.isArray(project.tech.items) && project.tech.items.length > 0 && (
              <div className="github-project-meta justify-center">
                {project.tech.items.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            )}
          </>
        )}
        {project.description ? <p>{project.description}</p> : null}
        {project.note ? <p>{project.note}</p> : null}
      </div>
      <div className="fccProjectLinks">
        {project.links.map((link) => (
          <React.Fragment key={link.label}>
            <p>{link.label}</p>
            <a href={link.code} target="_blank" rel="noopener noreferrer">Code</a>
            <a href={link.demo} target="_blank" rel="noopener noreferrer">Demo</a>
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderSection = (section, index) => {
    switch (section.kind) {
      case "heading":
        return (
          <p key={index}>
            {section.text}
          </p>
        );
      case "paragraph":
        return (
          <p key={index}>
            {section.text}
          </p>
        );
      case "paragraphLines":
        return (
          <p key={index}>
            {section.lines.map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < section.lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      case "list":
        return (
          <ul key={index}>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      case "links":
        return (
          <div
            key={index}
            className="fccProjectLinks"
            id={section.headerId}
          >
            {section.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        );
      case "images":
        return (
          <div key={index} id={section.wrapperId}>
            {section.images.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        );
      case "tech":
        return (
          <div key={index}>
            <p>{section.label || "Main Tech Used:"}</p>
            {Array.isArray(section.items) && section.items.length > 0 && (
              <div className="github-project-meta">
                {section.items.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const renderLongProject = (project) => (
    <div className={project.className} id={project.id}>
      <h2>{project.title}</h2>
      {project.sections && project.sections.map((section, index) => renderSection(section, index))}
    </div>
  );

  return (
    <div className="pageCont" id={projectsData.page.id}>
      <div id="projectHeader">
        <h1>{projectsData.page.header}</h1>
      </div>
      <GitHubProjects />
      <div className="projectCont" id="fccProjectBox">
        {projectsData.fccProjects.map(renderFccProject)}
      </div>
      {projectsData.longProjects.map((project) => (
        <React.Fragment key={project.id}>
          {renderLongProject(project)}
        </React.Fragment>
      ))}
    </div>
  );
}
