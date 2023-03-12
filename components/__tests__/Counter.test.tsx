import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "../Counter";
import { ThemeWrapper } from "../ThemeWrapper";

describe("Counter", () => {
  it("should increment the counter after clicking the button", async () => {
    const user = userEvent.setup();
    render(<Counter />, { wrapper: ThemeWrapper });

    expect(screen.getByText(/count/i)).toHaveTextContent("Count: 0");
    await user.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByText(/count/i)).toHaveTextContent("Count: 1");
  });
});
