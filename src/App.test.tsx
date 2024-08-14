import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("Should be possible to add multiple items", () => {
    render(<App />);
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Mushrooms" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "5" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    fireEvent.input(screen.getByRole("textbox"), {
      target: { value: "Potatoes" },
    });
    fireEvent.input(screen.getByRole("spinbutton"), {
      target: { value: "10" },
    });
    fireEvent.click(screen.getByText("Lägg till vara"));
    expect(screen.getByText("Mushrooms 5 stycken")).toBeVisible();
    expect(screen.getByText("Potatoes 10 stycken")).toBeVisible();
  });
});
