import { useEffect, useState } from "react";

function ChooseGame({
  chosen,
  pcChose,
  setScore,
  winMessage,
  setWinMessage,
  result,
  setResult,
  setRules,
  score,
}) {
  const [srcImage, setsrcImage] = useState();

  useEffect(() => {
    // Update the src attribute when pcChose changes
    if (pcChose === 1) {
      setsrcImage(() => "/images/icon-paper.svg");
    } else if (pcChose === 2) {
      setsrcImage(() => "/images/icon-scissors.svg");
    } else if (pcChose === 3) {
      setsrcImage(() => "/images/icon-rock.svg");
    }
    // Update pcChoice when chosen changes
    if (chosen === pcChose) {
      setResult("It's a tie!");
    } else if (chosen === 3 && pcChose === 2) {
      setResult("You win! Rock beats scissors.");
      setScore((score) => score + 1);
    } else if (chosen === 3 && pcChose === 1) {
      setResult("PC wins! Paper beats rock.");
      setScore((score) => score - 1);
    } else if (chosen === 1 && pcChose === 3) {
      setResult("You win! Paper beats rock.");
      setScore((score) => score + 1);
    } else if (chosen === 1 && pcChose === 2) {
      setResult("PC wins! Scissors beats paper.");
      setScore((score) => score - 1);
    } else if (chosen === 2 && pcChose === 1) {
      setResult("You win! Scissors beats paper.");
      setScore((score) => score + 1);
    } else if (chosen === 2 && pcChose === 3) {
      setResult("PC wins! Rock beats scissors.");
      setScore((score) => score - 1);
    }
  }, [pcChose]);
  return (
    <>
      <div className="d-flex  flex-md-row flex-column justify-content-between w-75 m-auto p-3 mt-1">
        <div className="p-md-5 mt-5 mt-md-0 text-center d-flex justify-content-center align-self-center flex-column">
          <p className=" text-light mb-3 fs-3 ">You Picked</p>

          <div
            className=" mt-5  bg-light p-5 d-flex justify-content-center align-self-center"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: "15px solid blue",
            }}
          >
            <img
              src={
                chosen === 1
                  ? "/images/icon-paper.svg"
                  : chosen === 2
                  ? "/images/icon-scissors.svg"
                  : chosen === 3
                  ? "/images/icon-rock.svg"
                  : null
              }
              className=" img-fluid"
              alt=""
            />
          </div>
        </div>

        <div className=" p-md-5  mt-5 mt-md-0 mb-3  text-center d-flex justify-content-center align-self-center flex-column  ">
          <p className=" text-light fs-3">The House Picked</p>
          <div
            className=" mt-5 bg-light p-5 d-flex justify-content-center align-self-center"
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              border: `15px solid ${
                srcImage === "/images/icon-paper.svg"
                  ? "#546ff4"
                  : srcImage === "/images/icon-scissors.svg"
                  ? "#eca41a"
                  : srcImage === "/images/icon-rock.svg"
                  ? "#dd3e5a"
                  : "#ddd"
              }`,
            }}
          >
            <img src={srcImage} className=" img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseGame;
