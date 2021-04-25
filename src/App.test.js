import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from "enzyme";

describe("App test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it("should render the root app component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
