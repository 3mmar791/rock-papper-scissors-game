import styles from "./Game.module.css";
function Game({ setChosen, setRules, handlePcChoose }) {
  return (
    <main className={`d-flex w-75  m-auto flex-column mt-5 ${styles.game}`}>
      <div className=" d-flex w-100 justify-content-evenly">
        <div
          className={` p-2 p-md-5 bg-light mb-3 ${styles.img} `}
          onClick={() => {
            setChosen(1);
            setRules("chossed");
            handlePcChoose();
          }}
        >
          <img src="/images/icon-paper.svg" class="img-fluid" alt="" />
        </div>
        <div
          className={` p-2 p-md-5 bg-light mb-3 ${styles.img}`}
          onClick={() => {
            setChosen(2);
            setRules("chossed");
            handlePcChoose();
          }}
        >
          <img src="/images/icon-scissors.svg" class="img-fluid  " alt="" />
        </div>
      </div>
      <div
        className={` m-auto p-2 p-md-5 bg-light mb-3   d-flex justify-content-center align-items-center ${styles.img} ${styles.imgl} `}
        onClick={() => {
          setChosen(3);
          setRules("chossed");
          handlePcChoose();
        }}
      >
        <img src="/images/icon-rock.svg" class="img-fluid  " alt="" />
      </div>
    </main>
  );
}

export default Game;
