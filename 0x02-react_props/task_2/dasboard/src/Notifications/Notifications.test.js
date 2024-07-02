import React, { Children } from "react";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItems";
import { getLatestNotification } from "../utils/utils";
import { shallow } from "enzyme";

jest.mock('../utils/utils');


describe('Notifications Component', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders NotificationItem component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('first NotificationItem element renders the right html', () => {
        getLatestNotification.mockReturnValue('<u>test</u>');
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem).at(2).prop('html')).toBe('<u>test</u>');
    });

    it('renders correct paragraph', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});
