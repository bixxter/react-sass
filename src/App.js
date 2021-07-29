import "./Styles/App.css";
import union_logo from "./Union.svg";

function App() {
  return (
    <main>
      <section className="card">
        <div className="card__title">
          <h1>synth</h1>
          <span>
            Design <br />
            System
          </span>
        </div>
        <div className="card__info">
          <div className="card__info__description">
            <ul>
              <li>170+ Components</li>
              <li>Variants</li>
              <li>Icons</li>
              <li>Autolayout Everything</li>
            </ul>
          </div>
          <div className="card__info__logo">
            <img src={union_logo} alt="card-logo" />
            <span>Cred</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
