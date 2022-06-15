
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaulCity="Lagos" />
        <footer>
          This project was created by Lawal Ajarat and it is{" "}
          <a
            href="https://github.com/Hajarah08/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
          </a> <span> and hosted on
          <a
            href="https://earnest-stroopwafel-794084.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
