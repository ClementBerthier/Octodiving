import { Checkbox, Form, Select } from 'semantic-ui-react'
import './stylesFormulaire.scss'

const prestationOption =[
  { key: 'PL1/2J', value: 'PL1/2J', text: 'Prestation 1/2 journée'},
  { key: 'PL1J', value: 'PL1J', text: 'Prestation 1 jour' },
  { key: 'PLWE', value: 'PLWE', text: 'Prestation Week-end' },
  { key: 'PL1S', value: 'PL1S', text: 'Prestation 1 semaine' },
  { key: 'PL1M', value: 'PL1M', text: 'Prestation 1 mois' },
]

function Formulaire () {
  
  return (
    <Form>
      <div className='prestation'>
        <Form.Group widths='equal'> 
          <Form.Input fluid label='Nom' placeholder='Votre nom' />
          <Form.Input fluid label='Prénom' placeholder='Votre prénom' />
          <Form.Input fluid label='E-mail' placeholder='Votre E-mail' />
          <Form.Input fluid label='N° Téléphone' placeholder='Votre numéro' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Votre société' placeholder='Nom de votre société' />
          <Form.Input fluid label='N° SIRET' placeholder='Votre n° SIRET' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Adresse de prestation' placeholder='Adresse' />
          <Form.Input fluid label="Complément d'adresse" placeholder='Complément' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Numéro' placeholder='Numero' />
          <Form.Input fluid label='Rue' placeholder='Rue' />
          <Form.Input fluid label='Code postal' placeholder='Code postal' />
          <Form.Input fluid label='Ville' placeholder='Ville' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Select placeholder='Sélectionnez votre prestation' options={prestationOption} /> 
        </Form.Group>
      </div>
      <Form.Field control={Checkbox} label={{ children: "L'adresse de facturation est différente de l'adresse de facturation" }} />
      <div className='facturation'>
        <Form.Group widths='equal'> 
          <Form.Input fluid label='Nom' placeholder='Votre nom' />
          <Form.Input fluid label='Prénom' placeholder='Votre prénom' />
          <Form.Input fluid label='E-mail' placeholder='Votre E-mail' />
          <Form.Input fluid label='N° Téléphone' placeholder='Votre numéro' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Adresse de facturation' placeholder='Adresse' />
          <Form.Input fluid label="Complément d'adresse" placeholder='Complément' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Numéro' placeholder='Numero' />
          <Form.Input fluid label='Rue' placeholder='Rue' />
          <Form.Input fluid label='Code postal' placeholder='Code postal' />
          <Form.Input fluid label='Ville' placeholder='Ville' />
        </Form.Group>
      </div>


      
      <Form.TextArea label='Vous avez des questions ? ' placeholder='Tell us more about you...' />
      <Form.Button>Submit</Form.Button>
    </Form>
  )

}


export default Formulaire;