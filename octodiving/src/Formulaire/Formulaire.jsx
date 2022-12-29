import { Checkbox, Form } from 'semantic-ui-react'

function Formulaire () {
  
  return (
    <Form>
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
      <Form.Field control={Checkbox} label={{ children: "L'adresse de facturation est la même que l'adresse de prestation" }} />


      
      <Form.TextArea label='Vous avez des questions ? ' placeholder='Tell us more about you...' />
      <Form.Button>Submit</Form.Button>
    </Form>
  )

}


export default Formulaire;