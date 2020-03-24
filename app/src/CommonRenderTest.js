import React from "react";
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

// import ReactDOM from 'react-dom';
// export const commonRenderTest = function(Component) {
//     global.URL.createObjectURL = jest.fn();
//     if (typeof window.URL.createObjectURL === 'undefined') { 
//       Object.defineProperty(window.URL, 'createObjectURL', { value: 'results'})
//     }
//     global.URL.createObjectURL = jest.fn(() => 'details');
//     it('renders without crashing', () => {
//       const div = document.createElement('div');
//       ReactDOM.render(<Component />, div);
//     });
//   };


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