import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Home");
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
  expect(linkElement).toBeInTheDocument();
});
