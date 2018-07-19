import React from 'react';
import Person from './Person'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                { name: 'Arto Hellas' }
            ],
            newName: '',
            newNumber: ''
        }
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({ newName: event.target.value })
    }

    handleNumberChange = (event) => {
        console.log(event.target.value)
        this.setState({ newNumber: event.target.value })
    }


    addPerson = (event) => {
        event.preventDefault()

        if (this.state.persons.find( (person) => (person.name === this.state.newName ))) {
            alert('Name already added')
            return
        }

        this.setState({ 
            persons: this.state.persons.concat({ name: this.state.newName, number: this.state.newNumber }),
            newName: '',
            newNumber: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Puhelinluettelo</h2>
                <form onSubmit={this.addPerson}>
                    <div>
                        nimi: <input value={this.state.newName} onChange={this.handleNameChange} />
                    </div>
                    <div>
                        numero: <input value={this.state.newNumber} onChange={this.handleNumberChange} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <ul>
                    {this.state.persons.map(person => <Person key={person.name} person={person} />)}
                </ul>
            </div>
        )
    }
}

export default App
