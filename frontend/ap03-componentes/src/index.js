import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label style={{display: 'block', marginBottom: 4}} htmlFor='nome'>Nome:</label>  
      <input style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', borderRadius: 8}} id="nome" type='text'/>
      <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', borderStyle: 'hidden', width: '100%', borderRadius: 8}}>
        Enviar
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
