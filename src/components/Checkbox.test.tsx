import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("Should render a checkbox", () => {
    render(<Checkbox checked={false} onChange={vi.fn()} />);
    expect(screen.getByRole("checkbox")).toBeVisible();
  });
  it("Should be checked when checked is true", () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={true} onChange={handleChange} />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
  it("Should call onChange when clicked", () => {
    const handleChange = vi.fn();
    render(<Checkbox checked={false} onChange={handleChange} />);
    screen.getByRole("checkbox").click();
    expect(handleChange).toBeCalled();
  });
});
