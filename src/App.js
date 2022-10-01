import logo from './logo.svg';
import './App.css';
import CardGroup from './componants/CardGroup/CardGroup';

function App() {
  return (
    <div className="App">

      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <CardGroup></CardGroup>

    </div>

  );
}

export default App;
