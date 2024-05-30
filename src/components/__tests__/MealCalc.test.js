import { cleanup, screen, fireEvent, render } from "@testing-library/react";
import MealCalc from "../MealCalc";

afterEach(cleanup);

test("Oshee High Protein Bar result for dose 1", () => {
  render(<MealCalc />);

  fireEvent.change(screen.getByTestId("product-carbohydrates"), {
    target: { value: "30" },
  });
  fireEvent.change(screen.getByTestId("product-proteins"), {
    target: { value: "27" },
  });
  fireEvent.change(screen.getByTestId("product-fat"), {
    target: { value: "32" },
  });

  fireEvent.change(screen.getByTestId("meal-grams"), {
    target: { value: "49" },
  });

  fireEvent.change(screen.getByTestId("patient-dose-per-unit"), {
    target: { value: "1" },
  });

  expect(screen.getByTestId("result-total").textContent).toBe("3.4");
  expect(screen.getByTestId("result-ce").textContent).toBe("1.5");
  expect(screen.getByTestId("result-pfe").textContent).toBe("1.9");
  expect(screen.getByTestId("result-hours").textContent).toBe("3.9");
});
