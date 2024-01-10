import './Form.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'



export default function Form({currentConversionDisplay, addToSaved, twoConversions, currency}) {
    const [ amount, setAmount ] = useState("");
    const [ firstCountry, setFirstCountry ] = useState("");
    const [ secondCountry, setSecondCountry ] = useState("");



    function displayConversion(event) {
        twoConversions(firstCountry, secondCountry);
        event.preventDefault();
        const currentConversion = {
            id: Date.now(),
            amount,
            firstCountry, 
            secondCountry
        }
        if(event.target.classList.contains('save-conversion-button')) {
            addToSaved(currentConversion)
        } else {
            currentConversionDisplay(currentConversion);
        }
    }

    function clearInputs() {
        setFirstCountry("");
        setSecondCountry("");
        setAmount("");
    }


    return (
        <form className='form-section'>
            <div className='form-inputs'>
                <input 
                    type='text'
                    placeholder='Amount'
                    name='Amount'
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                    />
                <label>
                    <select value={firstCountry} className="country-one" onChange={event => setFirstCountry(event.target.value)}>
                        <option value="">Selecte a country</option>
                        {currency.map((count, index) => (
                            <option id={count} key={index} value={count}>{count}</option>
                            ))}
                    </select>
                </label>
                <label>
                    To : 
                    <select value={secondCountry} className="country-one" onChange={event => setSecondCountry(event.target.value)}>
                        <option value="">Selecte a country</option>
                        {currency.map((count, index) => (
                            <option id={count} key={index} value={count}>{count}</option>
                            ))}
                    </select>
                </label>
            </div>
            <div className='form-buttons'>
                <button className="show-conversion-button" onClick={event => displayConversion(event)}>Show Conversion</button>
                <button className="save-conversion-button" onClick={event => displayConversion(event)}>Save Conversion</button>
                <button className="clear-button" onClick={() => clearInputs()}>Clear</button>
                <Link to="/saved">
                    <button className="saved-button">Go to Saved</button>
                </Link>
            </div>
        </form>
    )
}
// <form className='form-section'>
//     <div className='form-inputs'>
//         <input 
//             type='text'
//             placeholder='Amount'
//             name='Amount'
//             value={amount}
//             onChange={event => setAmount(event.target.value)}
//             />
//         <input 
//             type='text'
//             placeholder='Country1'
//             name='Country1'
//             value={firstCountry}
//             onChange={event => setFirstCountry(event.target.value)}
//             />
//         <input 
//             type='text'
//             placeholder='Country2'
//             name='Country2'
//             value={secondCountry}
//             onChange={event => setSecondCountry(event.target.value)}
//             />
//     </div>
//     <div className='form-buttons'>
//         <button className="show-conversion-button" onClick={event => displayConversion(event)}>Show Conversion</button>
//         <button className="save-conversion-button" onClick={event => displayConversion(event)}>Save Conversion</button>
//         <button className="clear-button" onClick={() => clearInputs()}>Clear</button>
//         <Link to="/saved">
//             <button className="saved-button">Go to Saved</button>
//         </Link>
//     </div>
// </form>