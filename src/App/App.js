import { useEffect, useState, useRef } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { getCurrency } from '../ApiCalls/ApiCalls';
import Form from '../Form/Form';
import ShowConversion from '../Conversion/Conversion';
import SavedConversions from '../SavedConversions/SavedConversions';
import lottie from "lottie-web";
import PropTypes from 'prop-types';
import './App.css';

export default function App() {
  const [ currency, setCurrency ] = useState([])
  // const [ conversionRate, setConversionRate] = useState(0);
  const [ conversion, setConversion ] = useState(null);
  const [ savedToConversions, setSavedToConversions ] = useState([]); 
  const [ error, setError ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    getCurrency() 
      .then(data => {
        // console.log(Object.keys(data.conversion_rates), 'currency data')
        console.log(data, 'data')
        const countryCode = Object.keys(data.conversion_rates)
        setCurrency(countryCode)
        console.log(currency)
        return data;
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
    
  function currentConversionDisplay(newConversion, buttonClick) {
    setConversion({...newConversion})
    if (buttonClick.contains('save-conversion-button')) {
      setSavedToConversions([...savedToConversions, conversion])
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
              <Form currentConversionDisplay={currentConversionDisplay} currency={currency}/>
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

