import React from 'react';
import List from './List'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            persons: [
                { name: 'Arto Hellas', number: '040-123456' },
                { name: 'Martti Tienari', number: '040-123456' },
                { name: 'Arto Järvinen', number: '040-123456' },
                { name: 'Lea Kutvonen', number: '040-123456' }
            ],
            newName: '',
            newNumber: '',
            filter: ''
        }
    }

    handleInputChange = (e) => {
        let state = Object.assign({}, this.state);
        console.log(e.target.value)
        state[e.target.name] = e.target.value
        this.setState(state)
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
                rajaa näytettäviä:

                <form onSubmit={this.addPerson} onChange={this.handleInputChange} >
                    <div>
                        <input name="filter" value={this.state.filter} />
                    </div>
                    <h2>Lisää uusi</h2>
                    <div>
                        nimi: <input name="newName" value={this.state.newName} />
                    </div>
                    <div>
                        numero: <input name="newNumber" value={this.state.newNumber} />
                    </div>
                    <div>
                        <button type="submit">lisää</button>
                    </div>
                </form>
                <h2>Numerot</h2>
                <List persons={this.state.persons} filter={this.state.filter} />
            </div>
        )
    }
}

export default App
