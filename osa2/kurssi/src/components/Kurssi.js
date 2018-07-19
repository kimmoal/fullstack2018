import React from 'react'

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

export default Kurssi
