// CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test Header" />);
        expect(wrapper.find('th[colSpan=2]').exists()).toBe(true);
    });

    it('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(
            <CourseListRow isHeader={true} textFirstCell="Test Header" textSecondCell="Second Cell" />
        );
        expect(wrapper.find('th').length).toBe(2);
    });

    it('renders correctly two td elements within a tr element', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="First Cell" textSecondCell="Second Cell" />);
        expect(wrapper.find('td').length).toBe(2);
    });
});
