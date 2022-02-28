import './App.css';
import logo from './logo.png';
import Calculator from './Calculator';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Calculator defaultKeyword="calculator" />
        </main>
        <footer className="App-footer">
          <small>
            <a href="" target="_blank" rel="noreferrer">Open source code </a>
            by <a href="https://www.linkedin.com/in/anete-bogdanova-a5ba366a/" target="_blank" rel="noreferrer">Anete </a>
          </small></footer>
      </div>
    </div>
  );
}


