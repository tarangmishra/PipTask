import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { HomeScreen } from '../index';

describe('Rendering', () => {
    it('should match to snapshot', () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
        // const component = shallow(<HomeScreen />)
        // expect(component).toMatchSnapshot()
    });
});