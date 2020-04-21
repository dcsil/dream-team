// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// https://create-react-app.dev/docs/running-tests/#initializing-test-environment
import "@testing-library/jest-dom/extend-expect";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('jest-canvas-mock');

window.URL.createObjectURL = function() {}

configure({ adapter: new Adapter() });