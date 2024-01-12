import './OneConversion.css'
// import './minus-circle.png'
// import 'minus-circle.png'

export default function OneConversion({current, deleteSaved, id}) {
    console.log(current, 'current inside one conversion')
    return (
        <div>
            <img className='delete-button' onClick={() => deleteSaved(id)} src="minus-circle.png" alt="delete-button" />
            <h2 className="one-saved-conversion">{current.amount} {current.firstCountry} to {current.secondCountry} is {current.conversionRate}</h2>
        </div>
    )
}
