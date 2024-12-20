// rce
import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

export class Busca extends Component {
  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (e) => {
    console.log(e.target.value)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField iconPosition='left'>
            <InputIcon className='pi pi-search'/>
            <InputText
              className='w-full'
              onChange={this.onTermoAlterado} 
              placeholder='O que você quer ver?'/>
          </IconField>
          <Button 
            label='OK'
            className='w-full p-button-outlined mt-2'/>
        </div>
      </form>
    )
  }
}

export default Busca