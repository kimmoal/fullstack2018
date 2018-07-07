import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({header}) => (
    <h1>{header}</h1>
)

const Button = ({clickEvent, label}) => (
    <button onClick={clickEvent}>{label}</button>
)

const Buttons = ({feedback, clickEvent}) => (
    feedback.map(fb => <Button key={fb.label} clickEvent={clickEvent(fb.label)} label={fb.label} />)
)

const Statistics = ({ feedback }) => {
    let stats = []
    let feedback_count = feedback.reduce((total, fb) => total + fb.counter, 0);

    if (feedback_count <= 0) {
        stats.push(<Statistic name='Ei palautteita annettu' value='' />);
    } else {
        stats.push(feedback.map(fb => <Statistic key={fb.label} name={fb.label} value={fb.counter} />));

        let average = (feedback.reduce((total, fb) => total + fb.sign * fb.counter, 0.0) / feedback_count).toFixed(2);
        let positive = (feedback.filter(fb => fb.sign > 0)
            .reduce((total, fb) => total + fb.counter, 0) / feedback_count * 100).toFixed(1);

        stats.push(<Statistic key='Keskiarvo' name='Keskiarvo' value={average} />);
        stats.push(<Statistic key='Positiivisia' name='Positiivisia' value={positive + '%'} />);

    }

    return (
        <table>
            <tbody>
                { stats }
            </tbody>
        </table>
    )
}

const Statistic = ({ name, value }) => (
    <tr>
        <td>{name}</td>
        <td>{value}</td>
    </tr>
)

class Unicafe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            feedback: [
                {
                    label: 'Hyvä',
                    counter: 0,
                    sign: 1
                },
                {
                    label: 'Neutraali',
                    counter: 0,
                    sign: 0
                },
                {
                    label: 'Huono',
                    counter: 0,
                    sign: -1
                }
            ]
        }
    }

    add = (label) => () => {
        let added = this.state.feedback.map(fb => {
            if (fb.label === label) {
                fb.counter++
            }

            return fb
        })
        this.setState({ feedback: added })
    }

    render = () => (
        <div>
            <Header header="Anna palautetta" />
            <Buttons feedback={this.state.feedback} clickEvent={this.add} />
            <Header header="Statistiikka" />
            <Statistics feedback={this.state.feedback} />
        </div>
    )

}

ReactDOM.render(<Unicafe />, document.getElementById('root'));
