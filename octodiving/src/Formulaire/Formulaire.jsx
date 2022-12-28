import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Votre société' placeholder='Nom de votre société' />
        </Form.Group>
        <Form.Group inline> 
          <Form.Input fluid label='Nom' placeholder='Votre nom' />
          <Form.Input fluid label='Prénom' placeholder='Votre prénom' />
          <Form.Input fluid label='N° SIRET' placeholder='Votre n° SIRET' />
          <Form.Input fluid label='E-mail' placeholder='Votre E-mail' />
          <Form.Input fluid label='N° Téléphone' placeholder='Votre numéro' />          
        </Form.Group>
        
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default FormExampleSubcomponentControl