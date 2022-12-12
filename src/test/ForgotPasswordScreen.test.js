import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ForgotPasswordScreen } from '../index';

describe('Rendering', () => {
    it('should match to snapshot', () => {
        const component = shallow(<ForgotPasswordScreen />)
        expect(component).toMatchSnapshot()
    });
});