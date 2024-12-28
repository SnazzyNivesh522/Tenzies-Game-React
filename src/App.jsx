import Dices from './components/Dices';
import { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function App() {
  const [diceValues, setDiceValues] = useState(generateAllNewDice);
  const gameWon = diceValues.every(die => die.isHeld && die.value === diceValues[0].value)
  const buttonRef = useRef(null);
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);
  function generateAllNewDice() {
    console.log("generateAllNewDice");
    const newValues = []
    for (let i = 0; i < 10; i++) {
      newValues.push({ value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() });
    }
    return newValues;
  }
  function roleDice() {
    if (!gameWon) {
      setDiceValues(oldDiceValues => oldDiceValues.map(die => {
        return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) };
      }));
    }
    else {
      setDiceValues(generateAllNewDice());
    }

  }
  console.log(diceValues);

  function holdDice(id) {
    setDiceValues(oldDiceValues => oldDiceValues.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
    }));
  }
  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <div aria-live='polite' className='sr-only'>
          {gameWon && <p>Congratulations! you won! press &quot new game &quot to start again</p>}
        </div>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Dices values={diceValues} holdDice={holdDice} />
        <button ref={buttonRef} className="roll-dice" onClick={roleDice}>{gameWon ? "New Game" : "Roll"}</button>

      </main>
    </>
  )
}

export default App
