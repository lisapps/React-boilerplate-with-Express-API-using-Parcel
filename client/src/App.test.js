import React from "react";
// import { render } from '@testing-library/react';
import { shallow } from "enzyme";
import App from "./App";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  const app = shallow(<App />);

  it("renders the title", () => {
    expect(app.find("h1").exists()).toBe(true);
  });
});
