import React, { useState } from 'react';

import Header from './components/Header';
 
const App = () => {
  //retorna um array com 2 valores. 1 - a variavel 2 - um metodo para mudar o valor dessa variavel
  const [ projects, setProject ] = useState(["Jogo de Terror", "Jogo de Fazer Pão"]);

  function handleAddProject() {
    setProject([...projects, `Novo Projeto ${Date.now()}`]); //imutabilidade
  }

  return(
    //fragment
    <>
      <Header title="Projects"/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;