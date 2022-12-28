import React from 'react'
import { Header, Table} from 'semantic-ui-react'
import "./stylesPriceArray.scss"

const TableExamplePadded = () => (
  <Table celled padded className='array'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine textAlign='center' className='title' >Prestation</Table.HeaderCell>
        <Table.HeaderCell textAlign='center' className='titlePrice' >Prix/U (HT)</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header textAlign='center'>
          Frais de déplacement
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' className="prices">
          0.66€
        </Table.Cell>        
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header textAlign='center'>
          Prestation 1/2 journée
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' className="prices">
            60€
        </Table.Cell>       
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header textAlign='center'>
          Prestation 1 jour
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' className="prices">
          114€
        </Table.Cell>       
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header textAlign='center'>
          Prestation Week-end
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' className="prices">
          220€
        </Table.Cell>       
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header textAlign='center'>
          Prestation 1 semaine
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' className="prices">
          760€
        </Table.Cell>       
      </Table.Row>

      <Table.Row>
        <Table.Cell>
          <Header textAlign='center'>
          Prestation 1 mois
          </Header>
        </Table.Cell>
        <Table.Cell textAlign='center' className="prices">
          1600€
        </Table.Cell>       
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExamplePadded