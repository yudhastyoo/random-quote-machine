import "./App.css";
import { useState, useEffect } from "react";
import { quotes } from "./quotes";

function App() {
  const [quote, setQuote] = useState({});
  const [fade, setFade] = useState(false);

  const getRandomQuote = () => {
    setFade(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App">
      <div id="quote-box">
        <div className="quote-text">
          <span id="text" style={{ opacity: fade ? 0 : 1 }}>
            "{quote.quote}"
          </span>
        </div>
        <div class="quote-author">
          <span id="author">- {quote.author}</span>
        </div>
        <div class="buttons">
          <a
            class="button"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Tweet Quote
          </a>
          <button class="button" id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
      <div className="watermark">
        By{" "}
        <a
          href="https://github.com/yudhastyoo/random-quote-machine.git"
          target="_blank"
        >
          Yudha Papua Setyo Atmaji
        </a>
      </div>
    </div>
  );
}

export default App;
