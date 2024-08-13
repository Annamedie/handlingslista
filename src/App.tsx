import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";

function App() {
  const [listItem, setListItems] = useState<string[]>([]);
  return (
    <>
      <h1>Handlingslistan</h1>

      <ShoppingForm />
    </>
  );
}

export default App;
