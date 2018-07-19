import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdote}) => (
    <div>
        <h1>{anecdote.body}</h1>
        <p>Votes: {anecdote.votes ? anecdote.votes : 0}</p>
    </div>
)

const MostVotedAnecdote = ({anecdote}) => {
    if (!anecdote.votes)
        return null

    return (
        <div>
            <h1>Most voted anecdote: </h1>
            <p>{anecdote.body}</p>
            <p>has {anecdote.votes} votes</p>
        </div>
    )
}


const Button = ({clickEvent, label}) => (
    <button onClick={clickEvent}>{label}</button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            anecdotes: this.props.anecdotes
        }
    }

    voteAnecdote = () => {
        const anecdotes = [...this.state.anecdotes];
        let selected = anecdotes[this.state.selected]
        selected.votes ? selected.votes++ : selected.votes = 1
        this.setState({ anecdotes: anecdotes })
    }

    nextAnecdote = () => {
        const length = this.props.anecdotes.length
        this.setState({ selected: Math.floor(Math.random() * length) })
    }

    render() {
        const most_votes = [...this.state.anecdotes].sort(function(a, b) {
            if (isNaN(a.votes))
                return 1
            if (isNaN(b.votes))
                return -1

            return b.votes - a.votes;
        })[0];

        return (
            <div>
                <Anecdote
                    anecdote={this.props.anecdotes[this.state.selected]}
                />
                <Button label="Vote" clickEvent={this.voteAnecdote} />
                <Button label="Next anecdote" clickEvent={this.nextAnecdote} />
                <MostVotedAnecdote anecdote={most_votes} />
            </div>
        )
    }
}

const anecdotes = [
    { body: 'If it hurts, do it more often' },
    { body: 'Adding manpower to a late software project makes it later!' },
    { body: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
    { body: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
    { body: 'Premature optimization is the root of all evil.' },
    { body: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'}
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)
