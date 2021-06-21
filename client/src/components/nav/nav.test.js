import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './nav';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('must render four <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(4);
  });
  it('first link change route to "/"', () => {
    expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
    
  });
  it('second link chage route to home ', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/countries');
  });
  it('third link chage route to create an activity ', () => {
    expect(wrapper.find(Link).at(2).prop('to')).toEqual('/activity');
  });
  it('fourth link chage route to about ', () => {
    expect(wrapper.find(Link).at(3).prop('to')).toEqual('/about');
  });
})