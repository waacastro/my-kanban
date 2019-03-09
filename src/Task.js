import React from 'react';

export default ({task, moveEsquerda, moveDireita, onMoveLeft, onMoveRight}) => (

    <div className={ `task ${ task.tipoId }` }>
        {moveEsquerda && <div className="botao" onClick={onMoveLeft} >{'<'}</div>}
        <span className="tituloTask" >{task.tipo} </span>
        {moveDireita && <div className="botao" onClick={onMoveRight} >{'>'}</div>}
    </div>

)