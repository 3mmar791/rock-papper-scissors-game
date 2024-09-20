function Reaset({ setScore }) {
  return (
    <div className="  m-auto mt-3 d-flex flex-column justify-content-center align-items-center">
      <button
        type="button"
        className="btn btn-outline-danger ps-3 pe-3 fw-bold"
        onClick={() => setScore(0)}
      >
        Reset Score
      </button>
    </div>
  );
}

export default Reaset;
