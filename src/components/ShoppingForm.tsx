import { FormEvent, useState } from "react";
interface Props {
  onSubmit: (item: string, quantity: number) => void;
}

function ShoppingForm(props: Props) {
  const [item, setItem] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    props.onSubmit(item, quantity);
    setItem("");
    setQuantity(1);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Vad vill du shoppa?</h4>
        <input
          type="text"
          placeholder="Skriv din vara"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <h4>Hur många varor?</h4>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
        />
        <button>Lägg till vara </button>
      </form>
    </div>
  );
}

export default ShoppingForm;
