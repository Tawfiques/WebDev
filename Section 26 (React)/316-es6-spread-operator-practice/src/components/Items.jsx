import React from "react";
 let nextId = 0;
function Items() {
  const [item, setItem] = React.useState("");
  const [items, updateItems] = React.useState([]);
 

  function addItem() {
    items.push({ id: nextId++, item: item });
    setItem("");
  }

  return (
    <div>
      <div className="form">
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {items.map(item=><li key={item.id}>{item.item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Items;
