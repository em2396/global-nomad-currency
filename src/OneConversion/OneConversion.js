import './OneConversion.css'
// import './minus-circle.png'
// import 'minus-circle.png'

export default function OneConversion({current, deleteSaved, id}) {
    console.log(current, 'current inside one conversion')
    return (
        <div>
         
                {/* <img src="./minus-circle.svg" alt="delete-button"/>    */}
                {/* <img src="do_not_disturb_on_FILL0_wght400_GRAD0_opsz24" alt="delete"/> */}
                <img onClick={() => deleteSaved(id)} src="minus-circle.png" alt="delete-button" />
                
 
            <h2>{current.amount} {current.firstCountry} to {current.secondCountry} is {current.conversionRate}</h2>
        </div>
    )
}
