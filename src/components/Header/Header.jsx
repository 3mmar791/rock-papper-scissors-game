import styles from "./Header.module.css";
import PlayAgain from "../PlayAgain/PlayAgain";
import Reaset from "../Reaset/Reaset";

function Header({
  score,
  result,
  winMessage,
  setRules,
  setWinMessage,
  setScore,
}) {
  return (
    <header
      className={` d-flex  flex-md-row gap-3 flex-column justify-content-between align-items-center lh-1 m-auto mt-2 p-3 text-light w-75  rounded-3 border border-3 border-secondary  fs-5 ${styles.header}`}
    >
      <div
        className={` ps-md-5 pe-md-5  text-secondary d-flex justify-content-center align-items-center flex-column bg-light text-center fw-bold p-3 rounded-3 ${styles.categories}`}
      >
        <p>Rock</p>
        <p>Papper</p>
        <p>Scissors</p>
      </div>
      {winMessage && (
        <div
          className={` ps-md-5 pe-md-5  text-secondary d-flex justify-content-center align-items-center flex-column bg-light text-center fw-bold p-3 rounded-3 ${styles.result}`}
        >
          <p className=" text-secondary">{result}</p>
          <div className="d-flex justify-content-between align-items-center gap-4">
            {winMessage && (
              <PlayAgain setRules={setRules} setWinMessage={setWinMessage} />
            )}
            {winMessage && <Reaset setScore={setScore} />}
          </div>
        </div>
      )}
      <div
        className={` ps-md-5 pe-md-5 text-secondary d-flex justify-content-center align-items-center flex-column bg-light text-center fw-bold  p-3 rounded-3 ${styles.score}`}
      >
        <p className=" fs-3 ">Score</p>
        <p className=" fs-1 p-2 rounded bg-secondary  text-light">{score}</p>
      </div>
    </header>
  );
}

export default Header;
