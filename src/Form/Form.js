import './Form.css';
import { useState } from 'react'


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
        <form>
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
                <button className="clear-button" onClick={() => clearInputs()}>Clear</button>
                <button className="save-conversion-button" onClick={event => displayConversion(event)}>Save Conversion</button>
            </div>
        </form>
    )
}