import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../screens/HomeScreen/index';
test('should test Header component', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
});