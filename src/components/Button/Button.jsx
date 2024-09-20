function Button({ rules, setRules, setWinMessage }) {
  const handleClick = () => {
    setRules(rules === "rules" ? "game" : "rules");
    setWinMessage(() => false);
  };
  return (
    <div className=" position-relative mb-2 mt-5 mt-md-0">
      <button
        type="button"
        className=" position-absolute bottom-0  end-0 me-3 btn btn-outline-primary ps-5 pe-5"
        onClick={handleClick}
      >
        {rules === "game"
          ? "Rules"
          : rules === "rules"
          ? "Start Game"
          : "Rules"}
      </button>
    </div>
  );
}

export default Button;
