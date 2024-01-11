import './OneConversion.css'

export default function OneConversion({current, deleteSaved, id}) {
    console.log(current, 'current inside one conversion')
    return (
        <div>
            <button onClick={() => deleteSaved(id)}>
                {/* <img src="../minus-circle.svg" alt="delete-button"/>    */}
                {/* <img src="do_not_disturb_on_FILL0_wght400_GRAD0_opsz24" alt="delete"/> */}
                
            </button>
            <h2>{current.amount} {current.firstCountry} to {current.secondCountry} is {current.conversionRate}</h2>
        </div>
    )
}
