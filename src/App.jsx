import { useState } from "react";
import Button from "./components/Button/Button";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import RulesImg from "./components/RulesImg/RulesImg";
import ChooseGame from "./components/ChooseGame/ChooseGame";

function App() {
  const [rules, setRules] = useState("rules");
  const [chosen, setChosen] = useState(0);
  const [pcChose, setPcChose] = useState(0);
  const [score, setScore] = useState(0);
  const [winMessage, setWinMessage] = useState(false);
  const [result, setResult] = useState();

  function handlePcChoose() {
    setPcChose(() => 0);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      setPcChose(() => randomNumber);
      setWinMessage(() => true);
    }, 3000);
  }

  return (
    <div>
      <Header
        score={score}
        result={result}
        winMessage={winMessage}
        setRules={setRules}
        setWinMessage={setWinMessage}
        setScore={setScore}
        pcChose={pcChose}
      />
      {rules === "rules" ? (
        <RulesImg />
      ) : rules === "game" ? (
        <Game
          setChosen={setChosen}
          setRules={setRules}
          handlePcChoose={handlePcChoose}
        />
      ) : rules === "chossed" ? (
        <ChooseGame
          chosen={chosen}
          pcChose={pcChose}
          setScore={setScore}
          winMessage={winMessage}
          setWinMessage={setWinMessage}
          result={result}
          setResult={setResult}
          setRules={setRules}
          score={score}
        />
      ) : null}
      <Button setRules={setRules} rules={rules} />
    </div>
  );
}

export default App;
