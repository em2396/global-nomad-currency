import './Form.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Form({currentConversionDisplay, addToSaved, twoConversions, currency}) {
    const [ amount, setAmount ] = useState("");
    const [ firstCountry, setFirstCountry ] = useState("");
    const [ secondCountry, setSecondCountry ] = useState("");

    
    async function displayConversion(event) {
        event.preventDefault();
        try {
        const getConversionRate = await fetch(`https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/pair/${firstCountry}/${secondCountry}`)
        const response = await getConversionRate.json()
        const convertedNumber = await response.conversion_rate * amount
            const currentConversion = {
                id: Date.now(),
                amount,
                firstCountry,
                secondCountry,
                conversionRate: convertedNumber * amount
            };
           currentConversionDisplay(currentConversion, event.target.classList);
        } catch (error) {
            console.error('Error during conversion:', error);
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
                    type='number'
                    placeholder='Amount'
                    name='Amount'
                    value={amount}
                    onChange={event => setAmount(event.target.value)}
                    />
                <label className="label-one">
                    <select value={firstCountry} className="country-one" onChange={event => setFirstCountry(event.target.value)}>
                        <option value="">Selecte a country</option>
                        {currency.map((count, index) => (
                            <option id={count} key={index} value={count}>{count}</option>
                            ))}
                    </select>
                </label>
                <label className="label-two">
                    To : 
                    <select value={secondCountry} className="country-two" onChange={event => setSecondCountry(event.target.value)}>
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
