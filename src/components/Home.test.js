import { screen, render, fireEvent } from "@testing-library/react";
import CounterComponent from "./CounterComponent";

// integration testing
test("counter test", () => {
  render(<CounterComponent />);

  const textEle = screen.getByTestId("count");
  const btnEle = screen.getByText("Increment");

  fireEvent.click(btnEle);


  expect(textEle).toHaveTextContent("1")

})