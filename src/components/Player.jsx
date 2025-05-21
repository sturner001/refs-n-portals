import { useState } from 'react';

export default function Player() {
  const [enteredPayerName, setEnteredPlayerName] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);


  function handleChange(event) {
    setIsSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setIsSubmitted(true);

  }

  return (
    <section id="player">
      <h2>Welcome { isSubmitted ? enteredPayerName : 'unknown entity' }</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
