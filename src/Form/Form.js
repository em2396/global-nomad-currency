import './Form.css';
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Form({currentConversionDisplay, addToSaved, twoConversions, currency}) {
    const [ amount, setAmount ] = useState("");
    const [ firstCountry, setFirstCountry ] = useState("");
    const [ secondCountry, setSecondCountry ] = useState("");
    // const [ conversionRate, setConversionRate] = useState(0);



    // function displayConversion(event) {
    //     event.preventDefault();
    //     twoConversions(firstCountry, secondCountry, amount)
    //         .then(data => {
    //             console.log(data, 'data after then')
    //            const currentConversion = {
    //                 id: Date.now(),
    //                 amount,
    //                 firstCountry, 
    //                 secondCountry
    //             };
    //             currentConversionDisplay(currentConversion, event.target.classList)
    //         })
    //         .catch(error => {
    //             console.error('Error during conversion:', error);
    //             // Handle the error as needed
    //           });
            
    // }

    async function displayConversion(event) {
        event.preventDefault();
        try {
          await twoConversions(firstCountry, secondCountry, amount);
        //   console.log(data, 'data after then');
      
          const currentConversion = {
            id: Date.now(),
            amount,
            firstCountry,
            secondCountry
          };
          currentConversionDisplay(currentConversion, event.target.classList);
        } catch (error) {
          console.error('Error during conversion:', error);
          // Handle the error as needed
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
