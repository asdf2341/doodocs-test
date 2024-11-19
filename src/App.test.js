import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders upload form correctly", () => {
  render(<App />);

  expect(screen.getByText(/Загрузить HTML-шаблон:/i)).toBeInTheDocument();
  expect(screen.getByText(/Загрузите переменные JSON:/i)).toBeInTheDocument();

  expect(screen.getByRole("button", { name: /Продолжить/i })).toBeInTheDocument();
});

