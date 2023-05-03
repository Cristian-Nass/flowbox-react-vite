import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";

import useGetProducts from "./useGetProducts";

const server = setupServer(
  rest.get(
    "https://gist.githubusercontent.com/Cristian-Nass/f5e2dedf7f090591fca4ba9d9873a2f9/raw/ace08fb1b35b3987c3631adf1583ffb1405a4a37/products.json",
    (req, res, ctx) => {
      return res(
        ctx.json({
          title: "string",
          descriptions: "string",
          price: 0,
          image: "string",
          id: "string",
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("test the http reauest inside custom hook and get response", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useGetProducts());

  await waitForNextUpdate();

  expect(result.current).toEqual([
    false,
    null,
    {
      descriptions: "string",
      id: "string",
      image: "string",
      price: 0,
      title: "string",
    },
  ]);
});
