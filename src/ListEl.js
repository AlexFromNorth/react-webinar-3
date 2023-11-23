import React, { useState } from "react";

const ListEl = ({ item, store }) => {
  const [active, setActive] = useState(0);

  return (
    <div
      className="List-item"
      onClick={() => (item.selected ? setActive(active + 1) : false)}
    >
      <div
        className={"Item" + (item.selected ? " Item_selected" : "")}
        onClick={() => store.selectItem(item.code)}
      >
        <div className="Item-code">{item.code}</div>
        <div className="Item-title">
          {item.title} {active > 0 ? 'Выделяли ' + active + " раз" : false}
        </div>
        <div className="Item-actions">
          <button onClick={() => store.deleteItem(item.code)}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default ListEl;
