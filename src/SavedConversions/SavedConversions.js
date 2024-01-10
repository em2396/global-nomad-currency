import './SavedConversions.css';
import OneConversion from '../OneConversion/OneConversion';

export default function SavedConversions({savedToConversions, deleteSaved}) {

    console.log(savedToConversions, 'savedToConversions')
    return (
        <div>
            <h1>Saved Conversions</h1>
            <div>
            {savedToConversions.length > 0 ? (
                savedToConversions.map(current => (
                    <OneConversion key={current.id} id={current.id} current={current} deleteSaved={deleteSaved}/>
                    ))
                ) : ( 
                <p>No saved conversions to display.</p>
                )}
            </div>
        </div>
    )
}