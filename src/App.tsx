import { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import EditList from "./components/EditList";
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

  const editList = (index: number, newItem: string, newQuantity: number) => {
    const newListItems = [...listItems];
    newListItems[index] = {
      ...newListItems[index],
      item: newItem,
      quantity: newQuantity,
    };
    setListItems(newListItems);
  };

  return (
    <>
      <div className="app">
        <h1>Handlingslistan</h1>

        <ShoppingForm
          onSubmit={(item, quantity) =>
            setListItems([...listItems, { item, quantity, checked: false }])
          }
        />
        <ol>
          {listItems.map((listItem, index) => (
            <li key={index}>
              <div className="inner-container">
                <p
                  style={{
                    textDecoration: listItem.checked ? "line-through" : "none",
                  }}
                >
                  {listItem.item} {listItem.quantity}{" "}
                  {listItem.quantity == 1 ? "styck" : "stycken"}
                </p>

                <Checkbox
                  checked={listItem.checked}
                  onChange={() => toggleChecked(index)}
                />
              </div>

              <EditList
                item={listItem.item}
                quantity={listItem.quantity}
                onEdit={(newItem, newQuantity) =>
                  editList(index, newItem, newQuantity)
                }
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
