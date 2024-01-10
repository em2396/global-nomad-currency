import './Form.css';
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'



export default function Form({currentConversionDisplay, addToSaved}) {
    const [ amount, setAmount ] = useState("");
    const [ firstCountry, setFirstCountry ] = useState("");
    const [ secondCountry, setSecondCountry ] = useState("");



    function displayConversion(event) {
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
                    <input 
                        type='text'
                        placeholder='Country1'
                        name='Country1'
                        value={firstCountry}
                        onChange={event => setFirstCountry(event.target.value)}
                        />
                    <input 
                        type='text'
                        placeholder='Country2'
                        name='Country2'
                        value={secondCountry}
                        onChange={event => setSecondCountry(event.target.value)}
                        />
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