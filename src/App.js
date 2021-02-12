import React, { useState, useEffect } from 'react';

import './App.css';

import api from './services/api.js';

import Header from './components/Header';
 
const App = () => {
  //retorna um array com 2 valores. 1 - a variavel 2 - um metodo para mudar o valor dessa variavel
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  function handleAddProject() {
    //setProject([...projects, `Novo Projeto ${Date.now()}`]); //imutabilidade
  }

  return(
    //fragment
    <>
      <Header title="Projects"/>

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;