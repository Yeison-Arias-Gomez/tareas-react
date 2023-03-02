import { render, screen} from "@testing-library/react";
import App from "./App";

test('renders Free Dictionary title', () => {
    render(<App />);
    const title = screen.getByText(/free dictionary/i);
    expect(title).toBeInTheDocument();
});
