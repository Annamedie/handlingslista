import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ShoppingForm from "./ShoppingForm";

describe("ShoppingForm", () => {
  it("Should render a form with two inputs and a submit button", () => {
    render(<ShoppingForm onSubmit={vi.fn()} />);
    const h4 = screen.getByText("Vad vill du shoppa?");
    const h5 = screen.getByText("Hur många varor?");
    expect(h4).toBeVisible();
    expect(h5).toBeVisible();
    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByRole("spinbutton")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Lägg till vara");
  });
  it("Should not submit the form if the input is empty", () => {
    const handleSubmit = vi.fn();
    render(<ShoppingForm onSubmit={handleSubmit} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleSubmit).not.toBeCalled();
  });
  it("Should submit the form with the input values", () => {
    const handleSubmit = vi.fn();
    render(<ShoppingForm onSubmit={handleSubmit} />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Raspberries" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "3" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(handleSubmit).toBeCalledWith("Raspberries", 3);
  });
});
