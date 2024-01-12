import './SavedConversions.css';
import OneConversion from '../OneConversion/OneConversion';
import PropTypes from 'prop-types';

export default function SavedConversions({savedToConversions, deleteSaved}) {
    return (
        <div className="saved-conversions-container">
            <h1>Saved Conversions</h1>
            <div>
            {savedToConversions.length > 0 ? (
                savedToConversions.map(current => (
                    <OneConversion key={current.id} id={current.id} current={current} deleteSaved={deleteSaved}/>
                    ))
                ) : ( 
                <p className="no-saved">No saved conversions to display.</p>
                )}
            </div>
        </div>
    )
}

SavedConversions.propTypes = {
    savedToConversions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.object.isRequired,
            amount: PropTypes.number.isRequired,
            firstCountry: PropTypes.string.isRequired,
            secondCountry: PropTypes.string.isRequired,
            conversionRate: PropTypes.number.isRequired
        })
    ),
    deleteSaved: PropTypes.func.isRequired
}