import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";
import {expect} from 'vitest';

// eslint-disable-next-line no-undef
test(("should be Hello world"), () => {
    render(<App />);
   const message = screen.queryByText("Hello world!");
   expect(message).toBeVisible();
})

// eslint-disable-next-line no-undef
test(("button starts with currect color"), ()=>{
  render(<App />);
  const buttonElement = screen.getByRole("button", {name: /blue/});
  expect(buttonElement).toHaveClass("red");
});

// eslint-disable-next-line no-undef
test(("button click flow...."), ()=>{
    render(<App />);
    const buttonElement = screen.getByRole("button", {name: /blue/});
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent(/red/);
    expect(buttonElement).toHaveClass("blue");
  });