

export default function OneConversion({current, deleteSaved, id}) {
    console.log(current, 'current inside one conversion')
    return (
        <div>
            <button onClick={() => deleteSaved(id)}>Delete</button>
            <h2>{current.amount} {current.firstCountry} to {current.secondCountry} is {current.conversionRate}</h2>
        </div>
    )
}
