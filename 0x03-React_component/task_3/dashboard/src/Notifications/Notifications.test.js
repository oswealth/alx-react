import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItems';
import { getLatestNotification } from '../utils/utils';

jest.mock('../utils/utils');

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe('Notifications Component', () => {
  beforeEach(() => {
    getLatestNotification.mockReturnValue('<u>test</u>');
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(1); // updated to reflect default notification item
  });

  it('renders correct NotificationItem components when displayDrawer is true', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const notificationItems = wrapper.find(NotificationItem);
    expect(notificationItems.at(0).prop('type')).toBe('default');
    expect(notificationItems.at(1).prop('type')).toBe('urgent');
    expect(notificationItems.at(2).prop('html')).toEqual({ __html: '<u>test</u>' });
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

  it("renders correctly when listNotifications is not passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>)).toBe(false);
  });

  it("renders correctly when empty array is passed", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>)).toBe(false);
  });

  it('renders "No new notifications for now" instead of "Here is the list of notifications" when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);

    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(true);

    expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
  });
});
