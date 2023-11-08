import { useState } from "react";
function ListItem({ id, title, count, isCheck, onFilter, onToggle }) {
  //   const [isChecked, setIsChecked] = useState(false);
  //   const handleCheck = (event) => {
  //     setIsChecked(event.target.checked);
  //   };
  const handleFilterClick = () => {
    onFilter(id);
  };
  console.log("children isChecked");
  return (
    <li className={`${isCheck ? "line" : ""}`}>
      <input type="checkbox" checked={isCheck} onChange={() => onToggle(id)} />
      <p>
        {count} {title}
      </p>
      <div className="actions">
        <button onClick={handleFilterClick}>X</button>
      </div>
    </li>
  );
}
export default ListItem;
