import Dice from './Dice';
export default function Dices({values, holdDice}) {
    const diceElements = values.map(dieObj => {
        return <Dice key={dieObj.id} value={dieObj.value} isHeld={dieObj.isHeld} holdDice={()=>holdDice(dieObj.id)}/>;
    });
    return (
        <div className="dice-container">
            {diceElements}
        </div>
    );
}