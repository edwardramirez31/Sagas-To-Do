import MutationObserver from '@sheerun/mutationobserver-shim';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

window.MutationObserver = MutationObserver;

Enzyme.configure({ adapter: new Adapter() });

global.console = {
  ...console,
};
