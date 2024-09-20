function PlayAgain({ setRules, setWinMessage }) {
  function handlePlayAgain() {
    setRules(() => "game");
    setWinMessage(() => false);
  }
  return (
    <div className="  m-auto mt-3 d-flex flex-column justify-content-center align-items-center">
      <button
        type="button"
        className="btn btn-outline-danger ps-3 pe-3 fw-bold"
        onClick={handlePlayAgain}
      >
        Play Again
      </button>
    </div>
  );
}

export default PlayAgain;
