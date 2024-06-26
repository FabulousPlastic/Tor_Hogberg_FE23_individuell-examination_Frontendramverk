import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectsPage.css'; 

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/FabulousPlastic/repos')
      .then(response => {
        
        const sortedRepos = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setRepos(sortedRepos);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className="repo-list">
        {repos.map(repo => (
          <div key={repo.id} className="repo-item">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h2>{repo.name}</h2>
            </a>
            <p>{repo.description}</p>
            <p><strong>Stars:</strong> {repo.stargazers_count}</p>
            <p><strong>Language:</strong> {repo.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;