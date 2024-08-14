import { useState } from "react";

interface Props {
  item: string;
  quantity: number;
  onEdit: (newItem: string, newQuantity: number) => void;
}

function EditList({ item, quantity, onEdit }: Props) {
  const [newItem, setNewItem] = useState<string>(item);
  const [newQuantity, setNewQuantity] = useState<number>(quantity);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEdit = () => {
    onEdit(newItem, newQuantity);
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={newItem}
          placeholder="Ny vara"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input
          type="number"
          value={newQuantity}
          onChange={(e) =>
            setNewQuantity(Math.max(1, parseInt(e.target.value)))
          }
          data-testid="editForm"
        />
        <button onClick={handleEdit}>Spara</button>
      </div>
    );
  }
  return <button onClick={() => setIsEditing(true)}>Redigera</button>;
}
export default EditList;
