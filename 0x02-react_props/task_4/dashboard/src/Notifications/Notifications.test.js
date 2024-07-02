import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItems';
import { getLatestNotification } from '../utils/utils';

jest.mock('../utils/utils');

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders correct NotificationItem components when displayDrawer is true', () => {
    getLatestNotification.mockReturnValue('<u>test</u>');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.at(0).prop('type')).toBe('default');
    expect(notificationItems.at(1).prop('type')).toBe('urgent');
    expect(notificationItems.at(2).prop('html')).toBe('<u>test</u>');
  });

  it('renders two paragraphs when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('p')).toHaveLength(2);
    expect(wrapper.find('p').at(0).text()).toBe('Your notifications');
    expect(wrapper.find('p').at(1).text()).toBe('Here is the list of notifications');
  });

  it('displays the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('displays the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').exists()).toBe(true);
  });

  it('displays div.Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
});
