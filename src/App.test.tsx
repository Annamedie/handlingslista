import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("Should be possible to add multiple items", () => {
    render(<App />);
    const h1 = screen.getByText("Handlingslistan");
    expect(h1).toBeVisible();
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Mushrooms" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "1" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Potatoes" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "10" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    expect(screen.getByText("Mushrooms 1 styck")).toBeVisible();
    expect(screen.getByText("Potatoes 10 stycken")).toBeVisible();
  });
  it("Should not be possible to add an item with an empty name", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    expect(screen.queryByText("5 stycken")).not.toBeInTheDocument();
  });
  it("Should be possible to check off items", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Mushrooms" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    fireEvent.click(screen.getByRole("checkbox"));
    expect(screen.getByText("Mushrooms 5 stycken")).toHaveStyle({
      textDecoration: "line-through",
    });
  });
  it("Should be possible to edit items", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Apple" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    expect(screen.getByText("Apple 5 stycken")).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Redigera" }));
    fireEvent.input(screen.getByPlaceholderText("Ny vara"), {
      target: { value: "Banana" },
    });
    fireEvent.input(screen.getByTestId("editForm"), {
      target: { value: "10" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Spara" }));
    expect(screen.queryByText("Apple 5 stycken")).not.toBeInTheDocument();
    expect(screen.getByText("Banana 10 stycken")).toBeVisible();
  });
  it("Should not be possible to edit an item with an empty name", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Apple" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    expect(screen.getByText("Apple 5 stycken")).toBeVisible();

    fireEvent.click(screen.getByRole("button", { name: "Redigera" }));
    fireEvent.input(screen.getByPlaceholderText("Ny vara"), {
      target: { value: "" },
    });
    fireEvent.input(screen.getByTestId("editForm"), {
      target: { value: "10" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Spara" }));
    expect(screen.getByText("Apple 5 stycken")).toBeVisible();
  });
});
