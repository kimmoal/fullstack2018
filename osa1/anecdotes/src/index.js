import React from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({anecdote, votes}) => (
    <div>
        <h1>{anecdote}</h1>
        <p>Votes: {votes}</p>
    </div>
)

const Button = ({clickEvent, label}) => (
    <button onClick={clickEvent}>{label}</button>
)

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            votes: new Array(anecdotes.length).fill(0)
        }
    }

    voteAnecdote = () => {
        const votes = [...this.state.votes];
        votes[this.state.selected]++;
        this.setState({ votes: votes })
    }

    nextAnecdote = () => {
        const length = this.props.anecdotes.length
        this.setState({ selected: Math.floor(Math.random() * length) })
    }

    render() {
        const most_votes = this.state.votes.sort(function(a, b) {
              return a - b;
        });

        return (
            <div>
                <Anecdote
                    anecdote={this.props.anecdotes[this.state.selected]}
                />
                <Button label="Vote" clickEvent={this.voteAnecdote} />
                <Button label="Next anecdote" clickEvent={this.nextAnecdote} />
                <Anecdote anecdote={most_votes} />
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
