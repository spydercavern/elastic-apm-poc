import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { apm } from "./apm";

export const apmTracker = (eventName, subEventName) => {
  const id = Math.floor(Math.random() * 1000);
  apm.setUserContext({
    email: `abc-${id}@def.com`,
    username: `abc-${id}`,
    id: id,
  });
  apm?.addLabels({
    eventName,
    subEventName,
    clickedAt: new Date().toISOString(),
    appName: "hub-ops",
  });
  const transaction = apm.startTransaction(eventName, null, {
    canReuse: false,
    managed: true,
  });

  const span = transaction?.startSpan(subEventName);

  setTimeout(() => {
    span?.end();
    transaction?.end();
  }, 0);
};
function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const result = await fetch("/api/message");
    const json = await result.json();

    setMessage(json);
  }

  const handleSort = (param) => {
    apmTracker("ZeroClicks", param);
  };

  const handleSomethingElse = () => {
    apmTracker("MyData", `rand_${Math.random()}`);
  };

  const api = async () => {
    await fetch("/api/hello");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div data-transaction-name="simulate-api-div" onClick={() => getMessage()}>
        click to load message
      </div>

      <section>
        <button onClick={() => handleSort("helpful")}> helpful</button>
        <button onClick={() => handleSort("starts")}> starts</button>
        <button onClick={() => handleSomethingElse()}>click</button>
        <button data-transaction-name="simulate-api-btn" onClick={() => api()}>
          simulate api
        </button>
      </section>
    </div>
  );
}

export default App;
