import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
      </div>

      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  );
}

export default App;
