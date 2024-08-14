import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import EditList from "./EditList";

describe("EditList", () => {
  it("Should render a button 'Redigera'", () => {
    render(<EditList item="Gooseberries" quantity={4} onEdit={vi.fn()} />);
    expect(screen.getByRole("button", { name: "Redigera" })).toBeVisible();
  });
  it("Should render two inputs and a Save button when clicking the 'Redigera' button", () => {
    render(<EditList item="lingonberries" quantity={7} onEdit={vi.fn()} />);
  });
});
