import React, { useEffect, useState } from "react";
import { createElement } from "./utils.js";

import ListEl from "./ListEl.js";

import "./styles.css";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */

function App({ store }) {
  const list = store.getState().list;
  const [IdAI, setIdAI] = useState(list.length + 1);

  return (
    <div className="App">
      <div className="App-head">
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className="App-controls">
        <button
          onClick={() => {
            store.addItem(IdAI);
            setIdAI(IdAI + 1);
          }}
        >
          Добавить
        </button>
      </div>

      <div className="App-center">
        <div className="List">
          {list.map((item) => (
            <ListEl key={item.code} item={item} store={store} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
