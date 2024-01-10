import './SavedConversions.css';
import OneConversion from '../OneConversion/OneConversion';

export default function SavedConversions({savedToConversions}) {

    console.log(savedToConversions, 'savedToConversions')
    return (
        <div>
            <h1>Saved Conversions</h1>
            <div>
            {savedToConversions.length > 0 ? (
                savedToConversions.map(current => (
                    <OneConversion key={current.id} current={current}/>
                    ))
                ) : ( 
                <p>No saved conversions to display.</p>
                )}
            </div>
        </div>
    )
}