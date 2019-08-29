import { mount } from 'enzyme';
import jsdom from 'jsdom';
import React from 'react';
import Photos from '../client/components/Photos.jsx';
import PhotosGrid from '../client/components/photosGrid.jsx';
import PhotosGridEntry from '../client/components/photosGrid.jsx';

jest.mock('axios');

describe('<Photos>', () => {
  it('State photos property length', () => {
    const wrapper = mount(<Photos listingId={15} />);
    setTimeout(() => {
      expect(wrapper.state('photos')).toHaveLength(4);
    }, 500);
  })
})