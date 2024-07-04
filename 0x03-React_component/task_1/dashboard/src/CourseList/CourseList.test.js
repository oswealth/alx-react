import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders CourseList component without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the correct number of rows when listCourses is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    // 2 header rows + 1 "No course available yet" row
    expect(wrapper.find(CourseListRow)).toHaveLength(3);
  });

  it('renders the correct number of rows when listCourses is provided', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    // 2 header rows + 3 course rows
    expect(wrapper.find(CourseListRow)).toHaveLength(5);
  });
});

