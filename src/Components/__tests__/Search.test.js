import "@testing-library/jest-dom";
import { render, act } from "@testing-library/react";
import { MOCK_DATA } from "./MockData/mockResListData.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA) // Corrected the Promise.resolve here
  });
});

test("Integrated testing with search", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
});
