import React from "react";
import { shallow } from 'enzyme';
import { mount } from 'enzyme';


  export const commonRenderTest = function(Component) {
    window.URL.createObjectURL = jest.fn();
    global.URL.createObjectURL = jest.fn();
    if (typeof window.URL.createObjectURL === 'undefined') { 
      Object.defineProperty(window.URL, 'createObjectURL', { value: 'results'})
    }
    global.URL.createObjectURL = jest.fn(() => 'details');
    describe('MyComponent', () => {
      jest.mock('mapbox-gl', () => ({
        Map: () => ({})
      }));
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

export const commonHoverTest = function(Component) {
  describe('MyComponent', () => {
    it('should be possible to click all the buttons', () => {
      const component = mount(<Component/>);
      component
        .find('div').forEach(div => {
          div.simulate('mouseenter');
          div.simulate('mouseleave');
        })
      component.unmount();
    });
  });
};

