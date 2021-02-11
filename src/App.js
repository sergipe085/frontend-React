import React from 'react';

import Header from './components/Header';
 
const App = () => {
  return(
    //fragment
    <>
      <Header title="Pao">
        <ul>
          <li>Menu</li>
          <li>Projetos</li>
          <li>Login</li>
        </ul>
      </Header>
      <Header title="com Quejo"/>
    </>
  );
}

export default App;