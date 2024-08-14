import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EditList from "./EditList";

describe("EditList", () => {
  it("Should render a button 'Redigera'", () => {
    render(<EditList item="Gooseberries" quantity={4} onEdit={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Redigera" })).toBeVisible();
  });

  it("Should render two inputs and a Save button when clicking the 'Redigera' button", () => {
    render(<EditList item="lingonberries" quantity={7} onEdit={vi.fn()} />);

    fireEvent.click(screen.getByRole("button"), { name: "Redigera" });

    expect(screen.getByPlaceholderText("Ny vara")).toBeVisible();
    expect(screen.getByRole("spinbutton")).toBeVisible();
    expect(screen.getByRole("button", { name: "Spara" })).toBeVisible();
  });
  it("Should call onEdit with the new values when clicking the Save button", () => {
    const handleEdit = vi.fn();
    render(<EditList item="Roseberries" quantity={9} onEdit={handleEdit} />);
    fireEvent.click(screen.getByRole("button", { name: "Redigera" }));
    fireEvent.input(screen.getByPlaceholderText("Ny vara"), {
      target: { value: "Blueberries" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "2" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Spara" }));
    expect(handleEdit).toBeCalledWith("Blueberries", 2);
  });
});
