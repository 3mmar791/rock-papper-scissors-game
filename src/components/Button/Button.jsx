function Button({ rules, setRules }) {
  const handleClick = () => {
    setRules(rules === "rules" ? "game" : "rules");
  };
  return (
    <div className=" position-relative mb-2">
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
