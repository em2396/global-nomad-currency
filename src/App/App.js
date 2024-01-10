import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getCurrency, getConversion } from '../ApiCalls/ApiCalls';
import Form from '../Form/Form'
import ShowConversion from '../Conversion/Conversion';
import lottie from "lottie-web";

import './App.css';

export default function App() {
  // const [ currency, setCurrency ] = useState([])
  const [ conversion, setConversion ] = useState([]);
  const [ savedConversions, setSavedConversions ] = useState([]); 
  const [ error, setError ] = useState("");

  // useEffect(() => {
  //   getCurrency() 
  //     .then(data => {
  //       console.log(data, 'currency data')
  //       setCurrency(data)
  //     })

  //   getConversion() 
  //     .then(data => {
  //       console.log(data, 'conversion data')
  //       setConversion(data)
  //     })
  // }, [])

  const container = useRef(null); 
  useEffect(() => {
    lottie.loadAnimation({
        animationData: require('../2B52bIHWx8.json'),
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: 'svg'
    })
}, [])
 

  function currentConversionDisplay(newConversion) {
    console.log(newConversion, 'conversion inside App')
    setConversion(newConversion)
  }

  function addToSaved(saveMe) {
    setSavedConversions([...savedConversions, saveMe])
  }
  console.log(savedConversions, 'saved conversions')


  return (
    <main className="App">
      <div>
        <div ref={container} id="animation-container"></div>
        <header>
        <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>Global Nomad Currency</Link>
        </header>
        <Form currentConversionDisplay={currentConversionDisplay} addToSaved={addToSaved}/>
        <ShowConversion className="current-conversion" conversion={conversion}/>
      </div>
     
    </main>
  );
}


