import React from 'react'
import Busca from './Busca'

class App extends React.Component{

  state = {
    fotos: []
  }

  onBuscaRealizada = (termoDeBusca) => {
    const pexelsKey = ''

  }

  render(){
    return (
      <div
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        
        <div
          className='col-12'>
            <h1>Exibir uma lista de...</h1>
        </div>
  
        <div className='col-12'>
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
  
      </div>
    )
  }

}

export default App