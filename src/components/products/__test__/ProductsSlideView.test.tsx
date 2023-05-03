import { fireEvent, render, screen } from "@testing-library/react";
import ProductsSlideView from "../ProductsSlideView";

it("Prev button existing", async () => {
  render(<ProductsSlideView />);
  const buttonsPrevElement = screen.getByRole("button", { name: "Prev" });
  expect(buttonsPrevElement).toBeInTheDocument();
});

it("handle  on click Next button", async () => {
  render(<ProductsSlideView />);
  const onClick = jest.fn();
  const buttonsNextElement = screen.getByRole("button", { name: "Next" });
  fireEvent.click(buttonsNextElement);
  expect(onClick).toHaveBeenCalledTimes(0);
});
