// CourseList.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
    it('renders CourseList component without crashing', () => {
        shallow(<CourseList />);
    });

    it('renders the 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });
});
