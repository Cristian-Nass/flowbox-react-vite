import { render, screen } from "@testing-library/react";
import StyleSelector from "./StyleSelector";

it("Style Button Counter", async () => {
  render(<StyleSelector />);
  const buttonElements = screen.getAllByRole("button");
  expect(buttonElements.length).toBe(4);
});
