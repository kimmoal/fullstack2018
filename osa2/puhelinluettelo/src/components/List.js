import React from 'react';
import Person from './Person'

const List = ({ persons, filter }) => {
    return (
        <ul>
            {
                persons.filter( (person) => (
                    person.name.toLowerCase()
                    .indexOf(filter.toLowerCase()) !== -1)
                )
                    .map((person) => <Person key={person.name} person={person} />)
            }
        </ul>
    )
}


export default List
