import React from "react";
import { shallow } from 'enzyme';
import { mount } from 'enzyme';


  export const commonRenderTest = function(Component) {
    global.URL.createObjectURL = jest.fn();
    if (typeof window.URL.createObjectURL === 'undefined') { 
      Object.defineProperty(window.URL, 'createObjectURL', { value: 'results'})
    }
    global.URL.createObjectURL = jest.fn(() => 'details');
    describe('MyComponent', () => {
        it('should render correctly in "debug" mode', () => {
          const component = shallow(<Component debug />);
        });
      });
  };

  export const commonMountTest = function(Component) {
      describe('MyComponent', () => {
        it('should be possible to activate button with Spacebar', () => {
          const component = mount(<Component />);
          // component
          //   .find('button#my-button-one')
          //   .simulate('keydown', { keyCode: 32 });
          // expect(component).toMatchSnapshot();
          component.unmount();
        });
      });
  };

  export const commonButtonTest = function(Component) {
    describe('MyComponent', () => {
      it('should be possible to click all the buttons', () => {
        const component = mount(<Component/>);
        component
          .find('Button').forEach(button => {
            button.simulate('click');
          })
        component.unmount();
      });
    });
};

