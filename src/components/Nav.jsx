import { useState } from "react";
function Nav({ onHandleSubmit }) {
  const [selectOptions, setSelectOptions] = useState(1);
  const [enteredInput, setEnteredInput] = useState("");

  function handleSelect(event) {
    setSelectOptions(event.target.value);
  }
  function handleInput(event) {
    setEnteredInput(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (enteredInput.trim() === "") {
      return;
    }
    const formData = {
      id: new Date().toISOString(),
      enteredInput,
      selectOptions,
      isCheck: false,
    };
    onHandleSubmit(formData);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select onChange={handleSelect} value={selectOptions}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <input
        type="text"
        placeholder="item..."
        value={enteredInput}
        onChange={handleInput}
      />
      <button>ADD</button>
    </form>
  );
}

export default Nav;
