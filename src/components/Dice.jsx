export default function Dice({ value, isHeld , holdDice}) {
  return (
    <button style={{ backgroundColor: isHeld ? '#59E391' : 'transparent' }} onClick={holdDice} aria-pressed={isHeld} aria-label={`Die with value ${value} ${isHeld ? 'held' : 'not held'}`}>
      {value}
    </button>
  );
}