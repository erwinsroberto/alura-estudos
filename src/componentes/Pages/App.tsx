import React from 'react';
import Botao from '../Botao'
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario></Formulario>
      <Lista></Lista>
    </div>
  );
}

export default App;
