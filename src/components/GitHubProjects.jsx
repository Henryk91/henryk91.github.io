import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = "Henryk91";

export default function GitHubProjects() {
  const [githubProjects, setGithubProjects] = useState([]);
  const [githubLoading, setGithubLoading] = useState(true);
  const [githubError, setGithubError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=11`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed: ${response.status}`);
        }

        const data = await response.json();

        const filtered = data
          .filter(
            (repo) =>
              !repo.fork &&
              repo.name.toLowerCase() !== `${GITHUB_USERNAME.toLowerCase()}.github.io`
          )
          .slice(0, 9);

        const withLanguages = await Promise.all(
          filtered.map(async (repo) => {
            let languages = [];
            try {
              const langResponse = await fetch(repo.languages_url, {
                signal: controller.signal,
              });
              if (langResponse.ok) {
                const langData = await langResponse.json();
                languages = Object.keys(langData);
              }
            } catch (err) {
              // Ignore per-repo language errors; main error handling is above.
            }

            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              homepage: repo.homepage,
              languages,
              stars: repo.stargazers_count,
              updatedAt: repo.updated_at,
            };
          })
        );

        setGithubProjects(withLanguages);
        setGithubError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setGithubError("Could not load GitHub projects right now.");
        }
      } finally {
        setGithubLoading(false);
      }
    }

    fetchRepos();

    return () => controller.abort();
  }, []);

  return (
    <div className="projectCont black" id="githubProjects">
      <h2>GitHub Projects</h2>
      {githubLoading && <p>Loading GitHub projects...</p>}
      {!githubLoading && githubError && (
        <p>
          There was a problem loading my GitHub projects. You can still see
          all of them on GitHub just click the button below.
        </p>
      )}
      {!githubLoading && !githubError && githubProjects.length > 0 && (
        <div className="github-projects-grid">
          {githubProjects.map((repo) => (
            <div key={repo.id} className="github-project-card">
              <h3>{repo.name}</h3>
              {repo.description && <p>{repo.description}</p>}
              <div className="github-project-meta">
                {Array.isArray(repo.languages) &&
                  repo.languages.map((lang) => (
                    <span key={lang}>{lang}</span>
                  ))}
                {typeof repo.stars === "number" && repo.stars > 0 && (
                  <span>★ {repo.stars}</span>
                )}
              </div>
              <div className="github-project-links">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="github-projects-footer">
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="github-projects-view-all"
        >
          View all my projects on GitHub
        </a>
      </div>
    </div>
  );
}


