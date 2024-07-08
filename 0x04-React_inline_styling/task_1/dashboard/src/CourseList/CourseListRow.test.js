import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);

    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    const thElement = wrapper.find("th");
    expect(thElement).toHaveLength(1);
    expect(thElement.prop("colSpan")).toEqual(2);
    expect(thElement.text()).toEqual("test");
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    const tdElements = wrapper.find("td");
    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toEqual("test");
    expect(tdElements.at(1).text()).toEqual("test");
  });
});

