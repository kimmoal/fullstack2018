import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = ({kurssi}) => {
    return (
        <h1>{kurssi.nimi}</h1>
    )
}

const Sisalto = ({kurssi}) => (
	kurssi.osat.map((osa) => <Osa nimi={osa.nimi} tehtavia={osa.tehtavia} />)
)

const Osa = ({ nimi, tehtavia }) => (
	<p>{nimi} {tehtavia}</p>
)

const Yhteensa = ({ kurssi }) => (
        <p>yhteensä {kurssi.osat.reduce((tehtavia, osa) => tehtavia + osa.tehtavia, 0)} tehtävää</p>
)

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
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
    }

    return (
          <div>
            <Otsikko kurssi={kurssi} />
            <Sisalto kurssi={kurssi} />
            <Yhteensa kurssi={kurssi} />
          </div>
        )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

