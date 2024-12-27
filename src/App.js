import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Weather Forecast App</h1>
      <Input />
      <Button value="Search" />
      <Card />
      <Button value="Refresh"/>
      
    </div>
  );
}

export default App;
