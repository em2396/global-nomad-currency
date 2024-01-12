import './OneConversion.css';
import PropTypes from 'prop-types';


export default function OneConversion({current, deleteSaved, id}) {
    return (
        <div className='saved-conversions'>
            <img className='delete-button' onClick={() => deleteSaved(id)} src="minus-circle.png" alt="delete-button" />
            <h2 className="one-saved-conversion">{current.amount} {current.firstCountry} to {current.secondCountry} is {current.conversionRate}</h2>
        </div>
    )
};

OneConversion.propTypes = {
    current: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.object.isRequired,
            amount: PropTypes.number.isRequired,
            firstCountry: PropTypes.string.isRequired,
            secondCountry: PropTypes.string.isRequired,
            conversionRate: PropTypes.number.isRequired
    })
    ),
    deleteSaved: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
}

