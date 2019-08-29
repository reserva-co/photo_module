import { shallow } from 'enzyme';
import React from 'react';
import App from '../client/components/App.jsx';
import Photos from '../client/components/Photos.jsx';

describe('<App />', () => {
  it('App has <div>', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('App has <h3>', () => {
    const wrapper = shallow(
      <App />
    );
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});




