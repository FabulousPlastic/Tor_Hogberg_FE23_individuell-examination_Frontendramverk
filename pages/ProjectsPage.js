import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectsPage = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/your-username/repos')
      .then(response => setRepos(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Projekt</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;