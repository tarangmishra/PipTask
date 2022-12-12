import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { EmailScreen } from '../index';

describe('Rendering', () => {
    it('should match to snapshot', () => {
        const component = shallow(<EmailScreen />)
        expect(component).toMatchSnapshot()
    });
});