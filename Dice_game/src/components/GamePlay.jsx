import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";

const GamePlay = () => {
  let [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [message, setMessage] = useState("");

  const generateRandonNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rolldice = () => {
    const randomNumber = generateRandonNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
      setMessage("You guessed correct!!!");
    } else {
      setScore((prev) => prev - 2);
      setMessage("Wrong guessed!!");
    }
    setSelectedNumber(undefined);
  };

  return (
    <main className="pt-[70px]">
      <div className="flex justify-around items-end">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          message = {message}
        />
      </div>
      <RollDice currentDice={currentDice} rolldice={rolldice} />
    </main>
  );
};

export default GamePlay;
