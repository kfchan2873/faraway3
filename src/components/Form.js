import { items } from "./ItemList.js";
import { useState } from "react";

//generate array 1 to 20
var array20 = [];
for (var i = 1; i < 21; i++) {
  array20.push(i);
}
console.log(array20);

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.handleDefault();

    const newItems = { description, quantity };
    console.log(newItems);
  }
  return (
    <div
      className="add-form"
      onSubmit={(e) => handleSubmit(e)}
      //onChange={(e) => setDescription(e.target.value)}
    >
      <h3> select quantity & items</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {array20.map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => {
          console.log(e.target);
          setDescription(e.target.value);
        }}
      ></input>
      <button> Add</button>
    </div>
  );
}
