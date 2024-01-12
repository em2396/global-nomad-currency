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
  const [ conversion, setConversion ] = useState({});
  const [ savedToConversions, setSavedToConversions ] = useState([]); 
  const [ showConversion, setShowConversion ] = useState(false);
  const [ error, setError ] = useState("");

  useEffect(() => {
    getCurrency() 
      .then(data => {
        const countryCode = Object.keys(data.conversion_rates)
        setCurrency(countryCode)
      })
      .catch(error => {
        setError(error.message)
      })
  }, []);

  const container = useRef(null); 
  useEffect(() => {
    lottie.loadAnimation({
        animationData: require('../wave.json'),
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: 'svg'
    })
  }, []);
    
  function currentConversionDisplay(newConversion, buttonClick) {
    setShowConversion(true)
    setConversion({...newConversion})
    if (buttonClick.contains('save-conversion-button')) {
      setSavedToConversions([...savedToConversions, conversion]);
    };
  };

  function deleteSaved(id) {
    const filteredConversions = savedToConversions.filter(clicked => clicked.id !== id);
    setSavedToConversions(filteredConversions);
  };

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
              {showConversion &&<ShowConversion className="current-conversion" conversion={conversion} />}
              {error && <h2>Oh No! An error occurred!</h2>}
            </>
          }
        />
        <Route path="/saved" element={<SavedConversions savedToConversions={savedToConversions} deleteSaved={deleteSaved}/>} /> 
      </Routes>
    </main>
  );
};

Form.propTypes = {
  currentConversionDisplay: PropTypes.func.isRequired,
  currency: PropTypes.array.isRequired  
};

ShowConversion.propTypes = {
  conversion: PropTypes.object.isRequired
};

SavedConversions.propTypes = {
  savedToConversions: PropTypes.array.isRequired,
  deleteSaved: PropTypes.func.isRequired
};