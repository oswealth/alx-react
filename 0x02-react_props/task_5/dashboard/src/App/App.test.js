import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("does not render CourseList if not logged in", () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("renders CourseList if logged in", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
    expect(wrapper.find(Login)).toHaveLength(0);
  });
});


