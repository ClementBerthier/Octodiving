import { useState } from 'react'
import { Checkbox, Form, } from 'semantic-ui-react'
import './stylesFormulaire.scss'

const prestationOption =[  
  { key: 'PL1/2J', value: 'PL12', text: 'Prestation 1/2 journée'},
  { key: 'PL1J', value: 'PL1J', text: 'Prestation 1 jour' },
  { key: 'PLWE', value: 'PLWE', text: 'Prestation Week-end' },
  { key: 'PL1S', value: 'PL1S', text: 'Prestation 1 semaine' },
  { key: 'PL1M', value: 'PL1M', text: 'Prestation 1 mois' },
  { key: 'Autre', value: 'PDIF', text: 'Autre à spécifier'},
]

function Formulaire () {

  const [checkboxValue, setCheckboxValue] = useState(false)

  const handleChange = (event) =>{
    setCheckboxValue(!checkboxValue)
  }
  
  return (
    <Form action="https://formsubmit.co/dranalaen@gmail.com" method="POST"  >
      <div className='prestation'>
        <Form.Group widths='equal'> 
          <Form.Input fluid label='Nom' name="Nom" placeholder='Votre nom' required={true}/>
          <Form.Input fluid label='Prénom' name="Prénom" placeholder='Votre prénom' required={true}/>
          <Form.Input fluid label='E-mail' name="E-mail" placeholder='Votre E-mail' required={true}/>
          <Form.Input fluid label='N° Téléphone' name="N° Téléphone" placeholder='Votre numéro' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Votre société' name="society" placeholder='Nom de votre société' required={true}/>
          <Form.Input fluid label='N° SIRET' name="SIRET" placeholder='Votre n° SIRET' required={true}/>
        </Form.Group>        
        <Form.Group widths='equal'>
          <Form.Input fluid label='Numéro' name="Numéro" placeholder='Numero' />
          <Form.Input fluid label='Rue' name="Rue" placeholder='Rue' required={true}/>
          <Form.Input fluid label="Complément d'adresse" name="Complément d'adresse" placeholder='Complément' />
          <Form.Input fluid label='Code postal' name="Code postal" placeholder='Code postal' required={true}/>
          <Form.Input fluid label='Ville' name="Ville" placeholder='Ville' required={true}/>
        </Form.Group>
        <div className='selectContainer'>
          <label htmlFor="Prestation" className='labelSelect'>Choisissez votre prestation</label>
          <select name="Prestation" placeholder='Votre prestation'>
            <option value="default" disabled >Choix prestation</option>
            {prestationOption.map((option)=>(
              <option key={option.key} value={option.value}>{option.text}</option>
            ))}
          </select>
          <Form.Input fluid type='number' label='Quantité' name="Quantité" placeholder="1" required={true}  />

        </div>
      </div>
      <div className='checkbox'>
        <Form.Field control={Checkbox} onChange={handleChange} label={{ children: "L'adresse de facturation est différente de l'adresse de prestation" }} />
      </div>
      <div className={`facturation ${!checkboxValue ? "hidden" : "active"}`} >
        <Form.Group widths='equal'> 
          <Form.Input fluid label='Nom' name="Nom Facturation" placeholder='Votre nom'  required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='Prénom' name="Prénom Facturation" placeholder='Votre prénom' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='E-mail' name="E-mail Facturation" placeholder='Votre E-mail' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='N° Téléphone' name="N° Téléphone Facturation" placeholder='Votre numéro' />
        </Form.Group>
        
        <Form.Group widths='equal'>
          <Form.Input fluid label='Numéro'name="Numéro Facturation"  placeholder='Numero' />
          <Form.Input fluid label='Rue' name="Rue Facturation" placeholder='Rue' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label="Complément d'adresse" name="Complément d'adresse Facturation" placeholder='Complément' />
          <Form.Input fluid label='Code postal' name="Code postal Facturation" placeholder='Code postal' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='Ville' name="Ville Facturation" placeholder='Ville' required={!checkboxValue ? false : true}/>
        </Form.Group>
      </div>
      <Form.TextArea label="Vous avez des questions ou des informations à ajouter?" placeholder='Vos questions' maxLength="5000" />
      <Form.Button>Submit</Form.Button>
      <input type="hidden" name="_next" value="http://localhost:3000/thanks"></input>      
    </Form>
  )

}


export default Formulaire;