import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import QuoteForm from "./components/QuoteForm";
import { useState } from "react";

function App() {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <div className="App">
      <Header setShowQuote={setShowQuote} />
      <Home setShowQuote={setShowQuote} />
      <Services />
      <Contact />
      <Footer />

      {showQuote && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowQuote(false)}>
              ×
            </button>
            <QuoteForm setShowQuote={setShowQuote} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
