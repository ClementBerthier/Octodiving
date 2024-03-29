import { useReducer, useState } from 'react'
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

const initialState = {
    nom: '',
    prénom: '',
    email: '',
    telephone: '',
    society: '',
    siret: '',
    numero: '',
    rue: '',
    complementAdresse: '',
    codePostal: '',
    ville: '',
    prestation: '',
    quantite: '',
    checkbox: '',
    nomFacturation: '',
    prenomFacturation: '',
    emailFacturation: '',
    telephoneFacturation: '',
    numeroFacturation: '',
    rueFacturation: '',
    complementAdresseFacturation: '',
    codePostalFacturation: '',
    villeFacturation: '',
    textarea: '',
  }

const SAVE_FORM = "SAVE_FORM"
const actionSaveForm = (name, value) => ({type: SAVE_FORM, payload: {name, value}});

function reducer(state, action){
    switch (action.type){
        case SAVE_FORM:
            return{
                ...state,
                [action.payload.name]: action.payload.value,
            };
        default:{
            throw new Error ('action not recognized');
        }
    }
}

function Formulaire () {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (event) =>{
    setCheckboxValue(!checkboxValue)
  }

  const handleFormChange = (event) => {
    dispatch(actionSaveForm(event.target.name, event.target.value))
  }

  
  return (
    <Form action="https://formsubmit.co/florian.bessiere.pro@gmail.com" method="POST" className='formContainer'>
      <div className='prestation'>
        <Form.Group widths='equal'> 
          <Form.Input fluid label='Nom' name="nom" placeholder='Votre nom' value={state.nom} required={true} onChange={handleFormChange}/>
          <Form.Input fluid label='Prénom' name="prenom" placeholder='Votre prénom' required={true}/>
          <Form.Input fluid label='E-mail' name="email" placeholder='Votre E-mail' required={true}/>
          <Form.Input fluid label='N° Téléphone' name="telephone" placeholder='Votre numéro' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Votre société' name="society" placeholder='Nom de votre société' required={true}/>
          <Form.Input fluid label='N° SIRET' name="siret" placeholder='Votre n° SIRET' required={true}/>
        </Form.Group>        
        <Form.Group widths='equal'>
          <Form.Input fluid label='Numéro' name="numero" placeholder='Numero' />
          <Form.Input fluid label='Rue' name="rue" placeholder='Rue' required={true}/>
          <Form.Input fluid label="Complément d'adresse" name="complementAdresse" placeholder='Complément' />
        </Form.Group>
        <Form.Group widths='equal'>  
          <Form.Input fluid label='Code postal' name="codePostal" placeholder='Code postal' required={true}/>
          <Form.Input fluid label='Ville' name="ville" placeholder='Ville' required={true}/>
        </Form.Group>
        <Form.Group widths='15'>
          <div className='selectContainer'>
            <label htmlFor="Prestation" className='labelSelect'>Choisissez votre prestation</label>
            <select name="prestation" placeholder='Votre prestation'>
              <option value="default" disabled >Choix prestation</option>
              {prestationOption.map((option)=>(
                <option key={option.key} value={option.value}>{option.text}</option>
              ))}
            </select>
          </div>
            <Form.Input fluid className='quantity' type='number' label='Quantité' name="quantite" placeholder="1" required={true}  />
        </Form.Group>  
      </div>
      <div className='checkbox'>
        <Form.Field control={Checkbox} name='checkbox' onChange={handleChange} label={{ children: "L'adresse de facturation est différente de l'adresse de prestation" }} />
      </div>
      <div className={`facturation ${!checkboxValue ? "hidden" : "active"}`} >
        <Form.Group widths='equal'> 
          <Form.Input fluid label='Nom' name="nomFacturation" placeholder='Votre nom'  required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='Prénom' name="prenomFacturation" placeholder='Votre prénom' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='E-mail' name="emailFacturation" placeholder='Votre E-mail' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='N° Téléphone' name="telephoneFacturation" placeholder='Votre numéro' />
        </Form.Group>
        
        <Form.Group widths='equal'>
          <Form.Input fluid label='Numéro'name="numeroFacturation"  placeholder='Numero' />
          <Form.Input fluid label='Rue' name="rueFacturation" placeholder='Rue' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label="Complément d'adresse" name="complementAdresseFacturation" placeholder='Complément' />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Code postal' name="codePostalFacturation" placeholder='Code postal' required={!checkboxValue ? false : true}/>
          <Form.Input fluid label='Ville' name="villeFacturation" placeholder='Ville' required={!checkboxValue ? false : true}/>
        </Form.Group>
      </div>
      <Form.TextArea label="Vous avez des questions ou des informations à ajouter?" name='textarea' placeholder='Vos questions' maxLength="5000" />
      <Form.Button>Submit</Form.Button>
      <input type="hidden" name="_next" value="http://octodiving.fr/thanks"></input>      
    </Form>
  )

}


export default Formulaire;