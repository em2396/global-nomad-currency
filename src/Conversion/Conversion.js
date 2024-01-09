import './Conversion.css';


export default function ShowConversion({ conversion }) {
    const { firstCountry, secondCountry, amount } = conversion;

    return (
        <div>
            <h1>{firstCountry}</h1>
            <h2>{secondCountry}</h2>
            <p>{amount}</p>
        </div>
    )
}
