import {useState, useEffect} from 'react'

export function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(()=>{
    fetch("https://api.github.com/users/Patriciabadez/repos")
    .then(response =>response.json())    
    .then(data => setRepositories(data))

  },[])

  return (
    <div>
      <ul>
        {repositories.map(repository =>{
          return(
            <li>
              <h3>{repository.name}</h3>
              <p>{repository.description}</p>
              <a href={repository.html_url} target='_blanck'>Saiba Mais</a>
            
            
            </li>
          )
        })}
      </ul>
    </div>
  );
}


