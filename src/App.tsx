import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import ShoppingForm from "./components/ShoppingForm";

interface ShoppingItem {
  item: string;
  quantity: number;
}

function App() {
  const [listItems, setListItems] = useState<ShoppingItem[]>([]);

  return (
    <>
      <h1>Handlingslistan</h1>

      <ShoppingForm
        onSubmit={(item, quantity) =>
          setListItems([...listItems, { item, quantity }])
        }
      />
      <ol>
        {listItems.map((listItem, index) => (
          <li key={index}>
            {listItem.item} {listItem.quantity}{" "}
            {listItem.quantity == 1 ? "styck" : "stycken"}
            <Checkbox />
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
