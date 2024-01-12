import './Conversion.css';
import PropTypes from 'prop-types';

export default function ShowConversion({ conversion }) {
    return (
        <div className='conversion-paragraph'>
           <p>{conversion.amount} {conversion.firstCountry} is {conversion.conversionRate} {conversion.secondCountry}</p>
        </div>
    )
}

ShowConversion.propTypes = {
    conversion: PropTypes.objectOf(
        PropTypes.shape({
            firstCountry: PropTypes.string.isRequired,
            secondCountry: PropTypes.string.isRequired,
            conversionRate: PropTypes.number.isRequired
        })
    )
};