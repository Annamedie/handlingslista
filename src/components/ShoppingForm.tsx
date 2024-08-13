import { useState } from "react";

function ShoppingForm() {
  const [item, setItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Skriv vara"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <h4>Hur många varor?</h4>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button>Lägg till vara </button>
      </form>
    </div>
  );
}

export default ShoppingForm;
