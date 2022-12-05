import React from 'react';
import { shallow } from 'enzyme';
import HomeScreen from '../HomeScreen/index';

describe('Testing HomeScreen', () => {
    it('should match to snapshot', () => {
        const component = shallow(<HomeScreen />)
        expect(component).toMatchSnapshot()
    });
});