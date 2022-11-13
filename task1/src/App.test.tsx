import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Integration Tests", () => {
  it("should render App", () => {
    render(<App />);
    const title = screen.getByText(/birthdays/i);
    expect(title).toBeInTheDocument();
  });

  it("should render list of people", () => {
    render(<App />);
    const people = screen.getAllByTestId("person");
    expect(people).toHaveLength(20);
  });

  it("should render list of people in random order", () => {
    render(<App />);
    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Noah Ruud/);
    expect(people[people.length - 1]).toHaveTextContent(/Celine Amundsen/);
  });

  it("should render list of people by first name", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("firstName-field"));

    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Aksel Jacobsen/);
    expect(people[people.length - 1]).toHaveTextContent(/Vilde Vedvik/);
  });

  it("should render list of people by last name", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("lastName-field"));

    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Celine Amundsen/);
    expect(people[people.length - 1]).toHaveTextContent(/Vilde Vedvik/);
  });

  it("should render list of people by age", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("age-field"));

    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Mats Holm/);
    expect(people[people.length - 1]).toHaveTextContent(/Tiril Røed/);
  });

  it("should render list of people by first name in reverse order", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("firstName-field"));
    await userEvent.selectOptions(screen.getByTestId("order"), "dsc");

    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Vilde Vedvik/);
    expect(people[people.length - 1]).toHaveTextContent(/Aksel Skuterud/);
  });

  it("should render list of people by last name in reverse order", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("lastName-field"));
    await userEvent.selectOptions(screen.getByTestId("order"), "dsc");

    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Vilde Vedvik/);
    expect(people[people.length - 1]).toHaveTextContent(/Celine Amundsen/);
  });

  it("should render list of people by age in reverse order", async () => {
    render(<App />);
    await userEvent.click(screen.getByTestId("age-field"));
    await userEvent.selectOptions(screen.getByTestId("order"), "dsc");

    const people = screen.getAllByTestId("person");
    expect(people[0]).toHaveTextContent(/Tiril Røed/);
    expect(people[people.length - 1]).toHaveTextContent(/Mats Holm/);
  });
});
