import './Form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Form({currentConversionDisplay, currency}) {
    const [ amount, setAmount ] = useState("");
    const [ firstCountry, setFirstCountry ] = useState("");
    const [ secondCountry, setSecondCountry ] = useState("");
    const [ saveButton, setSaveButton ] = useState(false);  

    
    async function displayConversion(event) {
        event.preventDefault();
        setSaveButton(true);
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
    };
    
    
    function clearInputs() {
        setFirstCountry("");
        setSecondCountry("");
        setAmount("");
    };
    
    return (
        <form className='form-section'>
            <div className='form-inputs'>
                <input className="amount"
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
                    <span>&rarr;</span>
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
                <button className="save-conversion-button" disabled={!saveButton} onClick={event => displayConversion(event)}>Save Conversion</button>
                <button className="clear-button" onClick={() => clearInputs()}>Clear</button>
                <Link to="/saved">
                    <button className="saved-button">Go to Saved</button>
                </Link>
            </div>
        </form>
    )
}

Form.propTypes = {
    currency : PropTypes.arrayOf(PropTypes.string).isRequired,
    currentConversionDisplay: PropTypes.func.isRequired,
    conversion: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            firstCountry: PropTypes.string.isRequired,
            secondCountry: PropTypes.string.isRequired,
            conversionRate: PropTypes.number.isRequired
        })
    )
  };