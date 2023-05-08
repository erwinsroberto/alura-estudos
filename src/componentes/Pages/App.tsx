import React, { useState } from 'react';
import Botao from '../Botao'
import Formulario from '../Formulario';
import Lista from '../Lista';
import style from './App.style.module.scss'
import  Cronometro  from '../Cronometro';
import { ITarefa } from '../../Types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true: false})));
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}></Formulario>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      ></Lista>
      <Cronometro selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}></Cronometro>
    </div>
  );
}

export default App;
