import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItems';


describe('NotificationItem component', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders the correct HTML with type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        const listItem = wrapper.find('li[data-notification-type="default"]');
        expect(listItem.text()).toBe('test');
    });

    it('renders the correct HTML with html prop', () => {
        const wrapper = shallow(<NotificationItem html={'<u>test</u>'} />);
        const listItem = wrapper.find('li[data-urgent=true]');
        expect(listItem.html()).toContain('<li data-urgent="true"><u>test</u></li>');
    });
});

