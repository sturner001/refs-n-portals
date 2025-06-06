import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [enteredPayerName, setEnteredPlayerName] = useState();

  function handleClick() {
   setEnteredPlayerName(playerName.current.value);

  }

  return (
    <section id="player">
      <h2>Welcome {enteredPayerName ?? 'unknown entity'}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
