import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import ShoppingForm from "./components/ShoppingForm";

interface ShoppingItem {
  item: string;
  quantity: number;
  checked: boolean;
}

function App() {
  const [listItems, setListItems] = useState<ShoppingItem[]>([]);

  const toggleChecked = (index: number) => {
    const newListItems = [...listItems];
    newListItems[index].checked = !newListItems[index].checked;
    setListItems(newListItems);
  };

  return (
    <>
      <h1>Handlingslistan</h1>

      <ShoppingForm
        onSubmit={(item, quantity) =>
          setListItems([...listItems, { item, quantity, checked: false }])
        }
      />
      <ol>
        {listItems.map((listItem, index) => (
          <li
            key={index}
            style={{
              textDecoration: listItem.checked ? "line-through" : "none",
            }}
          >
            {listItem.item} {listItem.quantity}{" "}
            {listItem.quantity == 1 ? "styck" : "stycken"}
            <Checkbox
              checked={listItem.checked}
              onChange={() => toggleChecked(index)}
            />
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
