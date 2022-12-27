import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import  HomeScreen  from '../screens/HomeScreen/index';
const targetArray = [1, 2, 3, 4, 5, 5, 7, 8, 9, 10];
describe('Rendering', () => {
    it('should match to snapshot', () => {
        const tree = renderer.create(<HomeScreen />).toJSON();
        expect(tree).toMatchSnapshot();
        // const component = shallow(<HomeScreen />)
        // expect(component).toMatchSnapshot()
    });
   

    // test("Verify if are received and returned only numbers", () => {
    //     targetArray.forEach((target) => {
    //         expect(typeof target).toBe("number");
    //     });
    // });
});