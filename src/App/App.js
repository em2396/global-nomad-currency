import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrency, getConversion } from '../ApiCalls/ApiCalls';
import './App.css';

function App() {
  const [ currency, setCurrency ] = useState([])
  const [ conversion, setConversion ] = useState([])

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


  return (
    <div className="App">
      <header>
      <Link to='/' style={{ textDecoration: 'none', color: 'inherit'}}>Global Nomad Currency</Link>
      </header>
    </div>
  );
}

export default App;
