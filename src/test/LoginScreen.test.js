import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { LoginScreen } from '../screens/index';

describe('Rendering', () => {
    it('should match to snapshot', () => {
        const component = shallow(<LoginScreen />)
        expect(component).toMatchSnapshot()
    });
});