import { useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import { useWeather } from './context/Weather';

function App() {
  const weather = useWeather();
  useEffect(() => {
    //Get current location of user as sson as App component mounts
    weather.fetchCurrentUserLocationData();
  },[]);

  return (
    <div className="App">

      <Card />

    </div>
  );
}

export default App;
