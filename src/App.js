import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p id="submitted">Form Submitted</p>}
    </div>
  );
}

export default App;
