import { shallow } from "enzyme";
import Notifications from "./Notifications";
import React from 'react';

describe("<Notifications/>", () => {
  it("Test notifications", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
  it("Test rendering 3 times", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("li").length).toBe(3);
  });
  it('Test text render', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("p").text()).toBe("Here is the list of notifications");
  });
});
