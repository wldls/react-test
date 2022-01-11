import React from "react";

function Options({ name, updateItemCount }) {
  const handleChange = (e) => {
    const currentValue = e.target.checked ? 1 : 0;
    updateItemCount(name, currentValue);
  };

  return (
    <form>
      <input type="checkbox" id={`${name} option`} onChange={handleChange} />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
}

export default Options;
