import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jsdom-global/register'; //at the top of file , even  , before importing react

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
