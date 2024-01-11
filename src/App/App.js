import { useEffect, useState, useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { getCurrency } from '../ApiCalls/ApiCalls';
import Form from '../Form/Form';
import ShowConversion from '../Conversion/Conversion';
import SavedConversions from '../SavedConversions/SavedConversions';
import lottie from "lottie-web";
import './App.css';

export default function App() {
  const [ currency, setCurrency ] = useState([])
  const [ conversionRate, setConversionRate] = useState(0);
  const [ conversion, setConversion ] = useState(null);
  const [ savedToConversions, setSavedToConversions ] = useState([]); 
  const [ error, setError ] = useState("");

  useEffect(() => {
    getCurrency() 
      .then(data => {
        // console.log(Object.keys(data.conversion_rates), 'currency data')
        setCurrency(Object.keys(data.conversion_rates))
      })
  }, [])

  const container = useRef(null); 
  useEffect(() => {
    lottie.loadAnimation({
        animationData: require('../wave.json'),
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: 'svg'
    })
}, [])
 

function twoConversions(one, two, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/516b2360d76d3364e8dc234b/pair/${one}/${two}`)
        .then(response => {
          console.log(response, 'response')
            if(!response.ok) {
                console.log('err') 
            }
            return response.json()
        })
      .then(data => {
        data = setConversionRate(data.conversion_rate * amount)
        console.log(data, 'data ')
        return data
      })
    }
    console.log(conversionRate)
    
    function currentConversionDisplay(newConversion, buttonClick) {
  console.log('Inside currentConversionDisplay');
  console.log('newConversion:', newConversion);
  console.log('buttonClick:', buttonClick);
    setConversion({...newConversion, conversionRate})
    if (buttonClick.contains('save-conversion-button')) {
      setSavedToConversions([...savedToConversions, conversion])
      console.log('saved conversions:',savedToConversions)
    }
  }

  function deleteSaved(id) {
    const filteredConversions = savedToConversions.filter(clicked => clicked.id !== id);
    setSavedToConversions(filteredConversions);
  }

  return (
    <main className="App">
      <div ref={container} id="animation-container"></div>
      <header>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>Global Nomad Currency</Link>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form currentConversionDisplay={currentConversionDisplay} twoConversions={twoConversions} currency={currency}/>
              <ShowConversion className="current-conversion" conversion={conversion} />
              {error && <h2>Oh No! An error occurred!</h2>}
            </>
          }
        />
        <Route path="/saved" element={<SavedConversions savedToConversions={savedToConversions} deleteSaved={deleteSaved}/>} /> 
      </Routes>
    </main>
  );
}


