import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    return (
        <h1>{props.kurssi}</h1>
    )
}

const Sisalto = ({osat}) => (
	osat.map((osa) => <Osa nimi={osa.nimi} tehtavia={osa.tehtavia} />)
)

const Osa = ({ nimi, tehtavia }) => (
	<p>{nimi} {tehtavia}</p>
)

const Yhteensa = ({ osat }) => (
        <p>yhteensä {osat.reduce((tehtavia, osa) => tehtavia + osa.tehtavia, 0)} tehtävää</p>
)

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
        {
            nimi: 'Reactin perusteet',
            tehtavia: 10
        },
        {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
        },
        {
            nimi: 'Komponenttien tila',
            tehtavia: 14
        }
    ]

    return (
          <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto osat={osat} />
            <Yhteensa osat={osat} />
          </div>
        )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

