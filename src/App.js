import React, { Component } from 'react';
import './App.css';
import Coluna from './Coluna'

const ESQUERDA = -1;
const DIREITA = 1;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      colunas: [
        {
          nome: 'Backlog',
          tasks: [
            {
              tipo: 'Feature',
              tipoId: 'task1'
            },
            {
              tipo: 'Bug Fix',
              tipoId: 'task2'
            },
            {
              tipo: 'Update',
              tipoId: 'task3'
            },
            {
              tipo: 'Research',
              tipoId: 'task4'
            },
            {
              tipo: 'Content',
              tipoId: 'task5'
            }
          ]
        },
        {
          nome: 'To Do',
          tasks: [
            {
              tipo: 'Feature',
              tipoId: 'task1'
            },
            {
              tipo: 'Bug Fix',
              tipoId: 'task2'
            },
            {
              tipo: 'Content',
              tipoId: 'task5'
            },
            {
              tipo: 'Update',
              tipoId: 'task3'
            }
          ]
        },
        {
          nome: 'In Progress',
          tasks: [
            {
              tipo: 'Research',
              tipoId: 'task4'
            }
          ]
        },
        {
          nome: 'Testing',
          tasks: [
            {
              tipo: 'Feature',
              tipoId: 'task1'
            }
          ]
        },
        {
          nome: 'Done',
          tasks: [
            {
              tipo: 'Bug Fix',
              tipoId: 'task2'
            },
            {
              tipo: 'Update',
              tipoId: 'task3'
            }
          ]
        }
      ]
    }
  }

  atribuicaoNovoItem = tipo => {
    var tipoId = ''
    if (tipo === 'Feature'){
      tipoId = 'task1'
    }
    else if (tipo === 'Bug Fix'){
     tipoId = 'task2'
    }
    else if (tipo === 'Update'){
      tipoId = 'task3'
    }
    else if (tipo === 'Research'){
      tipoId = 'task4'
    }
    else if (tipo === 'Content'){
      tipoId = 'task5'
    }
    else {
      alert('Adicione um item válido!');
      return null;
    }

    return { 
      tipo: tipo,
      tipoId: tipoId
    }
  }

  adicao = colunaIndex => {
    const tipoTratado = this.atribuicaoNovoItem(window.prompt('Tipo de task:'))
    if(!tipoTratado)
      return    
    const task = tipoTratado 
    this.setState(estadoAnterior => {
      const { colunas } = estadoAnterior
      colunas[colunaIndex].tasks.push(task)
      return { colunas }
    })
  }

  novaAdicao = () => {   
    const task = { 
      tipo: 'Feature',
      tipoId: 'task1'
    } 
    this.setState(estadoAnterior => {
      const { colunas } = estadoAnterior
      colunas[0].tasks.push(task)
      return { colunas }
    })
  }

  movimento = (colunaIndex, taskIndex, direcao) => {
    this.setState(estadoAnterior => {
      const { colunas } = estadoAnterior 
      const [task] = colunas[colunaIndex].tasks.splice(taskIndex, 1)
      colunas[colunaIndex + direcao].tasks.push(task)
      return { colunas }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.colunas.map((coluna, colunaIndex) => (
          <Coluna 
          coluna={coluna} 
          colunaIndex={colunaIndex} 
          key={colunaIndex}
          onMoveLeft={taskIndex => this.movimento(colunaIndex, taskIndex, ESQUERDA)}
          onMoveRight={taskIndex => this.movimento(colunaIndex, taskIndex, DIREITA)}
          adicionarTask={() => this.adicao(colunaIndex)}
          /> 
        ))}
      </div>
    );
  }
}

export default App;
