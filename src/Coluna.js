import React from 'react';
import Task from './Task'

export default ({coluna, colunaIndex, onMoveLeft, onMoveRight, adicionarTask}) => (
  <div className="coluna">
    <h1> {coluna.nome} </h1>  
    {coluna.tasks.map((task, taskIndex) => (
      <Task 
      task={task} 
      taskIndex={taskIndex} 
      key={taskIndex} 
      moveEsquerda={colunaIndex !== 0} 
      moveDireita={colunaIndex !== 4}
      onMoveLeft={() => onMoveLeft(taskIndex)}
      onMoveRight={() => onMoveRight(taskIndex)}
      />
    ))}
    {colunaIndex === 0 && <button onClick={adicionarTask} >{'Novo'}</button> }
  </div>
)