import React from 'react'
import ReactDOM from 'react-dom'

const Kurssi = ({kurssi}) => {
    return (
        <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
        </div>
    )
}

const Otsikko = ({kurssi}) => {
    return (
        <h1>{kurssi.nimi}</h1>
    )
}

const Sisalto = ({kurssi}) => (
    kurssi.osat.map((osa) => <Osa key={osa.id} nimi={osa.nimi} tehtavia={osa.tehtavia} />)
)

const Osa = ({ nimi, tehtavia }) => (
    <p>{nimi} {tehtavia}</p>
)

const Yhteensa = ({ kurssi }) => (
    <p>yhteensä {kurssi.osat.reduce((tehtavia, osa) => tehtavia + osa.tehtavia, 0)} tehtävää</p>
)

const App = () => {
    const kurssit = [
        {
            nimi: 'Half Stack -sovelluskehitys',
            id: 1,
            osat: [
                {
                    nimi: 'Reactin perusteet',
                    tehtavia: 10,
                    id: 1
                },
                {
                    nimi: 'Tiedonvälitys propseilla',
                    tehtavia: 7,
                    id: 2
                },
                {
                    nimi: 'Komponenttien tila',
                    tehtavia: 14,
                    id: 3
                }
            ]
        },
        {
            nimi: 'Node.js',
            id: 2,
            osat: [
                {
                    nimi: 'Routing',
                    tehtavia: 3,
                    id: 1
                },
                {
                    nimi: 'Middlewaret',
                    tehtavia: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
        {kurssit.map((kurssi) => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

