import './Conversion.css';

export default function ShowConversion({ conversion }) {
    return (
        <div className='conversion-paragraph'>
           {conversion && <p>{conversion.amount} {conversion.firstCountry} is {conversion.conversionRate} {conversion.secondCountry}</p>}
        </div>
    )
}
