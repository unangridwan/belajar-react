import React, {Component} from 'react'
import {Row,Col} from 'react-materialize'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state =  {characters : []}

    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters : characters.filter((character,i) =>
            {
                return i !== index
            })
        })

    }

    handleSubmit = (character) => {
      this.setState({characters : [...this.state.characters, character]})
    }

    render() {
        const {characters} = this.state;

        return (
            <div className="container">
              <Row>
                <Col
                s={6}>
                <Table characterData ={characters} removeCharacter ={this.removeCharacter}/>
                </Col>
              </Row>
              <Row>
                <Col
                s={6}>
              <Form handleSubmit={this.handleSubmit}/>
              </Col>
              </Row>
            </div>
        )
            
    }

}

export default App