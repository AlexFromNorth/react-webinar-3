import React, { useState } from "react";

const ListEl = ({ item, store }) => {
  const [numberActive, setNumberActive] = useState(0);

  const resultCountNumber = counterNumber(numberActive)

  function counterNumber(number) {
    const lastDigit = number % 10
    const lastTwoDigits = number % 100
  
    if(lastTwoDigits >= 11 && lastTwoDigits < 19) {
      return number + ' раз'
    }
    if(lastDigit >= 2 && lastDigit <= 4) {
      return number + ' раза'
    } else {
      return number + ' раз'
    }
  }


  return (
    <div
      className="List-item"
      onClick={() => (item.selected ? setNumberActive(numberActive + 1) : false)}
    >
      <div
        className={"Item" + (item.selected ? " Item_selected" : "")}
        onClick={() => store.selectItem(item.code)}
      >
        <div className="Item-code">{item.code}</div>
        <div className="Item-title">
          {item.title} {numberActive > 0 ? 'Выделяли ' + resultCountNumber : false}
        </div>-
        <div className="Item-actions">
          <button onClick={() => store.deleteItem(item.code)}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default ListEl;
