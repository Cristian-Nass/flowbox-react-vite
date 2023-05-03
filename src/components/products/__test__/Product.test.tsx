import { render, screen } from "@testing-library/react";
import Product from "../Product";

it("Prev button exisating", async () => {
  render(<Product title="" descriptions="" image="" id="" />);
  const imageElement = await screen.findByTitle("image");
  expect(imageElement).toBeInTheDocument();
});
