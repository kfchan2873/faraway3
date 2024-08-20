import { items } from "./ItemList.js";
import "../index.css";

export default function PackingList() {
  return (
    <div className="list">
      <h3> Packing List</h3>
      <ul>
        {items.map((ele) => (
          //parent
          <>
            <Item item={ele} />
          </>
        ))}
      </ul>
    </div>
  );
  //child
  function Item({ item }) {
    return (
      <div>
        <li>
          <span>
            {item.quantity} {item.description}
          </span>
          <button> x </button>
        </li>
      </div>
    );
  }
}
