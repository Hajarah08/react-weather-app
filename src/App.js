
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
       
        <Weather />
        <footer>
          This project was created by Lawal Ajarat and it is{" "}
          <a
            href="https://github.com/Hajarah08/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
